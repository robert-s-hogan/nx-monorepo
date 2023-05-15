export interface Product {
  id: number | string;
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
