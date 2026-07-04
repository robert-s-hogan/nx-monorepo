import { create } from 'zustand';
import { v4 as uuidv4 } from 'uuid';
import type { RealtimeChannel } from '@supabase/supabase-js';
import type {
  Campaign,
  Character,
  CombatEvent,
  Encounter,
  GameMap,
  MapToken,
  RestState,
  Session,
  SessionMode,
  SkillTrigger,
} from '../types';
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
  fetchCampaigns,
  createCampaign as createCampaignRequest,
  addCampaignXp as addCampaignXpRequest,
  deleteCampaignById,
  fetchEncounters,
  createEncounter as createEncounterRequest,
  deleteEncounterById,
  fetchRestState,
  saveRestState,
  fetchMaps,
  createMap as createMapRequest,
  fetchTokens,
  createToken as createTokenRequest,
  updateTokenPosition as updateTokenPositionRequest,
  deleteToken as deleteTokenRequest,
  fetchCombatEvents,
  triggerAttack,
} from '../lib/api';
import { pickSkillWithFallback } from '../lib/skillPicker';
import randomSkillsData from '../data/random_skills.json';
import { supabase } from '../lib/supabaseClient';

// Not part of the zustand state itself (a Realtime channel isn't serializable
// store data) — module-scoped so broadcastTokenDrag can reach the channel
// subscribeMapRealtime opened.
let mapChannel: RealtimeChannel | null = null;

interface AppStore {
  characters: Character[];
  sessions: Session[];
  campaigns: Campaign[];
  encounters: Encounter[];
  restState: RestState | null;
  maps: GameMap[];
  tokens: MapToken[];
  combatEvents: CombatEvent[];
  activeMapId: string | null;
  activeSessionId: string | null;
  activeCampaignId: string | null;
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
  createSession: (name: string, campaignId?: string | null) => Promise<Session>;
  setActiveSession: (id: string | null) => void;
  addToSession: (sessionId: string, characterId: string) => Promise<void>;
  removeFromSession: (sessionId: string, characterId: string) => Promise<void>;
  deleteSession: (sessionId: string) => Promise<void>;

  // Campaign actions
  createCampaign: (
    name: string,
    numberOfPlayers: number,
    sessionMode?: SessionMode
  ) => Promise<Campaign>;
  setActiveCampaign: (id: string | null) => void;
  addCampaignXp: (id: string, delta: number) => Promise<void>;
  deleteCampaign: (id: string) => Promise<void>;

  // Conquest-mode actions (loaded lazily — only when a conquest campaign is active)
  loadConquestData: (campaignId: string) => Promise<void>;
  addEncounter: (encounter: Omit<Encounter, 'id' | 'created_at'>) => Promise<void>;
  removeEncounter: (id: string) => Promise<void>;
  takeShortRest: (campaignId: string, restNumber: 1 | 2) => Promise<void>;
  takeLongRest: (campaignId: string) => Promise<void>;

  // Map / token / combat actions
  loadMapsForSession: (sessionId: string) => Promise<void>;
  createMap: (sessionId: string, name: string) => Promise<GameMap>;
  setActiveMap: (id: string | null) => void;
  loadMapData: (mapId: string) => Promise<void>;
  addToken: (
    mapId: string,
    token: Omit<MapToken, 'id' | 'map_id' | 'updated_at'>
  ) => Promise<void>;
  removeToken: (mapId: string, tokenId: string) => Promise<void>;
  moveTokenLocal: (tokenId: string, x: number, y: number) => void;
  commitTokenPosition: (mapId: string, tokenId: string, x: number, y: number) => Promise<void>;
  attack: (mapId: string, attackerTokenId: string, defenderTokenId: string) => Promise<void>;
  subscribeMapRealtime: (mapId: string) => () => void;
  broadcastTokenDrag: (tokenId: string, x: number, y: number) => void;

