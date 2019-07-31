import types from './types';

const initialState = {
  isInitialised: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case types.INIT_APP:
      return {
        ...state,
        isInitialised: true
      };
    default:
      return state;
  }
}
