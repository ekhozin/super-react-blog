import types from './types';

export default {
  initApp() {
    return {
      type: types.INIT_APP
    };
  },

  loginUser(credentials, callback) {
    return {
      type: types.LOGIN_USER,
      credentials,
      callback
    };
  },

  registerUser(credentials, callback) {
    return {
      type: types.REGISTER_USER,
      credentials,
      callback
    }
  },

  logoutUser() {
    return {
      type: types.LOGOUT_USER
    };
  },

  fetchArticles(params) {
    return {
      type: types.FETCH_ARTICLES,
      params
    }
  }
};
