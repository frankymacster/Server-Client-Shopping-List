import * as React from 'react';

import { Todo } from '../types/index';

export interface Props extends Todo {
  onClick: () => void;
};

const Todo = ({ onClick, completed, text }: Props) => (
  <li
    onClick={onClick}
    style={ {
      textDecoration: completed ? 'line-through' : 'none'
    }}
  >
    {text}
  </li>
)

export default Todo;