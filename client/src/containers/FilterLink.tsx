import { Dispatch } from 'redux';
import { connect } from 'react-redux';

import { setVisibilityFilter, VisibilityFilterAction } from '../actions';
import Link from '../components/Link';
import { StoreState } from '../types/index';

export interface Props {
  filter: string;
  children?: any;
};

const mapStateToProps = (state: StoreState, ownProps: Props) => ({
  active: ownProps.filter === state.visibilityFilter
})

const mapDispatchToProps = (dispatch: Dispatch<VisibilityFilterAction>, ownProps: Props) => ({
  onClick: () => dispatch(setVisibilityFilter(ownProps.filter))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Link)