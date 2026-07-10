import { create } from 'zustand';
import { supabase } from '../lib/supabase';
import { authedFetch } from '../lib/authedFetch';
import type { Item, StoreOption } from '../types';

const ITEM_SELECT =
  'id, name, purchase_size, estimated_cost, unit_price_note, is_completed, on_list, video_url, category, stores (store_slug)';

interface ImportRow {
  name: string;
  store_slug: string;
  estimated_cost?: number | null;
  purchase_size?: string | null;
  unit_price_note?: string | null;
  category?: string | null;
  video_url?: string | null;
}

interface SaveItemPayload {
  name: string;
  storeSlug: string;
  estimatedCost: string;
  purchaseSize: string;
  unitPriceNote: string;
  videoUrl: string;
  category: string;
}

interface AppStore {
  items: Item[];
  loading: boolean;
  error: string;
  storeOptions: StoreOption[];

  fetchItems: () => Promise<void>;
  subscribeRealtime: () => () => void;
  ensureStoreOptions: () => Promise<StoreOption[]>;

  addToList: (item: Item) => Promise<void>;
  toggleCompletion: (item: Item) => Promise<void>;
  removeFromList: (item: Item) => Promise<void>;
  deleteItem: (id: number) => Promise<void>;
  resetList: () => Promise<void>;
  importItems: (rows: ImportRow[]) => Promise<void>;
  saveItem: (payload: SaveItemPayload, editingItemId?: number) => Promise<void>;
}

export const useStore = create<AppStore>((set, get) => ({
  items: [],
  loading: true,
  error: '',
  storeOptions: [],

  fetchItems: async () => {
    set({ loading: true });
    const { data, error } = await supabase
      .from('items')
      .select(ITEM_SELECT)
      .order('name', { ascending: true });

    if (error) {
      console.error('Error fetching data:', error);
      set({ error: error.message, loading: false });
    } else {
      set({ items: (data ?? []) as unknown as Item[], loading: false });
    }
  },

  subscribeRealtime: () => {
    const channel = supabase
      .channel('items-realtime')
      .on(
        'postgres_changes',
        { event: 'UPDATE', schema: 'public', table: 'items' },
        (payload) => {
          set((s) => ({
            items: s.items.map((i) =>
              i.id === payload.new.id ? { ...i, ...payload.new, stores: i.stores } : i
            ),
          }));
        }
      )
      .on(
        'postgres_changes',
        { event: 'INSERT', schema: 'public', table: 'items' },
        () => {
          get().fetchItems();
        }
      )
      .on(
        'postgres_changes',
        { event: 'DELETE', schema: 'public', table: 'items' },
        (payload) => {
          set((s) => ({ items: s.items.filter((i) => i.id !== payload.old.id) }));
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  },

  ensureStoreOptions: async () => {
    const existing = get().storeOptions;
    if (existing.length > 0) return existing;
    const { data } = await supabase
      .from('stores')
      .select('id, store_slug')
      .order('tier', { ascending: true });
    const options = (data ?? []) as StoreOption[];
    set({ storeOptions: options });
    return options;
  },

  addToList: async (item) => {
    set((s) => ({
      items: s.items.map((i) =>
        i.id === item.id ? { ...i, on_list: true, is_completed: false } : i
      ),
    }));
    const res = await authedFetch(`/api/items/${item.id}`, {
      method: 'PATCH',
      body: JSON.stringify({ on_list: true, is_completed: false }),
    });
    if (!res.ok) console.error('addToList failed:', res.status);
  },

  toggleCompletion: async (item) => {
    const nextCompleted = !item.is_completed;
    set((s) => ({
      items: s.items.map((i) =>
        i.id === item.id ? { ...i, is_completed: nextCompleted } : i
      ),
    }));
    const res = await authedFetch(`/api/items/${item.id}`, {
      method: 'PATCH',
      body: JSON.stringify({ is_completed: nextCompleted }),
    });
    if (!res.ok) console.error('toggleCompletion failed:', res.status);
  },

  removeFromList: async (item) => {
    set((s) => ({
      items: s.items.map((i) =>
        i.id === item.id ? { ...i, on_list: false, is_completed: false } : i
      ),
    }));
    const res = await authedFetch(`/api/items/${item.id}`, {
      method: 'PATCH',
      body: JSON.stringify({ on_list: false, is_completed: false }),
    });
    if (!res.ok) console.error('removeFromList failed:', res.status);
  },

  deleteItem: async (id) => {
    set((s) => ({ items: s.items.filter((i) => i.id !== id) }));
    const res = await authedFetch(`/api/items/${id}`, { method: 'DELETE' });
    if (!res.ok) {
      console.error('deleteItem failed:', res.status);
      await get().fetchItems();
    }
  },

  resetList: async () => {
    set((s) => ({
      items: s.items.map((i) => ({ ...i, on_list: false, is_completed: false })),
    }));
    const res = await authedFetch('/api/items/reset', { method: 'POST' });
    if (!res.ok) {
      console.error('resetList failed:', res.status);
      await get().fetchItems();
    }
  },

  importItems: async (rows) => {
    const storeOptions = await get().ensureStoreOptions();
    const payload = rows.map((row) => {
      const store = storeOptions.find((s) => s.store_slug === row.store_slug);
      if (!store) throw new Error(`Unknown store: "${row.store_slug}"`);
      return {
        name: row.name,
        store_id: store.id,
        estimated_cost: row.estimated_cost ?? null,
        purchase_size: row.purchase_size ?? null,
        unit_price_note: row.unit_price_note ?? null,
        category: row.category ?? null,
        video_url: row.video_url ?? null,
        on_list: false,
        is_completed: false,
      };
    });
    const res = await authedFetch('/api/items/import', {
      method: 'POST',
      body: JSON.stringify(payload),
    });
    if (!res.ok) throw new Error(`importItems failed: ${res.status}`);
    await get().fetchItems();
  },

  saveItem: async (payload, editingItemId) => {
    const storeOptions = await get().ensureStoreOptions();
    const store = storeOptions.find((s) => s.store_slug === payload.storeSlug);
    if (!store) return;

    const row = {
      name: payload.name.trim(),
      store_id: store.id,
      estimated_cost: payload.estimatedCost ? Number(payload.estimatedCost) : null,
      purchase_size: payload.purchaseSize.trim() || null,
      unit_price_note: payload.unitPriceNote.trim() || null,
      video_url: payload.videoUrl.trim() || null,
      category: payload.category || null,
    };

    if (editingItemId != null) {
      const res = await authedFetch(`/api/items/${editingItemId}`, {
        method: 'PATCH',
        body: JSON.stringify(row),
      });
      if (res.ok) {
        set((s) => ({
          items: s.items.map((i) =>
            i.id === editingItemId
              ? {
                  ...i,
                  name: row.name,
                  estimated_cost: row.estimated_cost,
                  purchase_size: row.purchase_size,
                  unit_price_note: row.unit_price_note,
                  video_url: row.video_url,
                  category: row.category,
                  stores: { store_slug: payload.storeSlug },
                }
              : i
          ),
        }));
      }
    } else {
      const res = await authedFetch('/api/items', {
        method: 'POST',
        body: JSON.stringify({ ...row, on_list: false, is_completed: false }),
      });
      if (res.ok) {
        const data = await res.json();
        set((s) => ({ items: [data as Item, ...s.items] }));
      }
    }
  },
}));
