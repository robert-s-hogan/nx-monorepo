import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { v4 as uuidv4 } from 'uuid';
import type { RealtimeChannel } from '@supabase/supabase-js';
import type {
  Campaign,
  Character,
  CombatEvent,
  Encounter,
  GameMap,
  GeneralCheckEvent,
  MapStructure,
  MapToken,
  MovementEvent,
  RestState,
  Session,
  SessionMode,
  SkillTrigger,
  StructureCheckWithOutcomes,
  StructureEvent,
  StructureOutcome,
  StructureRollPreview,
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
  setSessionActiveMap as setSessionActiveMapRequest,
  fetchMaps,
  createMap as createMapRequest,
  fetchTokens,
  createToken as createTokenRequest,
  updateTokenPosition as updateTokenPositionRequest,
  updateTokenSide as updateTokenSideRequest,
  deleteToken as deleteTokenRequest,
  fetchCombatEvents,
  triggerAttack,
  fetchMovementEvents,
  startCombat as startCombatRequest,
  advanceTurn as advanceTurnRequest,
  endCombat as endCombatRequest,
  joinTurnOrder as joinTurnOrderRequest,
  fetchStructures,
  createStructure as createStructureRequest,
  deleteStructure as deleteStructureRequest,
  fetchStructureChecks,
  createStructureCheck as createStructureCheckRequest,
  resolveStructureCheck as resolveStructureCheckRequest,
  fetchStructureEvents,
  spawnBoss as spawnBossRequest,
  updateStructurePosition as updateStructurePositionRequest,
  fetchGeneralCheckEvents,
  resolveGeneralCheck as resolveGeneralCheckRequest,
  updateMapStory as updateMapStoryRequest,
} from '../lib/api';
import { generateMapStory } from '../lib/rulesets/storyGen';
import { generateStructureDraft } from '../lib/rulesets/structureGen';
import { pickSkillWithFallback } from '../lib/skillPicker';
import randomSkillsData from '../data/random_skills.json';
import { supabase } from '../lib/supabaseClient';

// How many structures createMap auto-generates alongside a new map's story
// — enough to make the map feel populated without exhausting the theme's
// 8-clue pool in one shot (each structure can claim up to 4).
const STARTER_STRUCTURE_COUNT = 4;

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
  movementEvents: MovementEvent[];
  structures: MapStructure[];
  // Keyed by structure_id — checks/outcomes are DM-only content, loaded
  // lazily when a structure's panel is opened rather than up front with
  // the rest of the map data (see loadMapData vs loadStructureChecks).
  structureChecks: Record<string, StructureCheckWithOutcomes[]>;
  structureEvents: StructureEvent[];
  generalCheckEvents: GeneralCheckEvent[];
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
  rerollMapStory: (mapId: string) => Promise<void>;
  consumeStoryClues: (mapId: string, clueIds: string[]) => Promise<void>;
  // Also persists to the session's active_map_id (see
  // supabase/migrations/0011_session_active_map.sql) so the no-login
  // /map?session=<id> preview link knows which map to follow.
  setActiveMap: (id: string | null) => Promise<void>;
  loadMapData: (mapId: string) => Promise<void>;
  addToken: (
    mapId: string,
    token: Omit<MapToken, 'id' | 'map_id' | 'updated_at'>
  ) => Promise<void>;
  removeToken: (mapId: string, tokenId: string) => Promise<void>;
  moveTokenLocal: (tokenId: string, x: number, y: number) => void;
  commitTokenPosition: (mapId: string, tokenId: string, x: number, y: number) => Promise<void>;
  // Re-flags an already-placed token — a "backstab" turning an ally
  // hostile, or just fixing a mis-set side during setup.
  setTokenSide: (mapId: string, tokenId: string, side: MapToken['side']) => Promise<void>;
  attack: (
    mapId: string,
    attackerTokenId: string,
    defenderTokenId: string,
    rawAttackRoll: number,
    rawDamageRoll: number
  ) => Promise<void>;
  subscribeMapRealtime: (mapId: string) => () => void;
  broadcastTokenDrag: (tokenId: string, x: number, y: number) => void;

  // Turn tracking — resolution happens server-side, same pattern as attack/
  // rollStructureCheck; local state updates via the game_maps Realtime
  // subscription so every connected client stays in sync.
  startCombat: (mapId: string, initiative: Record<string, number>) => Promise<void>;
  advanceTurn: (mapId: string) => Promise<void>;
  endCombat: (mapId: string) => Promise<void>;
  joinTurnOrder: (mapId: string, tokenId: string, initiative: number) => Promise<void>;

  // Structure actions
  addStructure: (
    mapId: string,
    structure: Omit<MapStructure, 'id' | 'map_id' | 'created_at'>
  ) => Promise<string>;
  removeStructure: (mapId: string, structureId: string) => Promise<void>;
  commitStructurePosition: (mapId: string, structureId: string, x: number, y: number) => Promise<void>;
  loadStructureChecks: (structureId: string) => Promise<void>;
  addStructureCheck: (
    structureId: string,
    check: { skill: string; label: string },
    outcomes: Omit<StructureOutcome, 'id' | 'check_id'>[]
  ) => Promise<void>;
  rollStructureCheck: (
    mapId: string,
    structureId: string,
    checkId: string,
    characterId: string | null,
    rawRoll: number,
    outcomeId?: string,
    rawDamageRoll?: number
  ) => Promise<StructureEvent | StructureRollPreview>;
  spawnBossOnMap: (mapId: string, characterId: string) => Promise<void>;
  rollGeneralCheck: (
    mapId: string,
    characterId: string | null,
    skill: string,
    dc: number,
    rawRoll: number
  ) => Promise<GeneralCheckEvent>;

  // Derived helpers (sync — read from local state)
  getActiveSession: () => Session | null;
  getSessionCharacters: (sessionId: string) => Character[];
  getActiveCampaign: () => Campaign | null;
}

