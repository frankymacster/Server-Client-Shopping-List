import {
  TodoAction
} from '../actions/index';
import {
  ADD_TODO,
  TOGGLE_TODO,
} from '../constants/index';
import { Todo } from '../types/index';
import incrementCounter from '../singletons/index';

function todos(state: Todo[], action: TodoAction) {
  if (state === undefined) {
    state = [];
  }

  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          completed: false,
          id: incrementCounter(),
          text: action.text,
        }
      ]
    case TOGGLE_TODO:
      return state.map((todo: Todo, index: number) => {
        if (index === action.id) {
          return Object.assign({}, todo, {
            completed: !todo.completed
          })
        }
        return todo
      })
    default:
      return state
  }
}

export default todos;