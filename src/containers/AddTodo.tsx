/* tslint:disable */

import * as React from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';

import { addTodo, TodoAction } from '../actions';

export interface Props {
  dispatch: Dispatch<TodoAction>;
};

const AddTodo = ({ dispatch }: Props) => {
  let input: HTMLInputElement;

  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault();

          if (!input.value.trim()) {
            return;
          }

          dispatch(addTodo(input.value));
          input.value = '';
        }}
      >
        <input ref={(node: HTMLInputElement) => input = node} />
        <button type="submit">
          Add Todo
        </button>
      </form>
    </div>
  )
}

export default connect()(AddTodo)