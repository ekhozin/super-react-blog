import types from './types';

export default {
  loginUserRequest() {
    return {
      type: types.LOGIN_USER_REQUEST
    };
  },

  loginUserSuccess(user) {
    return {
      type: types.LOGIN_USER_SUCCESS,
      user
    };
  },

  loginUserError(error) {
    return {
      type: types.LOGIN_USER_ERROR,
      error
    };
  },

  registerUserRequest() {
    return {
      type: types.REGISTER_USER_REQUEST
    };
  },

  registerUserSuccess(user) {
    return {
      type: types.REGISTER_USER_SUCCESS,
      user
    };
  },

  registerUserError(error) {
    return {
      type: types.REGISTER_USER_ERROR,
      error
    };
  },

  logoutUser() {
    return {
      type: types.LOGOUT_USER
    };
  },

  fetchUserRequest() {
    return {
      type: types.FETCH_USER_REQUEST
    };
  },

  fetchUserSuccess(user) {
    return {
      type: types.FETCH_USER_SUCCESS,
      user
    };
  },

  fetchUserError(error) {
    return {
      type: types.FETCH_USER_ERROR,
      error
    };
  }
};
