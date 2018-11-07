import * as React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import todoApp from './reducers/index';
import { StoreState } from './types/index';
import App from './components/App';
import { TodoAction } from './actions/index';
import incrementCounter from './singletons';

// XXX
const store = createStore<StoreState, TodoAction, any, any>(todoApp, {
  todos: [{
    completed: true,
    id: incrementCounter(),
    text: 'Consider using Redux',
  }, {
    completed: true,
    id: incrementCounter(),
    text: 'Keep all state in a single tree',
  }],
  visibilityFilter: 'SHOW_ALL',
}, applyMiddleware(thunk));

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root') as HTMLElement
);
