// Server-only resolution for structure investigation rolls, mirroring
// combat.ts: the roll always happens here so every client gets one
// authoritative result via Realtime, rather than trusting a client roll.
import { fetchCheckWithOutcomes, insertStructureEvent } from './structures';
import { fetchTokensForMap, updateTokenHp, insertToken } from './maps';
import { fetchCharacterById } from './characters';
import { skillModifier, structureCheckBand, type StructureBand } from '../dice';
import { averagePartyLevel } from '../party';
import type { Character, StructureEvent, StructureOutcome, StructureRollPreview } from '../../types';

// Tokens with no character_id (ad-hoc enemies/structures-as-tokens) have no
// stats to scale from, so party level defaults to 1 when the map has no
// rostered characters present yet.
export async function getPartyLevelForMap(mapId: string): Promise<number> {
  const tokens = await fetchTokensForMap(mapId);
  const characterIds = tokens.map((t) => t.character_id).filter((id): id is string => !!id);
  if (characterIds.length === 0) return 1;

  const characters = await Promise.all(characterIds.map((id) => fetchCharacterById(id)));
  const levels = characters.filter((c): c is Character => !!c).map((c) => c.level);
  return averagePartyLevel(levels);
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

// Picks the outcome matching the resolved band exactly (tier + band_order).
// Hand-authored checks aren't guaranteed to have all 7 slots filled in, so
// this falls back to whichever authored variant's band_order is closest
// within the same tier, and finally to the base tier (crit_success ->
// success, crit_fail -> fail) if nothing at all was authored for a crit —
// same "a DM can skip writing every tier" convention as before.
function pickOutcome(outcomes: StructureOutcome[], band: StructureBand): StructureOutcome | null {
  const tiersToTry: StructureOutcome['tier'][] =
    band.tier === 'crit_success'
      ? ['crit_success', 'success']
      : band.tier === 'crit_fail'
      ? ['crit_fail', 'fail']
      : [band.tier];

  for (const tier of tiersToTry) {
    const atTier = outcomes.filter((o) => o.tier === tier);
    if (atTier.length === 0) continue;
    const exact = atTier.find((o) => o.band_order === band.band_order);
    if (exact) return exact;
    return atTier.reduce((best, o) =>
      Math.abs(o.band_order - band.band_order) < Math.abs(best.band_order - band.band_order) ? o : best
    );
  }
  return null;
}

export async function resolveStructureCheck(
  mapId: string,
  structureId: string,
  checkId: string,
  characterId: string | null,
  rawRoll: number,
  outcomeId?: string,
  rawDamageRoll?: number
): Promise<StructureEvent | StructureRollPreview> {
  const found = await fetchCheckWithOutcomes(checkId);
  if (!found) throw new Error(`Structure check ${checkId} not found`);
  const { check, outcomes } = found;

  const character = characterId ? await fetchCharacterById(characterId) : null;
  const mod = character ? skillModifier(check.skill, character.stats) : 0;
  const natRoll = rawRoll;
  const total = natRoll + mod;

  let outcome: StructureOutcome | null;

  if (outcomeId) {
    // Committing a previously-previewed outcome (the DM has now supplied
    // the damage roll) — skip tier/outcome selection and use the exact
    // outcome already shown to them, rather than re-rolling it.
    outcome = outcomes.find((o) => o.id === outcomeId) ?? null;
    if (!outcome) throw new Error(`Outcome ${outcomeId} not found for check ${checkId}`);
  } else {
    const band = structureCheckBand(natRoll, mod);
    outcome = pickOutcome(outcomes, band);
    if (!outcome) throw new Error(`No outcome authored for check ${checkId} band ${band.tier}/${band.band_order}`);

    // Damage-bearing outcomes need a second, manually-rolled die whose size
    // isn't known until this exact outcome is picked — preview it instead
    // of writing anything, and let the caller resubmit with outcomeId once
    // they have that roll.
    if (outcome.damage_dice && rawDamageRoll === undefined) {
      return { preview: true, tier: outcome.tier, outcome, roll: natRoll, total };
    }
  }

  let damageDealt: number | null = null;
  if (outcome.damage_dice && characterId && rawDamageRoll !== undefined) {
    const tokens = await fetchTokensForMap(mapId);
    const token = tokens.find((t) => t.character_id === characterId);
    if (token) {
      damageDealt = rawDamageRoll;
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
