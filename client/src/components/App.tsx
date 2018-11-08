import * as React from 'react';
import { Component } from 'react';
import Footer from './Footer'
import AddTodo from '../containers/AddTodo';
import FetchedTodoList from '../containers/FetchedTodoList';

class App extends Component {
  public render() {
    return (
      <div className="App">
        <AddTodo />
        <FetchedTodoList />
        <Footer />
      </div>
    );
  }
}

export default App;
