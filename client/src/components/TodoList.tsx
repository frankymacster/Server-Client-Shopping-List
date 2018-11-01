/* tslint:disable */

import * as React from 'react';
import Todo from './Todo';
import { Todo as Todo2 } from '../types/index';

export interface Props {
  todos: Todo2[];
  toggleTodo: (id: number) => void;
};

const TodoList = ({ todos, toggleTodo }: Props) => {
  return (
    <ul>
      {todos.map((todo: Todo2) =>
        <Todo
          key={todo.id}
          {...todo}
          onClick={() => toggleTodo(todo.id)}
        />
      )}
    </ul>
  )
}

export default TodoList;