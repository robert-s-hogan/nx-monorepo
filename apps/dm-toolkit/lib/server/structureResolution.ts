// Server-only resolution for structure investigation rolls, mirroring
// combat.ts: the roll always happens here so every client gets one
// authoritative result via Realtime, rather than trusting a client roll.
import { fetchCheckWithOutcomes, insertStructureEvent } from './structures';
import { fetchTokensForMap, updateTokenHp, insertToken } from './maps';
import { fetchCharacterById } from './characters';
import { rollD20, rollDiceExpression, skillModifier } from '../dice';
import type { Character, StructureEvent, StructureOutcome } from '../../types';

// Tokens with no character_id (ad-hoc enemies/structures-as-tokens) have no
// stats to scale from, so party level defaults to 1 when the map has no
// rostered characters present yet.
export async function getPartyLevelForMap(mapId: string): Promise<number> {
  const tokens = await fetchTokensForMap(mapId);
  const characterIds = tokens.map((t) => t.character_id).filter((id): id is string => !!id);
  if (characterIds.length === 0) return 1;

  const characters = await Promise.all(characterIds.map((id) => fetchCharacterById(id)));
  const levels = characters.filter((c): c is Character => !!c).map((c) => c.level);
  if (levels.length === 0) return 1;
  return Math.round(levels.reduce((sum, l) => sum + l, 0) / levels.length);
}

export function scaleBossStats(
  character: Character,
  partyLevel: number
): { hp_max: number; armor_class: number } {
  const boss = character.boss;
  if (!boss) return { hp_max: character.hit_points.max, armor_class: character.armor_class };

  const levelsAbove = Math.max(0, partyLevel - boss.base_party_level);
  return {
    hp_max: character.hit_points.max + levelsAbove * boss.scaling.hp_per_level,
    armor_class:
      character.armor_class +
      Math.floor(levelsAbove / Math.max(1, boss.scaling.ac_per_levels)),
  };
}

export async function spawnBossToken(
  mapId: string,
  characterId: string,
  position?: { x: number; y: number }
): Promise<void> {
  const character = await fetchCharacterById(characterId);
  if (!character) throw new Error(`Boss character ${characterId} not found`);

  const partyLevel = await getPartyLevelForMap(mapId);
  const { hp_max, armor_class } = scaleBossStats(character, partyLevel);

  await insertToken({
    id: crypto.randomUUID(),
    map_id: mapId,
    character_id: character.id,
    label: character.name,
    x: position?.x ?? 100 + Math.random() * 400,
    y: position?.y ?? 100 + Math.random() * 400,
    hidden: false,
    hp_current: hp_max,
    hp_max,
    armor_class,
    side: 'enemy',
    updated_at: new Date().toISOString(),
  });
}

// Falls back to the base tier when a structure has no dedicated crit outcome
// authored (crit_success -> success, crit_fail -> fail) so a DM can skip
// writing every tier for every check.
function pickOutcome(outcomes: StructureOutcome[], tier: StructureOutcome['tier']): StructureOutcome | null {
  const exact = outcomes.find((o) => o.tier === tier);
  if (exact) return exact;
  const fallbackTier = tier === 'crit_success' ? 'success' : tier === 'crit_fail' ? 'fail' : tier;
  return outcomes.find((o) => o.tier === fallbackTier) ?? null;
}

export async function resolveStructureCheck(
  mapId: string,
  structureId: string,
  checkId: string,
  characterId: string | null
): Promise<StructureEvent> {
  const found = await fetchCheckWithOutcomes(checkId);
  if (!found) throw new Error(`Structure check ${checkId} not found`);
  const { check, outcomes } = found;

  const character = characterId ? await fetchCharacterById(characterId) : null;
  const mod = character ? skillModifier(check.skill, character.stats) : 0;

  const natRoll = rollD20();
  const total = natRoll + mod;
  const tier: StructureOutcome['tier'] =
    natRoll === 1 ? 'crit_fail' : natRoll === 20 ? 'crit_success' : total >= check.dc ? 'success' : 'fail';

  const outcome = pickOutcome(outcomes, tier);
  if (!outcome) throw new Error(`No outcome authored for check ${checkId} tier ${tier}`);

  let damageDealt: number | null = null;
  if (outcome.damage_dice && characterId) {
    const tokens = await fetchTokensForMap(mapId);
    const token = tokens.find((t) => t.character_id === characterId);
    if (token) {
      damageDealt = rollDiceExpression(outcome.damage_dice);
      await updateTokenHp(token.id, Math.max(0, token.hp_current - damageDealt));
    }
  }

  if (outcome.spawns_boss_character_id) {
    await spawnBossToken(mapId, outcome.spawns_boss_character_id);
  }

  return insertStructureEvent({
    map_id: mapId,
    structure_id: structureId,
    check_id: checkId,
    character_id: characterId,
    roll: natRoll,
    total,
    outcome_id: outcome.id,
    tier: outcome.tier,
    narrative: outcome.narrative,
    damage_dealt: damageDealt,
    insight: outcome.insight ?? null,
    item: outcome.item ?? null,
  });
}
