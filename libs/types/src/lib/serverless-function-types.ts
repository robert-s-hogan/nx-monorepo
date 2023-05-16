export interface ChilloutProduct {
  id: number;
  name: string;
  description: string;
  main_image: string;
  images: string[];
  price: number;
  quantity: number;
  discount: string;
  taxes: string;
  purchase_link: string;
  time: string;
}

export interface ChilloutProducts {
  total: number;
  results: ChilloutProduct[];
}
