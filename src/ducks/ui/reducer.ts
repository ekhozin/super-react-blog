import Immutable from 'immutable';
import types from './types';

const initialState = Immutable.Map({
  windowSize: Immutable.Map()
});

export default function(state = initialState, action) {
  switch (action.type) {
    case types.WINDOW_RESIZE:
      return state.set('windowSize', Immutable.fromJS(action.windowSize));
    default:
      return state;
  }
}
