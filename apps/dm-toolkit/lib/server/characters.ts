// Server-only DB access for characters. Called from pages/api/characters/*.
import { db } from './db';
import type { Character } from '../../types';

type CharacterData = Omit<Character, 'id' | 'name'>;

export async function fetchCharacters(): Promise<Character[]> {
  const result = await db.execute(
    'SELECT id, name, data FROM characters ORDER BY created_at ASC'
  );
  return result.rows.map((r) => ({
    id: r.id as string,
    name: r.name as string,
    ...(JSON.parse(r.data as string) as CharacterData),
  }));
}

export async function insertCharacter(character: Character): Promise<void> {
  const { id, name, ...data } = character;
  await db.execute({
    sql: 'INSERT INTO characters (id, name, data) VALUES (?, ?, ?)',
    args: [id, name, JSON.stringify(data)],
  });
}

export async function updateCharacter(character: Character): Promise<void> {
  const { id, name, ...data } = character;
  await db.execute({
    sql: `UPDATE characters SET name = ?, data = ?, updated_at = datetime('now') WHERE id = ?`,
    args: [name, JSON.stringify(data), id],
  });
}

export async function deleteCharacterById(id: string): Promise<void> {
  await db.execute({ sql: 'DELETE FROM characters WHERE id = ?', args: [id] });
}
