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
}

export interface Session {
  id: string;
  name: string;
  active_character_ids: string[];
  created_at: string;
  campaign_id?: string | null;
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

export interface GameMap {
  id: string;
  session_id: string;
  name: string;
  background_url?: string | null;
  width: number;
  height: number;
  created_at: string;
}

// character_id is null for ad-hoc enemy/NPC tokens with no roster Character.
// hp_current/hp_max/armor_class are denormalized so combat can resolve
// against a token even when it has no character_id.
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
  updated_at: string;
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
