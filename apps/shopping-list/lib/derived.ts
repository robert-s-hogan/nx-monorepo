import type { Item } from '../types';
import { STORE_ORDER, CATEGORIES } from './constants';

export function getStores(items: Item[]): string[] {
  return [...new Set(items.map((i) => i.stores?.store_slug).filter(Boolean) as string[])].sort(
    (a, b) => {
      const ai = STORE_ORDER.indexOf(a ?? '');
      const bi = STORE_ORDER.indexOf(b ?? '');
      return (ai === -1 ? 999 : ai) - (bi === -1 ? 999 : bi);
    }
  );
}

export interface StoreSummary {
  store: string;
  count: number;
  total: number;
}

export function getStoreSummaries(items: Item[], stores: string[]): StoreSummary[] {
  return stores.map((store) => {
    const storeItems = items.filter((i) => i.on_list && i.stores?.store_slug === store);
    const total = storeItems.reduce((sum, i) => sum + (i.estimated_cost ?? 0), 0);
    return { store: store ?? '', count: storeItems.length, total };
  });
}

export function getListItems(items: Item[], activeTab: string): Item[] {
  return items.filter((item) => item.on_list && item.stores?.store_slug === activeTab);
}

export function getGroupedListItems(listItems: Item[]): [string, Item[]][] {
  const map = new Map<string, Item[]>();
  for (const item of listItems) {
    const cat = item.category || 'Other';
    if (!map.has(cat)) map.set(cat, []);
    map.get(cat)?.push(item);
  }
  return [...map.entries()]
    .sort(([a], [b]) => {
      const ai = CATEGORIES.indexOf(a);
      const bi = CATEGORIES.indexOf(b);
      return (ai === -1 ? 999 : ai) - (bi === -1 ? 999 : bi);
    })
    .map(([cat, catItems]): [string, Item[]] => [
      cat,
      [...catItems].sort((a, b) => Number(a.is_completed) - Number(b.is_completed)),
    ]);
}

export function hasActiveItems(items: Item[]): boolean {
  return items.some((i) => i.on_list);
}

export function getCatalogGroups(items: Item[], catalogQuery: string): [string, Item[]][] {
  const filtered = catalogQuery
    ? items.filter((i) => i.name.toLowerCase().includes(catalogQuery.toLowerCase()))
    : items;
  const map = new Map<string, Item[]>();
  for (const item of filtered) {
    const store = item.stores?.store_slug ?? 'Unknown';
    if (!map.has(store)) map.set(store, []);
    map.get(store)?.push(item);
  }
  const result: [string, Item[]][] = [];
  for (const store of STORE_ORDER) {
    if (map.has(store)) {
      result.push([store, (map.get(store) ?? []).sort((a, b) => a.name.localeCompare(b.name))]);
    }
  }
  for (const [store, storeItems] of map) {
    if (!STORE_ORDER.includes(store)) {
      result.push([store, storeItems.sort((a, b) => a.name.localeCompare(b.name))]);
    }
  }
  return result;
}

export interface CartStats {
  total: number;
  picked: number;
  pickedTotal: number;
  listTotal: number;
}

export function getCartStats(listItems: Item[]): CartStats {
  const picked = listItems.filter((i) => i.is_completed);
  const pickedTotal = picked.reduce((sum, i) => sum + (i.estimated_cost ?? 0), 0);
  const listTotal = listItems.reduce((sum, i) => sum + (i.estimated_cost ?? 0), 0);
  return { total: listItems.length, picked: picked.length, pickedTotal, listTotal };
}

export function getSearchResults(items: Item[], searchQuery: string, activeTab: string): Item[] {
  if (!searchQuery) return [];
  return items.filter((item) => {
    const matchesQuery = item.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesTab = !activeTab || item.stores?.store_slug === activeTab;
    return matchesQuery && matchesTab && !item.on_list;
  });
}

export interface SearchResultGroup {
  name: string;
  items: Item[];
}

export function getGroupedSearchResults(searchResults: Item[]): SearchResultGroup[] {
  const map = new Map<string, Item[]>();
  for (const item of searchResults) {
    const key = item.name.toLowerCase().trim();
    if (!map.has(key)) map.set(key, []);
    map.get(key)?.push(item);
  }
  return [...map.values()].map((group) => ({
    name: group[0].name,
    items: [...group].sort(
      (a, b) => (a.estimated_cost ?? Infinity) - (b.estimated_cost ?? Infinity)
    ),
  }));
}
