import {
  INIT_APP,
  LOGIN_USER,
  REGISTER_USER,
  LOGOUT_USER,
  FETCH_ARTICLES,
  AppActionTypes,
  IFetchArticlesAction
} from './types';

import {ICredentials, IQueryParams} from 'ts/interfaces/common';

export default {
  initApp(): AppActionTypes {
    return {
      type: INIT_APP
    };
  },

  loginUser(credentials: ICredentials): AppActionTypes {
    return {
      type: LOGIN_USER,
      credentials
    };
  },

  registerUser(credentials: ICredentials): AppActionTypes {
    return {
      type: REGISTER_USER,
      credentials
    };
  },

  logoutUser(): AppActionTypes {
    return {
      type: LOGOUT_USER
    };
  },

  fetchArticles(params: IQueryParams): AppActionTypes {
    return {
      type: FETCH_ARTICLES,
      params
    };
  }
};
