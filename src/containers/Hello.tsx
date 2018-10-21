import Hello from '../components/Hello';
import * as actions from '../actions/';
import { Dispatch } from 'redux';
import { StoreState } from '../types/index';
import { connect } from 'react-redux';

export function mapStateToProps({ enthusiasmLevel, languageName }: StoreState) {
  return {
    enthusiasmLevel,
    name: languageName,
  }
};

export function mapDispatchToProps(dispatch: Dispatch<actions.EnthusiasmAction>) {
  return {
    onDecrement: () => dispatch(actions.decrementEnthusiasm()),
    onIncrement: () => dispatch(actions.incrementEnthusiasm()),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Hello);