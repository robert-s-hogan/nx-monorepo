export interface CharacterStats {
  str: number;
  dex: number;
  con: number;
  int: number;
  wis: number;
  cha: number;
}

export interface Ability {
  name: string;
  description: string;
  stamina_cost: number;
}

export interface AbilityCategory {
  name: string;
  flavor: string;
  xp: { current: number; max: number };
  abilities: Ability[];
}

export type SkillTrigger = 'failure' | 'session_start' | 'random';
export type SkillTag = 'combat' | 'exploration' | 'social' | 'mixed';
export type SkillSentiment = 'positive' | 'negative' | 'mixed';

export interface RandomSkill {
  id: string;
  name: string;
  flavor: string;
  trigger: SkillTrigger;
  effect: string;
  tags: SkillTag[];
  sentiment: SkillSentiment;
}

export interface AssignedSkill {
  skill_id: string;
  assigned_at: number;
  trigger: SkillTrigger;
}

export interface StatusEffect {
  id: string;
  name: string;
  type: 'positive' | 'negative' | 'neutral';
  modifiers?: {
    ac?: number;
    temp_hp?: number;
    str?: number;
    dex?: number;
    con?: number;
    int?: number;
    wis?: number;
    cha?: number;
  };
}

// Marks a roster character as available to spawn onto a map as a scaled
// encounter — see lib/server/structureResolution.ts#scaleBossStats. Scaling
// is relative to base_party_level so the same boss definition can be reused
// across campaigns at different party strengths.
export interface BossScaling {
  hp_per_level: number;
  ac_per_levels: number; // +1 AC every N levels above base_party_level
}

export interface BossConfig {
  base_party_level: number;
  scaling: BossScaling;
}

export interface Character {
  id: string;
  name: string;
  class: string;
  level: number;
  background: string;
  notes?: string;
  stats: CharacterStats;
  armor_class: number;
  hit_points: { max: number; current: number };
  stamina: { max: number; current: number };
  ability_categories: AbilityCategory[];
  random_skills: AssignedSkill[];
  status_effects?: StatusEffect[];
  image_url?: string;
  boss?: BossConfig | null;
  // Feet per turn. Optional since existing characters predate this field —
  // read with a `?? 30` fallback (5e default) rather than assuming present.
  speed?: number;
  // Distinguishes a PC from a reusable NPC/monster stat block (see
  // MapToken.side for why an NPC's ally/enemy status lives on the token, not
  // here — the same "Goblin" character gets reused as either across
  // sessions). Optional/defaults to 'pc' since it predates this field.
  character_type?: 'pc' | 'npc';
  // Lifetime count of attacks this character has landed — backs the
  // "practiced" attack bonus (see lib/dice.ts). Optional since it predates
  // this field; read with a `?? 0` fallback.
  hits_landed?: number;
}

export interface Session {
  id: string;
  name: string;
  active_character_ids: string[];
  created_at: string;
  campaign_id?: string | null;
  // Which map an anonymous /map?session=<id> preview link should show —
  // set whenever the DM creates or switches to a map. Null until then.
  active_map_id?: string | null;
}

// Only 'dnd5e' is implemented today; the union grows as more systems are added
// without needing to change Campaign's shape.
export type ProgressionSystem = 'dnd5e';

// 'freeform' is today's behavior (DM manages everything by hand). 'conquest'
// turns on the ported adventuring-day XP/rest/encounter tooling from
// apps/conquest. Fixed at campaign creation — a campaign never switches modes.
export type SessionMode = 'freeform' | 'conquest';

export interface Campaign {
  id: string;
  name: string;
  progression_system: ProgressionSystem;
  session_mode: SessionMode;
  current_xp: number;
  number_of_players: number;
  created_at: string;
}

export interface LevelDetails {
  level: number;
  xpStart: number;
  xpEnd: number;
  xpNeeded: number;
}

// ── Conquest mode ────────────────────────────────────────────────────────────

export type EncounterDifficulty = 'Easy' | 'Medium' | 'Hard' | 'Deadly';

export interface Encounter {
  id: string;
  campaign_id: string;
  difficulty: EncounterDifficulty;
  encounter_xp: number;
  objective: string;
  map_terrain_type: string;
  time_of_day: string;
  weather: string;
  created_at: string;
}

export interface RestState {
  campaign_id: string;
  short_rests_taken: boolean[];
  long_rest_needed: boolean;
}

// ── Visual map / combat ──────────────────────────────────────────────────────

// A flat, un-ordered pool — any structure/NPC generator can claim any
// unused clue, no dependency graph between them. See
// lib/rulesets/storyGen.ts.
export interface MapStoryClue {
  id: string;
  text: string;
  used: boolean;
}

export interface MapStory {
  title: string;
  hook: string;
  clues: MapStoryClue[];
}

