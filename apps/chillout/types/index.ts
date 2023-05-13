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
