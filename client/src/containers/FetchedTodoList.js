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
    const { error, loading, products } = this.props;

    if (error) {
      return <div>Error! {error.message}</div>;
    }

    if (loading) {
      return <div>Loading...</div>;
    }

    return ( 
      <div>
        <ul>
        {products.map(product => (
          <li key={product.id}>{product.text}</li>
        ))}
        </ul>
        < VisibleTodoList />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  products: state.products.items,
  loading: state.products.loading,
  error: state.products.error
});

export default connect(mapStateToProps)(FetchedTodoList);