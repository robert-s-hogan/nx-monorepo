// Server-only DB access for map structures, their checks and outcomes, and
// the resolved-roll event log. Called from pages/api/maps/*/structures and
// pages/api/structures/*.
import { db } from './db';
import type {
  MapStructure,
  StructureCheck,
  StructureCheckWithOutcomes,
  StructureEvent,
  StructureOutcome,
} from '../../types';

function rowToStructure(row: Record<string, unknown>): MapStructure {
  return {
    id: row.id as string,
    map_id: row.map_id as string,
    name: row.name as string,
    structure_type: row.structure_type as string,
    x: Number(row.x),
    y: Number(row.y),
    width: Number(row.width),
    height: Number(row.height),
    revealed: Boolean(row.revealed),
    created_at: row.created_at as string,
  };
}

function rowToCheck(row: Record<string, unknown>): StructureCheck {
  return {
    id: row.id as string,
    structure_id: row.structure_id as string,
    skill: row.skill as string,
    label: row.label as string,
    created_at: row.created_at as string,
  };
}

function rowToOutcome(row: Record<string, unknown>): StructureOutcome {
  return {
    id: row.id as string,
    check_id: row.check_id as string,
    tier: row.tier as StructureOutcome['tier'],
    narrative: row.narrative as string,
    damage_dice: (row.damage_dice as string) ?? null,
    insight: (row.insight as string) ?? null,
    item: (row.item as StructureOutcome['item']) ?? null,
    spawns_boss_character_id: (row.spawns_boss_character_id as string) ?? null,
    band_order: (row.band_order as number) ?? 0,
  };
}

function rowToEvent(row: Record<string, unknown>): StructureEvent {
  return {
    id: row.id as string,
    map_id: row.map_id as string,
    structure_id: row.structure_id as string,
    check_id: row.check_id as string,
    character_id: (row.character_id as string) ?? null,
    roll: Number(row.roll),
    total: Number(row.total),
    outcome_id: row.outcome_id as string,
    tier: row.tier as StructureEvent['tier'],
    narrative: row.narrative as string,
    damage_dealt: row.damage_dealt != null ? Number(row.damage_dealt) : null,
    insight: (row.insight as string) ?? null,
    item: (row.item as StructureEvent['item']) ?? null,
    created_at: row.created_at as string,
  };
}

export async function fetchStructuresForMap(mapId: string): Promise<MapStructure[]> {
  const { data, error } = await db
    .from('map_structures')
    .select('*')
    .eq('map_id', mapId)
    .order('created_at', { ascending: true });
  if (error) throw error;
  return (data ?? []).map(rowToStructure);
}

export async function insertStructure(structure: MapStructure): Promise<void> {
  const { error } = await db.from('map_structures').insert({
    id: structure.id,
    map_id: structure.map_id,
    name: structure.name,
    structure_type: structure.structure_type,
    x: structure.x,
    y: structure.y,
    width: structure.width,
    height: structure.height,
    revealed: structure.revealed,
  });
  if (error) throw error;
}

export async function updateStructurePosition(id: string, x: number, y: number): Promise<void> {
  const { error } = await db.from('map_structures').update({ x, y }).eq('id', id);
  if (error) throw error;
}

export async function deleteStructureById(id: string): Promise<void> {
  const { error } = await db.from('map_structures').delete().eq('id', id);
  if (error) throw error;
}

// Checks + outcomes are authored together and read together (the DM panel
// always needs a check alongside every outcome it can land on), so this
// fetches and nests them in one round trip rather than exposing them as two
// flat lists the client would have to re-join itself.
export async function fetchChecksWithOutcomes(
  structureId: string
): Promise<StructureCheckWithOutcomes[]> {
  const [{ data: checkRows, error: checkErr }, { data: outcomeRows, error: outcomeErr }] =
    await Promise.all([
      db
        .from('structure_checks')
        .select('*')
        .eq('structure_id', structureId)
        .order('created_at', { ascending: true }),
      db
        .from('structure_outcomes')
        .select('*, structure_checks!inner(structure_id)')
        .eq('structure_checks.structure_id', structureId),
    ]);
  if (checkErr) throw checkErr;
  if (outcomeErr) throw outcomeErr;

  const checks = (checkRows ?? []).map(rowToCheck);
  const outcomes = (outcomeRows ?? []).map(rowToOutcome);
  return checks.map((check) => ({
    ...check,
    outcomes: outcomes.filter((o) => o.check_id === check.id),
  }));
}

export async function insertCheckWithOutcomes(
  check: StructureCheck,
  outcomes: Omit<StructureOutcome, 'id' | 'check_id'>[]
): Promise<StructureCheckWithOutcomes> {
  const { error: checkErr } = await db.from('structure_checks').insert({
    id: check.id,
    structure_id: check.structure_id,
    skill: check.skill,
    label: check.label,
  });
  if (checkErr) throw checkErr;

  if (outcomes.length === 0) return { ...check, outcomes: [] };

  const { data, error: outcomeErr } = await db
    .from('structure_outcomes')
    .insert(
      outcomes.map((o) => ({
        check_id: check.id,
        tier: o.tier,
        narrative: o.narrative,
        damage_dice: o.damage_dice ?? null,
        insight: o.insight ?? null,
        item: o.item ?? null,
        spawns_boss_character_id: o.spawns_boss_character_id ?? null,
        band_order: o.band_order ?? 0,
      }))
    )
    .select('*');
  if (outcomeErr) throw outcomeErr;

  return { ...check, outcomes: (data ?? []).map(rowToOutcome) };
}

export async function fetchCheckWithOutcomes(
  checkId: string
): Promise<{ check: StructureCheck; outcomes: StructureOutcome[] } | null> {
  const [{ data: checkRow, error: checkErr }, { data: outcomeRows, error: outcomeErr }] =
    await Promise.all([
      db.from('structure_checks').select('*').eq('id', checkId).maybeSingle(),
      db.from('structure_outcomes').select('*').eq('check_id', checkId),
    ]);
  if (checkErr) throw checkErr;
  if (outcomeErr) throw outcomeErr;
  if (!checkRow) return null;
  return { check: rowToCheck(checkRow), outcomes: (outcomeRows ?? []).map(rowToOutcome) };
}

export async function fetchStructureEventsForMap(mapId: string): Promise<StructureEvent[]> {
  const { data, error } = await db
    .from('structure_events')
    .select('*')
    .eq('map_id', mapId)
    .order('created_at', { ascending: true });
  if (error) throw error;
  return (data ?? []).map(rowToEvent);
}

export async function insertStructureEvent(event: Omit<StructureEvent, 'id' | 'created_at'>): Promise<StructureEvent> {
  const { data, error } = await db
    .from('structure_events')
    .insert({
      map_id: event.map_id,
      structure_id: event.structure_id,
      check_id: event.check_id,
      character_id: event.character_id ?? null,
      roll: event.roll,
      total: event.total,
      outcome_id: event.outcome_id,
      tier: event.tier,
      narrative: event.narrative,
      damage_dealt: event.damage_dealt ?? null,
      insight: event.insight ?? null,
      item: event.item ?? null,
    })
    .select('*')
    .single();
  if (error) throw error;
  return rowToEvent(data);
}
