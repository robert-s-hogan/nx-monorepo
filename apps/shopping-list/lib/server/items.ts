// Server-only DB access for items. Called from pages/api/items/*.
import { db } from './db';
import type { Item } from '../../types';

const ITEM_SELECT =
  'id, name, purchase_size, estimated_cost, unit_price_note, is_completed, on_list, video_url, category, stores (store_slug)';

export interface ItemFields {
  name?: string;
  store_id?: number;
  estimated_cost?: number | null;
  purchase_size?: string | null;
  unit_price_note?: string | null;
  video_url?: string | null;
  category?: string | null;
  on_list?: boolean;
  is_completed?: boolean;
}

export async function insertItem(fields: ItemFields): Promise<Item> {
  const { data, error } = await db
    .from('items')
    .insert(fields)
    .select(ITEM_SELECT)
    .single();
  if (error) throw error;
  return data as unknown as Item;
}

// One generic partial update covers addToList/toggleCompletion/
// removeFromList/edit-existing-item — they're all "change some fields on one
// row by id", not distinct operations.
export async function updateItem(id: number, fields: ItemFields): Promise<void> {
  const { error } = await db.from('items').update(fields).eq('id', id);
  if (error) throw error;
}

export async function deleteItemById(id: number): Promise<void> {
  const { error } = await db.from('items').delete().eq('id', id);
  if (error) throw error;
}

export async function resetOnListItems(): Promise<void> {
  const { error } = await db
    .from('items')
    .update({ on_list: false, is_completed: false })
    .eq('on_list', true);
  if (error) throw error;
}

export async function importItems(rows: ItemFields[]): Promise<void> {
  const { error } = await db.from('items').insert(rows);
  if (error) throw error;
}
