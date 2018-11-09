/* tslint:disable */

import * as React from 'react';
import Todo from './Todo';
import { Todo as Todo2 } from '../types/index';

export interface Props {
  error: any;
  loading: boolean;
  todos: Todo2[];
  toggleTodo: (id: number) => void;
};

const TodoList = ({
  error,
  loading,
  todos,
  toggleTodo
}: Props) => {
  if (error) {
    return <div>Error! {error.message}</div>;
  }

  if (loading) {
    return <div>Loading...</div>;
  }

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