// localStorage isn't defined during Next.js SSR — guard so hydrating the
// store on the server (pages/map.tsx and pages/session.tsx aren't SSR-off)
// doesn't throw. Real reads/writes only ever happen client-side.
const sessionStorage = {
  getItem: (name: string) => (typeof window === 'undefined' ? null : localStorage.getItem(name)),
  setItem: (name: string, value: string) => {
    if (typeof window !== 'undefined') localStorage.setItem(name, value);
  },
  removeItem: (name: string) => {
    if (typeof window !== 'undefined') localStorage.removeItem(name);
  },
};

export const useStore = create<AppStore>()(
  persist(
    (set, get) => ({
  characters: [],
  sessions: [],
  campaigns: [],
  encounters: [],
  restState: null,
  maps: [],
  tokens: [],
  combatEvents: [],
  movementEvents: [],
  structures: [],
  structureChecks: {},
  structureEvents: [],
  generalCheckEvents: [],
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
      turn_order: [],
      current_turn_index: 0,
      round_number: 1,
      combat_active: false,
      story: generateMapStory(),
    };
    set((s) => ({
      maps: [...s.maps, map],
      activeMapId: map.id,
      // Creating a map already implicitly makes it the active one — update
      // the local session copy too (not just the server, below), so a
      // same-render "is this session's active_map_id already correct?"
      // check (see pages/map.tsx's sync effect) sees fresh data instead of
      // re-firing on every render.
      sessions: s.sessions.map((sess) =>
        sess.id === sessionId ? { ...sess, active_map_id: map.id } : sess
      ),
    }));
    await createMapRequest(map);
    await setSessionActiveMapRequest(sessionId, map.id);

    // A starter batch of structures tied to the new story, so the DM isn't
    // opening a blank map — map-creation-only (not on story reroll, to
    // avoid piling up structures mid-session, see rerollMapStory). Threads
    // a local working copy of the story's clues through each generation
    // call so the 4 structures don't all claim the same still-"unused"
    // clues before any of them are persisted.
    let workingStory = map.story ?? null;
    const allUsedClueIds: string[] = [];
    for (let i = 0; i < STARTER_STRUCTURE_COUNT; i++) {
      const draft = generateStructureDraft(workingStory);
      const structureId = await get().addStructure(map.id, {
        name: draft.name,
        structure_type: draft.structure_type,
        x: 150 + Math.random() * 700,
        y: 150 + Math.random() * 700,
        width: 60,
        height: 60,
        revealed: true,
      });
      await get().addStructureCheck(structureId, draft.check, draft.outcomes);
      allUsedClueIds.push(...draft.usedClueIds);
      if (workingStory && draft.usedClueIds.length > 0) {
        workingStory = {
          ...workingStory,
          clues: workingStory.clues.map((c) =>
            draft.usedClueIds.includes(c.id) ? { ...c, used: true } : c
          ),
        };
      }
    }
    if (allUsedClueIds.length > 0) {
      await get().consumeStoryClues(map.id, allUsedClueIds);
    }

    return map;
  },

  rerollMapStory: async (mapId) => {
    // No optimistic update — local state picks it up via the game_maps
    // Realtime subscription below, same as startCombat/endCombat.
    await updateMapStoryRequest(mapId, generateMapStory());
  },

  consumeStoryClues: async (mapId, clueIds) => {
    const map = get().maps.find((m) => m.id === mapId);
    if (!map?.story || clueIds.length === 0) return;
    // Optimistic here (unlike rerollMapStory) — the next Generate Structure
    // click needs to see these clues as used immediately, not after a
    // Realtime round trip, or a fast double-click could hand out the same
    // clue twice.
    const story = {
      ...map.story,
      clues: map.story.clues.map((c) => (clueIds.includes(c.id) ? { ...c, used: true } : c)),
    };
    set((s) => ({ maps: s.maps.map((m) => (m.id === mapId ? { ...m, story } : m)) }));
    await updateMapStoryRequest(mapId, story);
  },

  setActiveMap: async (id) => {
    const sessionId = get().activeSessionId;
    set((s) => ({
      activeMapId: id,
      sessions: sessionId
        ? s.sessions.map((sess) => (sess.id === sessionId ? { ...sess, active_map_id: id } : sess))
        : s.sessions,
    }));
    if (sessionId) {
      await setSessionActiveMapRequest(sessionId, id);
    }
  },

  loadMapData: async (mapId) => {
    const [tokens, combatEvents, movementEvents, structures, structureEvents, generalCheckEvents] =
      await Promise.all([
        fetchTokens(mapId),
        fetchCombatEvents(mapId),
        fetchMovementEvents(mapId),
        fetchStructures(mapId),
        fetchStructureEvents(mapId),
        fetchGeneralCheckEvents(mapId),
      ]);
    set({ tokens, combatEvents, movementEvents, structures, structureEvents, generalCheckEvents });
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

  setTokenSide: async (mapId, tokenId, side) => {
    set((s) => ({ tokens: s.tokens.map((t) => (t.id === tokenId ? { ...t, side } : t)) }));
    await updateTokenSideRequest(mapId, tokenId, side);
  },

  attack: async (mapId, attackerTokenId, defenderTokenId, rawAttackRoll, rawDamageRoll) => {
    // Resolution happens server-side; local token/event state updates when
    // the result comes back through the map_tokens/combat_events Realtime
    // subscription, same as for every other connected client. Characters
    // aren't Realtime-subscribed anywhere in this app, so a landed hit's
    // practiced-bonus bump (see lib/server/combat.ts) needs an explicit
    // refetch to show up locally.
    await triggerAttack(mapId, attackerTokenId, defenderTokenId, rawAttackRoll, rawDamageRoll);
    const characters = await fetchCharacters();
    set({ characters });
  },

  startCombat: async (mapId, initiative) => {
    // Local state updates via the game_maps Realtime subscription below,
    // same as every other connected client — no optimistic write here.
    await startCombatRequest(mapId, initiative);
  },

  advanceTurn: async (mapId) => {
    await advanceTurnRequest(mapId);
  },

  endCombat: async (mapId) => {
    await endCombatRequest(mapId);
  },

  joinTurnOrder: async (mapId, tokenId, initiative) => {
    // Local state updates via the game_maps/map_tokens Realtime
    // subscriptions below, same as startCombat.
    await joinTurnOrderRequest(mapId, tokenId, initiative);
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
      .on(
        'postgres_changes',
        { event: 'INSERT', schema: 'public', table: 'movement_events', filter: `map_id=eq.${mapId}` },
        (payload) => {
          set((s) => ({ movementEvents: [...s.movementEvents, payload.new as MovementEvent] }));
        }
      )
      .on(
        'postgres_changes',
        { event: 'UPDATE', schema: 'public', table: 'game_maps', filter: `id=eq.${mapId}` },
        (payload) => {
          set((s) => ({
            maps: s.maps.map((m) => (m.id === payload.new.id ? { ...m, ...payload.new } : m)),
          }));
        }
      )
      .on(
        'postgres_changes',
        { event: '*', schema: 'public', table: 'map_structures', filter: `map_id=eq.${mapId}` },
        () => {
          fetchStructures(mapId).then((structures) => set({ structures }));
        }
      )
      .on(
        'postgres_changes',
        { event: 'INSERT', schema: 'public', table: 'structure_events', filter: `map_id=eq.${mapId}` },
        (payload) => {
          set((s) => ({ structureEvents: [...s.structureEvents, payload.new as StructureEvent] }));
        }
      )
      .on(
        'postgres_changes',
        { event: 'INSERT', schema: 'public', table: 'general_check_events', filter: `map_id=eq.${mapId}` },
        (payload) => {
          set((s) => ({ generalCheckEvents: [...s.generalCheckEvents, payload.new as GeneralCheckEvent] }));
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

  addStructure: async (mapId, structureData) => {
    const structure: MapStructure = {
      ...structureData,
      id: uuidv4(),
      map_id: mapId,
      created_at: new Date().toISOString(),
    };
    set((s) => ({ structures: [...s.structures, structure] }));
    await createStructureRequest(structure);
    return structure.id;
  },

  removeStructure: async (mapId, structureId) => {
    set((s) => ({ structures: s.structures.filter((st) => st.id !== structureId) }));
    await deleteStructureRequest(mapId, structureId);
  },

  commitStructurePosition: async (mapId, structureId, x, y) => {
    set((s) => ({
      structures: s.structures.map((st) => (st.id === structureId ? { ...st, x, y } : st)),
    }));
    await updateStructurePositionRequest(mapId, structureId, x, y);
  },

  loadStructureChecks: async (structureId) => {
    const checks = await fetchStructureChecks(structureId);
    set((s) => ({ structureChecks: { ...s.structureChecks, [structureId]: checks } }));
  },

  addStructureCheck: async (structureId, checkData, outcomes) => {
    const check = {
      ...checkData,
      id: uuidv4(),
      structure_id: structureId,
      created_at: new Date().toISOString(),
    };
    const created = await createStructureCheckRequest(structureId, check, outcomes);
    set((s) => ({
      structureChecks: {
        ...s.structureChecks,
        [structureId]: [...(s.structureChecks[structureId] ?? []), created],
      },
    }));
  },

  rollStructureCheck: async (mapId, structureId, checkId, characterId, rawRoll, outcomeId, rawDamageRoll) => {
    // Resolution (tier, damage, boss spawn) happens server-side off the
    // DM-supplied roll; local state updates when a finalized event comes
    // back through the structure_events/map_tokens Realtime subscription,
    // same as attack(). A preview response (damage still needs a manual
    // roll) isn't persisted anywhere and is just returned to the caller.
    return resolveStructureCheckRequest(mapId, structureId, checkId, characterId, rawRoll, outcomeId, rawDamageRoll);
  },

  spawnBossOnMap: async (mapId, characterId) => {
    // The new token lands via the map_tokens Realtime subscription.
    await spawnBossRequest(mapId, characterId);
  },

  rollGeneralCheck: async (mapId, characterId, skill, dc, rawRoll) => {
    // Resolves and persists in one step (no damage-preview split like
    // structure checks — nothing here can deal damage or spawn a boss);
    // local state updates via the general_check_events Realtime
    // subscription below, same as every other connected client.
    return resolveGeneralCheckRequest(mapId, characterId, skill, dc, rawRoll);
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
    }),
    {
      // Persists which session/map a DM was engaged with across page
      // reloads and fresh visits, so opening the map doesn't require a
      // detour through the Session page every time — everything else
      // (characters, tokens, etc.) is re-fetched fresh from Supabase on
      // load and intentionally not persisted here.
      name: 'dm-toolkit-active-session',
      storage: createJSONStorage(() => sessionStorage),
      partialize: (s) => ({ activeSessionId: s.activeSessionId, activeMapId: s.activeMapId }),
    }
  )
);
