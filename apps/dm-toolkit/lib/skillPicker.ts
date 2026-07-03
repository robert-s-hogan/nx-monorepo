import type { RandomSkill, SkillTrigger } from '../types';

export function pickSkill(
  skills: RandomSkill[],
  trigger: SkillTrigger,
  alreadyAssignedIds: string[]
): RandomSkill | null {
  const pool = skills.filter(
    (s) => s.trigger === trigger && !alreadyAssignedIds.includes(s.id)
  );
  if (pool.length === 0) return null;
  return pool[Math.floor(Math.random() * pool.length)];
}

// When the pool for a specific trigger is exhausted, fall back to 'random'
export function pickSkillWithFallback(
  skills: RandomSkill[],
  trigger: SkillTrigger,
  alreadyAssignedIds: string[]
): RandomSkill | null {
  return (
    pickSkill(skills, trigger, alreadyAssignedIds) ??
    pickSkill(skills, 'random', alreadyAssignedIds)
  );
}
