export interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

export type Filter = string;

export interface Product {
  items: Todo[],
  loading: boolean,
  error: any,
}

export interface StoreState {
  products: Product;
  visibilityFilter: Filter;
  todos: Todo[];
}