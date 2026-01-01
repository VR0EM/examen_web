export interface MenuItem {
  id: number;
  name: string;
  price: number;
  allergens: string;
  nutriscore: string;
  description: string;
  type: string;
  image: string;
}

export interface Order {
  id?: number;
  name: string;
  items: number[];
  status?: string;
  timestamp?: string;
}
