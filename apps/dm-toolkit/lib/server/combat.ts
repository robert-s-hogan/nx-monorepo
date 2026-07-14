// Server-only attack resolution for the visual map. Resolves DM-only (no
// player-auth system exists yet — see the map feature's design notes). The
// d20/damage-die VALUES are player-reported (physical dice at the table,
// entered by the DM) rather than server-generated — but the server still
// authoritatively computes hit/miss and applies damage from those raw
// numbers plus the attacker's real modifier and the defender's current AC,
// so a client can't just claim "that was a hit for 40 damage."
import { db } from './db';
import { fetchTokenById, updateTokenHp } from './maps';
import { fetchCharacterById } from './characters';
import { meleeAttackModifier } from '../dice';
import type { CombatEvent } from '../../types';

// Ad-hoc enemy tokens (no character_id) have no STR/DEX to draw an attack
// modifier from, so they attack at +0 — a deliberate v1 simplification.
async function attackModifierFor(characterId: string | null | undefined): Promise<number> {
  if (!characterId) return 0;
  const character = await fetchCharacterById(characterId);
  return meleeAttackModifier(character);
}

export async function resolveAttack(
  mapId: string,
  attackerTokenId: string,
  defenderTokenId: string,
  rawAttackRoll: number,
  rawDamageRoll: number
): Promise<CombatEvent> {
  const [attacker, defender] = await Promise.all([
    fetchTokenById(attackerTokenId),
    fetchTokenById(defenderTokenId),
  ]);

  const attackMod = await attackModifierFor(attacker.character_id);
  const roll = rawAttackRoll + attackMod;
  const hit = roll >= defender.armor_class;
  const damage = hit ? Math.max(0, rawDamageRoll + attackMod) : 0;
  const defenderHpAfter = Math.max(0, defender.hp_current - damage);

  await updateTokenHp(defenderTokenId, defenderHpAfter);

  const { data, error } = await db
    .from('combat_events')
    .insert({
      map_id: mapId,
      attacker_token_id: attackerTokenId,
      defender_token_id: defenderTokenId,
      roll,
      hit,
      damage,
      defender_hp_after: defenderHpAfter,
    })
    .select('*')
    .single();
  if (error) throw error;

  return {
    id: data.id,
    map_id: data.map_id,
    attacker_token_id: data.attacker_token_id,
    defender_token_id: data.defender_token_id,
    roll: data.roll,
    hit: data.hit,
    damage: data.damage,
    defender_hp_after: data.defender_hp_after,
    created_at: data.created_at,
  };
}
