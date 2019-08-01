import {ICredentials, IQueryParams} from 'ts/interfaces/common';

const INIT_APP = '@app/INIT_APP';
const LOGIN_USER = '@@app/LOGIN_USER';
const REGISTER_USER = '@@app/REGISTER_USER';
const LOGOUT_USER = '@@app/LOGOUT_USER';
const FETCH_ARTICLES = '@@app/FETCH_ARTICLES';

interface IAppState {
  isInitialised: boolean;
}

interface IInitAppAction {
  type: typeof INIT_APP;
}

interface ILoginUserAction {
  type: typeof LOGIN_USER;
  credentials: ICredentials;
}

interface IRegisterUserAction {
  type: typeof REGISTER_USER;
  credentials: ICredentials;
}

interface ILogoutUserAction {
  type: typeof LOGOUT_USER;
}

interface IFetchArticlesAction {
  type: typeof FETCH_ARTICLES;
  params?: IQueryParams;
}

type AppActionTypes =
  IInitAppAction |
  ILoginUserAction |
  IRegisterUserAction |
  ILogoutUserAction |
  IFetchArticlesAction;

export {
  IAppState,
  IInitAppAction,
  IRegisterUserAction,
  ILogoutUserAction,
  IFetchArticlesAction,
  AppActionTypes,
  INIT_APP,
  LOGIN_USER,
  REGISTER_USER,
  LOGOUT_USER,
  FETCH_ARTICLES
};

// TODO: remove after replacing everywhere import
export default {
  INIT_APP,
  LOGIN_USER,
  REGISTER_USER,
  LOGOUT_USER,
  FETCH_ARTICLES
};