export interface GameMap {
  id: string;
  session_id: string;
  name: string;
  background_url?: string | null;
  width: number;
  height: number;
  created_at: string;
  // Turn tracking — turn_order is an ordered list of MapToken ids,
  // current_turn_index points into it. See lib/server/maps.ts's
  // startCombat/advanceTurn/endCombat.
  turn_order: string[];
  current_turn_index: number;
  round_number: number;
  combat_active: boolean;
  // Generated once at map creation (null for maps predating this feature,
  // or until rerolled). See lib/rulesets/storyGen.ts.
  story?: MapStory | null;
}

// character_id is null for ad-hoc enemy/NPC tokens with no roster Character.
// hp_current/hp_max/armor_class are denormalized so combat can resolve
// against a token even when it has no character_id. side is deliberately a
// token-level property, not derived from the linked character: a reusable
// NPC character (e.g. "Goblin") can be an ally in one encounter and an enemy
// in the next, so which side it's on has to be chosen per token placement.
export interface MapToken {
  id: string;
  map_id: string;
  character_id?: string | null;
  label: string;
  x: number;
  y: number;
  hidden: boolean;
  hp_current: number;
  hp_max: number;
  armor_class: number;
  side: 'ally' | 'enemy' | 'neutral';
  updated_at: string;
  // The rolled 1d20 + DEX mod total for this token's current turn-order
  // slot — null until initiative has been rolled for it.
  initiative?: number | null;
  // Short generated flavor line for one-off enemies (see
  // lib/rulesets/enemyGen.ts) — null for character-linked/manually-added
  // tokens.
  flavor_text?: string | null;
}

export interface CombatEvent {
  id: string;
  map_id: string;
  attacker_token_id: string;
  defender_token_id: string;
  roll: number;
  hit: boolean;
  damage: number;
  defender_hp_after: number;
  created_at: string;
}

// One row per committed token move (not every intermediate drag frame) —
// same denormalized-log role as combat_events/structure_events.
export interface MovementEvent {
  id: string;
  map_id: string;
  token_id: string;
  from_x: number;
  from_y: number;
  to_x: number;
  to_y: number;
  created_at: string;
}

// ── Map structures (investigatable Lego builds) ─────────────────────────────

export interface MapStructure {
  id: string;
  map_id: string;
  name: string;
  structure_type: string;
  x: number;
  y: number;
  width: number;
  height: number;
  revealed: boolean;
  created_at: string;
}

export interface StructureCheck {
  id: string;
  structure_id: string;
  skill: string;
  label: string;
  created_at: string;
}

export type OutcomeTier = 'crit_fail' | 'fail' | 'success' | 'crit_success';

export interface StructureItem {
  name: string;
  description?: string;
}

export interface StructureOutcome {
  id: string;
  check_id: string;
  tier: OutcomeTier;
  narrative: string;
  damage_dice?: string | null;
  insight?: string | null;
  item?: StructureItem | null;
  spawns_boss_character_id?: string | null;
  // Ranks outcomes within the same (check_id, tier) from worst (0) to best,
  // used to deterministically pick a variant by how far the roll landed
  // from the DC — see lib/server/structureResolution.ts's pickOutcome.
  band_order: number;
}

// A structure_check bundled with all its possible outcomes — the shape used
// when authoring/displaying a structure in full (StructurePanel).
export interface StructureCheckWithOutcomes extends StructureCheck {
  outcomes: StructureOutcome[];
}

// Returned instead of a StructureEvent when the DM still needs to manually
// roll damage for the resolved outcome — nothing is persisted yet at this
// point (see lib/server/structureResolution.ts).
export interface StructureRollPreview {
  preview: true;
  tier: OutcomeTier;
  outcome: StructureOutcome;
  roll: number;
  total: number;
}

// tier/narrative/damage_dealt/insight/item are denormalized from the outcome
// that was hit — see supabase/migrations/0004_structures.sql for why (a
// Realtime INSERT payload only carries this row's own columns).
export interface StructureEvent {
  id: string;
  map_id: string;
  structure_id: string;
  check_id: string;
  character_id?: string | null;
  roll: number;
  total: number;
  outcome_id: string;
  tier: OutcomeTier;
  narrative: string;
  damage_dealt?: number | null;
  insight?: string | null;
  item?: StructureItem | null;
  created_at: string;
}

// A "make a Perception check right now" roll that isn't tied to any
// physical Lego structure (see StructureEvent above) — unlike structure
// checks there's no reusable check/outcome definition authored ahead of
// time, so this is just the resolved roll itself; the DM narrates the
// result live at the table instead of reading pre-written narrative text.
export interface GeneralCheckEvent {
  id: string;
  map_id: string;
  character_id?: string | null;
  skill: string;
  dc: number;
  roll: number;
  total: number;
  tier: OutcomeTier;
  created_at: string;
}
