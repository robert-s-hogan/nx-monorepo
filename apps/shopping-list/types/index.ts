export interface Item {
  id: number;
  name: string;
  purchase_size: string | null;
  estimated_cost: number | null;
  unit_price_note: string | null;
  is_completed: boolean;
  on_list: boolean;
  video_url: string | null;
  category: string | null;
  stores: { store_slug: string } | null;
}

export interface StoreOption {
  id: number;
  store_slug: string;
}
