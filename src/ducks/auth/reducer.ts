import {
  AuthActionTypes,
  SuccessActionTypes,
  ErrorActionTypes,
  IAuthState,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_REQUEST,
  LOGIN_USER_ERROR,
  FETCH_USER_SUCCESS,
  FETCH_USER_REQUEST,
  FETCH_USER_ERROR,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_REQUEST,
  REGISTER_USER_ERROR,
  LOGOUT_USER
} from './types';

const initialState: IAuthState = {
  isAuthenticated: false,
  error: null,
  user: {}
};

function requestUser(state: IAuthState): IAuthState {
  return {
    ...state,
    error: null
  };
}

function successUser(state: IAuthState, action: SuccessActionTypes): IAuthState {
  return {
    ...state,
    user: action.user,
    isAuthenticated: true
  };
}

function errorUser(state: IAuthState, action: ErrorActionTypes): IAuthState {
  return {
    ...state,
    error: action.error
  };
}

function logoutUser(state: IAuthState): IAuthState {
  return {
    ...state,
    isAuthenticated: false
  };
}

export default function(state = initialState, action: AuthActionTypes): IAuthState {
  switch (action.type) {
    case LOGIN_USER_REQUEST:
    case FETCH_USER_REQUEST:
    case REGISTER_USER_REQUEST:
      return requestUser(state);
    case LOGIN_USER_SUCCESS:
    case FETCH_USER_SUCCESS:
    case REGISTER_USER_SUCCESS:
      return successUser(state, action);
    case LOGIN_USER_ERROR:
    case FETCH_USER_ERROR:
    case REGISTER_USER_ERROR:
      return errorUser(state, action);
    case LOGOUT_USER:
      return logoutUser(state);
    default:
      return state;
  }
}
