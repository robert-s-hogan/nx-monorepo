// Server-only DB access for characters. Called from pages/api/characters/*.
import { db } from './db';
import type { Character } from '../../types';

type CharacterData = Omit<Character, 'id' | 'name'>;

export async function fetchCharacters(): Promise<Character[]> {
  const { data, error } = await db
    .from('characters')
    .select('id, name, data')
    .order('created_at', { ascending: true });
  if (error) throw error;

  return (data ?? []).map((r) => ({
    id: r.id as string,
    name: r.name as string,
    ...(r.data as CharacterData),
  }));
}

export async function fetchCharacterById(id: string): Promise<Character | null> {
  const { data, error } = await db
    .from('characters')
    .select('id, name, data')
    .eq('id', id)
    .maybeSingle();
  if (error) throw error;
  if (!data) return null;
  return { id: data.id, name: data.name, ...(data.data as CharacterData) };
}

export async function insertCharacter(character: Character): Promise<void> {
  const { id, name, ...data } = character;
  const { error } = await db.from('characters').insert({ id, name, data });
  if (error) throw error;
}

export async function updateCharacter(character: Character): Promise<void> {
  const { id, name, ...data } = character;
  const { error } = await db
    .from('characters')
    .update({ name, data, updated_at: new Date().toISOString() })
    .eq('id', id);
  if (error) throw error;
}

export async function deleteCharacterById(id: string): Promise<void> {
  const { error } = await db.from('characters').delete().eq('id', id);
  if (error) throw error;
}
