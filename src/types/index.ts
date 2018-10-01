export type Status = 'IN_PROGRESS' | 'COMPLETE';

export interface Order {
  id: string;
  createdAt: Date;
  status: Status;
  products?: OrderedProduct[];
}

export interface OrderedProduct {
  id: string;
  quantity: number;
  product: Product;
}

export interface Product {
  id: string;
  name: string;
  price: number;
}
