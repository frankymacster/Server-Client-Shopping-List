import {
  VisibilityFilterAction,
} from '../actions/index';
import {
  SET_VISIBILITY_FILTER,
} from '../constants/index';
import {
  Filter,
} from '../types/index';

function visibilityFilter(state: Filter, action: VisibilityFilterAction): Filter {
  if (state === undefined) {
    state = '';
  }
  
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter;
    default:
      return state;
  }
}

export default visibilityFilter;