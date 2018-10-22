/* tslint:disable */

import * as constants from '../constants';

export interface AddTodo {
  type: constants.ADD_TODO;
  id: number;
  text: string;
};

export interface ToggleTodo {
  type: constants.TOGGLE_TODO;
  id: number;
};

export type TodoAction = AddTodo | ToggleTodo;

let nextTodoId = 0;
export const addTodo = (text: string) : AddTodo => ({
  id: nextTodoId++,
  text: text,
  type: constants.ADD_TODO,
});

export const toggleTodo = (id: number) : ToggleTodo => ({
  type: constants.TOGGLE_TODO,
  id: id,
});


export interface VisibilityFilter {
  type: constants.SET_VISIBILITY_FILTER;
  filter: string;
};

export type VisibilityFilterAction = VisibilityFilter;

export const setVisibilityFilter = (filter: string) : VisibilityFilter => ({
  type: constants.SET_VISIBILITY_FILTER,
  filter: filter,
})