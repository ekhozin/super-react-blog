import types from './types';

const initialState = {
  isAuthenticated: false,
  error: null,
  user: {}
};

function requestUser(state) {
  return {
    ...state,
    error: null
  };
}

function successUser(state, action) {
  return {
    ...state,
    user: action.user,
    isAuthenticated: true
  };
}

function errorUser(state, action) {
  return {
    ...state,
    error: action.error
  };
}

function logoutUser(state) {
  return {
    ...state,
    isAuthenticated: false
  };
}

export default function(state = initialState, action) {
  switch (action.type) {
    case types.LOGIN_USER_REQUEST:
    case types.FETCH_USER_REQUEST:
    case types.REGISTER_USER_REQUEST:
      return requestUser(state);
    case types.LOGIN_USER_SUCCESS:
    case types.FETCH_USER_SUCCESS:
    case types.REGISTER_USER_SUCCESS:
      return successUser(state, action);
    case types.LOGIN_USER_ERROR:
    case types.FETCH_USER_ERROR:
    case types.REGISTER_USER_ERROR:
      return errorUser(state, action);
    case types.LOGOUT_USER:
      return logoutUser(state);
    default:
      return state;
  }
}