  // Derived helpers (sync — read from local state)
  getActiveSession: () => Session | null;
  getSessionCharacters: (sessionId: string) => Character[];
  getActiveCampaign: () => Campaign | null;
}

export const useStore = create<AppStore>((set, get) => ({
  characters: [],
  sessions: [],
  campaigns: [],
  encounters: [],
  restState: null,
  maps: [],
  tokens: [],
  combatEvents: [],
  activeMapId: null,
  activeSessionId: null,
  activeCampaignId: null,
  loading: false,
  error: null,

  init: async () => {
    set({ loading: true, error: null });
    try {
      const [characters, sessions, campaigns] = await Promise.all([
        fetchCharacters(),
        fetchSessions(),
        fetchCampaigns(),
      ]);
      set({ characters, sessions, campaigns, loading: false });
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

  createSession: async (name, campaignId) => {
    const session: Session = {
      id: uuidv4(),
      name,
      active_character_ids: [],
      created_at: new Date().toISOString(),
      campaign_id: campaignId ?? get().activeCampaignId ?? null,
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

  createCampaign: async (name, numberOfPlayers, sessionMode = 'freeform') => {
    const campaign: Campaign = {
      id: uuidv4(),
      name,
      progression_system: 'dnd5e',
      session_mode: sessionMode,
      current_xp: 0,
      number_of_players: numberOfPlayers,
      created_at: new Date().toISOString(),
    };
    set((s) => ({
      campaigns: [...s.campaigns, campaign],
      activeCampaignId: campaign.id,
    }));
    await createCampaignRequest(campaign);
    return campaign;
  },

  setActiveCampaign: (id) => set({ activeCampaignId: id }),

  addCampaignXp: async (id, delta) => {
    set((s) => ({
      campaigns: s.campaigns.map((c) =>
        c.id === id ? { ...c, current_xp: c.current_xp + delta } : c
      ),
    }));
    await addCampaignXpRequest(id, delta);
  },

  deleteCampaign: async (id) => {
    set((s) => ({
      campaigns: s.campaigns.filter((c) => c.id !== id),
      activeCampaignId: s.activeCampaignId === id ? null : s.activeCampaignId,
      sessions: s.sessions.map((sess) =>
        sess.campaign_id === id ? { ...sess, campaign_id: null } : sess
      ),
    }));
    await deleteCampaignById(id);
  },

  loadConquestData: async (campaignId) => {
    const [encounters, restState] = await Promise.all([
      fetchEncounters(campaignId),
      fetchRestState(campaignId),
    ]);
    set({ encounters, restState });
  },

  addEncounter: async (encounterData) => {
    const encounter: Encounter = {
      ...encounterData,
      id: uuidv4(),
      created_at: new Date().toISOString(),
    };
    set((s) => ({ encounters: [...s.encounters, encounter] }));
    await createEncounterRequest(encounter);
  },

  removeEncounter: async (id) => {
    set((s) => ({ encounters: s.encounters.filter((e) => e.id !== id) }));
    await deleteEncounterById(id);
  },

  takeShortRest: async (campaignId, restNumber) => {
    const current = get().restState ?? {
      campaign_id: campaignId,
      short_rests_taken: [false, false],
      long_rest_needed: false,
    };
    const shortRestsTaken = [...current.short_rests_taken];
    shortRestsTaken[restNumber - 1] = true;
    const updated: RestState = { ...current, short_rests_taken: shortRestsTaken };
    set({ restState: updated });
    await saveRestState(updated);
  },

  takeLongRest: async (campaignId) => {
    const current = get().restState ?? {
      campaign_id: campaignId,
      short_rests_taken: [false, false],
      long_rest_needed: false,
    };
    const updated: RestState = {
      ...current,
      short_rests_taken: [false, false],
      long_rest_needed: false,
    };
    set({ restState: updated });
    await saveRestState(updated);
  },

  loadMapsForSession: async (sessionId) => {
    const maps = await fetchMaps(sessionId);
    set({ maps });
  },

  createMap: async (sessionId, name) => {
    const map: GameMap = {
      id: uuidv4(),
      session_id: sessionId,
      name,
      width: 1000,
      height: 1000,
      created_at: new Date().toISOString(),
    };
    set((s) => ({ maps: [...s.maps, map], activeMapId: map.id }));
    await createMapRequest(map);
    return map;
  },

  setActiveMap: (id) => set({ activeMapId: id }),

  loadMapData: async (mapId) => {
    const [tokens, combatEvents] = await Promise.all([
      fetchTokens(mapId),
      fetchCombatEvents(mapId),
    ]);
    set({ tokens, combatEvents });
  },

  addToken: async (mapId, tokenData) => {
    const token: MapToken = {
      ...tokenData,
      id: uuidv4(),
      map_id: mapId,
      updated_at: new Date().toISOString(),
    };
    set((s) => ({ tokens: [...s.tokens, token] }));
    await createTokenRequest(token);
  },

  removeToken: async (mapId, tokenId) => {
    set((s) => ({ tokens: s.tokens.filter((t) => t.id !== tokenId) }));
    await deleteTokenRequest(mapId, tokenId);
  },

  // Local-only — driven by incoming Broadcast messages from other clients'
  // in-progress drags. No API call; the committed position lands separately
  // via commitTokenPosition + Postgres Changes.
  moveTokenLocal: (tokenId, x, y) => {
    set((s) => ({
      tokens: s.tokens.map((t) => (t.id === tokenId ? { ...t, x, y } : t)),
    }));
  },

  commitTokenPosition: async (mapId, tokenId, x, y) => {
    get().moveTokenLocal(tokenId, x, y);
    await updateTokenPositionRequest(mapId, tokenId, x, y);
  },

  attack: async (mapId, attackerTokenId, defenderTokenId) => {
    // Resolution happens server-side; local state updates when the result
    // comes back through the map_tokens/combat_events Realtime subscription,
    // same as for every other connected client.
    await triggerAttack(mapId, attackerTokenId, defenderTokenId);
  },

  subscribeMapRealtime: (mapId) => {
    const channel = supabase
      .channel(`map-${mapId}`)
      .on('broadcast', { event: 'token_drag' }, ({ payload }) => {
        get().moveTokenLocal(payload.tokenId, payload.x, payload.y);
      })
      .on(
        'postgres_changes',
        { event: 'UPDATE', schema: 'public', table: 'map_tokens', filter: `map_id=eq.${mapId}` },
        (payload) => {
          set((s) => ({
            tokens: s.tokens.map((t) =>
              t.id === payload.new.id ? { ...t, ...payload.new } : t
            ),
          }));
        }
      )
      .on(
        'postgres_changes',
        { event: 'INSERT', schema: 'public', table: 'map_tokens', filter: `map_id=eq.${mapId}` },
        () => {
          fetchTokens(mapId).then((tokens) => set({ tokens }));
        }
      )
      .on(
        'postgres_changes',
        { event: 'DELETE', schema: 'public', table: 'map_tokens' },
        (payload) => {
          set((s) => ({ tokens: s.tokens.filter((t) => t.id !== payload.old.id) }));
        }
      )
      .on(
        'postgres_changes',
        { event: 'INSERT', schema: 'public', table: 'combat_events', filter: `map_id=eq.${mapId}` },
        (payload) => {
          set((s) => ({ combatEvents: [...s.combatEvents, payload.new as CombatEvent] }));
        }
      )
      .subscribe();

    mapChannel = channel;

    return () => {
      supabase.removeChannel(channel);
      mapChannel = null;
    };
  },

  broadcastTokenDrag: (tokenId, x, y) => {
    mapChannel?.send({ type: 'broadcast', event: 'token_drag', payload: { tokenId, x, y } });
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

  getActiveCampaign: () => {
    const { campaigns, activeCampaignId } = get();
    return campaigns.find((c) => c.id === activeCampaignId) ?? null;
  },
}));
