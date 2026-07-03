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
}
