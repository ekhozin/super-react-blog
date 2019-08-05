import {ICredentials, IQueryParams} from 'ts/interfaces/common';

const INIT_APP = '@app/INIT_APP';
const LOGIN_USER = '@@app/LOGIN_USER';
const REGISTER_USER = '@@app/REGISTER_USER';
const LOGOUT_USER = '@@app/LOGOUT_USER';
const FETCH_ARTICLES = '@@app/FETCH_ARTICLES';

export interface IFetchArticles {
  (params: IQueryParams): IFetchArticlesAction;
}

export interface IAppState {
  isInitialised: boolean;
}

export interface IInitAppAction {
  type: typeof INIT_APP;
}

export interface ILoginUserAction {
  type: typeof LOGIN_USER;
  credentials: ICredentials;
}

export interface IRegisterUserAction {
  type: typeof REGISTER_USER;
  credentials: ICredentials;
}

export interface ILogoutUserAction {
  type: typeof LOGOUT_USER;
}

export interface IFetchArticlesAction {
  type: typeof FETCH_ARTICLES;
  params?: IQueryParams;
}

export type AppActionTypes =
  IInitAppAction |
  ILoginUserAction |
  IRegisterUserAction |
  ILogoutUserAction |
  IFetchArticlesAction;

export {
  INIT_APP,
  LOGIN_USER,
  REGISTER_USER,
  LOGOUT_USER,
  FETCH_ARTICLES
};

export default {
  INIT_APP,
  LOGIN_USER,
  REGISTER_USER,
  LOGOUT_USER,
  FETCH_ARTICLES
};
