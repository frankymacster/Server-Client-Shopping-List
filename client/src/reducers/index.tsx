import { combineReducers } from 'redux';
import todos from './todos';
import visibilityFilter from './visibilityFilter';
import products from './productReducer';

const todoApp = combineReducers({
  products,
  todos,
  visibilityFilter,
});

export default todoApp;