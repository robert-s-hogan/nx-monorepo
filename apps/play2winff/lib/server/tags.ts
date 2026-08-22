// Server-only DB access for the custom-tag library. Called from
// pages/api/custom-tags/*.
import { db } from './db';
import { nextTagColor, TAG_ICON_KEYS } from '../tagIcons';
import type { CustomTag } from '../tags';

export class DuplicateTagNameError extends Error {}
export class InvalidTagIconError extends Error {}

export async function fetchAllTags(): Promise<CustomTag[]> {
  const result = await db.execute(
    `SELECT id, name, icon, color FROM custom_tags ORDER BY name ASC`
  );
  return result.rows.map((r) => ({
    id: r.id as number,
    name: r.name as string,
    icon: r.icon as string,
    color: r.color as string,
  }));
}

export async function createTag(name: string, icon: string): Promise<CustomTag> {
  if (!TAG_ICON_KEYS.includes(icon)) {
    throw new InvalidTagIconError(`Unknown icon key: ${icon}`);
  }

  const existing = await db.execute({
    sql: `SELECT 1 FROM custom_tags WHERE name=?`,
    args: [name],
  });
  if (existing.rows.length > 0) {
    throw new DuplicateTagNameError(`A tag named "${name}" already exists`);
  }

  const countResult = await db.execute(`SELECT COUNT(*) as n FROM custom_tags`);
  const color = nextTagColor(countResult.rows[0]['n'] as number);

  const insertResult = await db.execute({
    sql: `INSERT INTO custom_tags (name, icon, color) VALUES (?, ?, ?)`,
    args: [name, icon, color],
  });

  return {
    id: Number(insertResult.lastInsertRowid),
    name,
    icon,
    color,
  };
}
