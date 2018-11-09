/* tslint:disable */

import * as React from 'react';  
import { connect } from 'react-redux';
import { fetchProducts } from '../actions/productActions';
import VisibleTodoList from '../containers/VisibleTodoList';

class FetchedTodoList extends React.Component {  
  componentDidMount() {
    this.props.dispatch(fetchProducts());
  }

  render() {
    return ( 
      < VisibleTodoList />
    )
  }
}

const mapStateToProps = state => ({
  products: state.products.items,
  loading: state.products.loading,
  error: state.products.error
});

export default connect(mapStateToProps)(FetchedTodoList);