import Immutable from 'immutable';

import types from './types';

const initialState = Immutable.fromJS({
  isInitialised: false
});

export default function(state = initialState, action) {
  switch (action.type) {
    case types.INIT_APP:
      return state.set('isInitialised', true);
    default:
      return state;
  }
}
