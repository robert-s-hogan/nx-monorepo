import { create } from 'zustand';
import { v4 as uuidv4 } from 'uuid';
import type { Character, Session, SkillTrigger } from '../types';
import {
  fetchCharacters,
  createCharacter,
  patchCharacter,
  deleteCharacterById,
  fetchSessions,
  createSession as createSessionRequest,
  deleteSessionById,
  addCharacterToSession,
  removeCharacterFromSession,
} from '../lib/api';
import { pickSkillWithFallback } from '../lib/skillPicker';
import randomSkillsData from '../data/random_skills.json';

interface AppStore {
  characters: Character[];
  sessions: Session[];
  activeSessionId: string | null;
  loading: boolean;
  error: string | null;

  // Loads all data from the API — call once on app mount
  init: () => Promise<void>;

  // Character actions (optimistic: update local state first, then persist)
  addCharacter: (
    char: Omit<Character, 'id' | 'random_skills'>
  ) => Promise<Character>;
  removeCharacter: (id: string) => Promise<void>;
  updateCharacter: (id: string, updates: Partial<Character>) => Promise<void>;
  assignRandomSkill: (
    characterId: string,
    trigger: SkillTrigger
  ) => Promise<void>;
  clearRandomSkills: (characterId: string) => Promise<void>;

  // Session actions
  createSession: (name: string) => Promise<Session>;
  setActiveSession: (id: string | null) => void;
  addToSession: (sessionId: string, characterId: string) => Promise<void>;
  removeFromSession: (sessionId: string, characterId: string) => Promise<void>;
  deleteSession: (sessionId: string) => Promise<void>;

  // Derived helpers (sync — read from local state)
  getActiveSession: () => Session | null;
  getSessionCharacters: (sessionId: string) => Character[];
}

export const useStore = create<AppStore>((set, get) => ({
  characters: [],
  sessions: [],
  activeSessionId: null,
  loading: false,
  error: null,

  init: async () => {
    set({ loading: true, error: null });
    try {
      const [characters, sessions] = await Promise.all([
        fetchCharacters(),
        fetchSessions(),
      ]);
      set({ characters, sessions, loading: false });
    } catch (err) {
      const message =
        err instanceof Error ? err.message : 'Failed to connect to database';
      set({ loading: false, error: message });
    }
  },

  addCharacter: async (charData) => {
    const char: Character = { ...charData, id: uuidv4(), random_skills: [] };
    set((s) => ({ characters: [...s.characters, char] }));
    await createCharacter(char);
    return char;
  },

  removeCharacter: async (id) => {
    set((s) => ({
      characters: s.characters.filter((c) => c.id !== id),
      sessions: s.sessions.map((sess) => ({
        ...sess,
        active_character_ids: sess.active_character_ids.filter(
          (cid) => cid !== id
        ),
      })),
    }));
    await deleteCharacterById(id);
  },

  updateCharacter: async (id, updates) => {
    const char = get().characters.find((c) => c.id === id);
    if (!char) return;
    const updated = { ...char, ...updates };
    set((s) => ({
      characters: s.characters.map((c) => (c.id === id ? updated : c)),
    }));
    await patchCharacter(updated);
  },

  assignRandomSkill: async (characterId, trigger) => {
    const char = get().characters.find((c) => c.id === characterId);
    if (!char) return;
    const alreadyAssigned = char.random_skills.map((s) => s.skill_id);
    const skill = pickSkillWithFallback(
      randomSkillsData.skills as never,
      trigger,
      alreadyAssigned
    );
    if (!skill) return;
    await get().updateCharacter(characterId, {
      random_skills: [
        ...char.random_skills,
        { skill_id: skill.id, assigned_at: Date.now(), trigger },
      ],
    });
  },

  clearRandomSkills: async (characterId) => {
    await get().updateCharacter(characterId, { random_skills: [] });
  },

  createSession: async (name) => {
    const session: Session = {
      id: uuidv4(),
      name,
      active_character_ids: [],
      created_at: new Date().toISOString(),
    };
    set((s) => ({
      sessions: [...s.sessions, session],
      activeSessionId: session.id,
    }));
    await createSessionRequest(session);
    return session;
  },

  setActiveSession: (id) => set({ activeSessionId: id }),

  addToSession: async (sessionId, characterId) => {
    const session = get().sessions.find((s) => s.id === sessionId);
    if (!session || session.active_character_ids.includes(characterId)) return;
    const updated = {
      ...session,
      active_character_ids: [...session.active_character_ids, characterId],
    };
    set((s) => ({
      sessions: s.sessions.map((sess) =>
        sess.id === sessionId ? updated : sess
      ),
    }));
    await addCharacterToSession(sessionId, characterId);
  },

  removeFromSession: async (sessionId, characterId) => {
    const session = get().sessions.find((s) => s.id === sessionId);
    if (!session) return;
    const updated = {
      ...session,
      active_character_ids: session.active_character_ids.filter(
        (id) => id !== characterId
      ),
    };
    set((s) => ({
      sessions: s.sessions.map((sess) =>
        sess.id === sessionId ? updated : sess
      ),
    }));
    await removeCharacterFromSession(sessionId, characterId);
  },

  deleteSession: async (sessionId) => {
    set((s) => ({
      sessions: s.sessions.filter((sess) => sess.id !== sessionId),
      activeSessionId:
        s.activeSessionId === sessionId ? null : s.activeSessionId,
    }));
    await deleteSessionById(sessionId);
  },

  getActiveSession: () => {
    const { sessions, activeSessionId } = get();
    return sessions.find((s) => s.id === activeSessionId) ?? null;
  },

  getSessionCharacters: (sessionId) => {
    const session = get().sessions.find((s) => s.id === sessionId);
    if (!session) return [];
    return session.active_character_ids
      .map((id) => get().characters.find((c) => c.id === id))
      .filter(Boolean) as Character[];
  },
}));
