export interface ChilloutProduct {
  id: number;
  name: string;
  description: string;
  main_image: string;
  images: string[];
  price: number;
  discount: string;
  taxes: string;
  purchase_link: string;
  quantity: number;
  time: string;
}

export interface ChilloutProducts {
  total: number;
  results: ChilloutProduct[];
}

export interface ShoppingCartItem {
  id: number;
  name: string;
  description: string;
  main_image: string;
  images: string[];
  price: number;
  discount: string;
  taxes: string;
  purchase_link: string;
  quantity: number;
  time: string;
}

export type ShoppingCartData = ShoppingCartItem[];

export interface ShoppingCartState {
  data: ShoppingCartData;
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
  step: number;
  total: number;
}
type AddItemToServerArgs = {
  item: ShoppingCartItem;
};
