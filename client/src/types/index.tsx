export interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

export type Filter = string;

export interface StoreState {
  visibilityFilter: Filter;
  todos: Todo[];
}