import * as React from 'react';
import { Component } from 'react';
import Footer from './Footer'
import AddTodo from '../containers/AddTodo';
import VisibleTodoList from '../containers/VisibleTodoList';
import ProductList from "./ProductList";

class App extends Component {
  public render() {
    return (
      <div className="App">
        <AddTodo />
        <VisibleTodoList />
        <Footer />
        <ProductList />
      </div>
    );
  }
}

export default App;
