import types from './types';

const initialState = {
  windowSize: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case types.WINDOW_RESIZE:
      return {
        ...state,
        windowSize: action.windowSize
      };
    default:
      return state;
  }
}
