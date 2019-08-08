import {ICredentials, IQueryParams} from 'ts/interfaces/common';

/**
 * Actions
 */

export enum ActionNames {
  INIT_APP = '@app/INIT_APP',
  LOGIN_USER = '@@app/LOGIN_USER',
  REGISTER_USER = '@@app/REGISTER_USER',
  LOGOUT_USER = '@@app/LOGOUT_USER',
  FETCH_ARTICLES = '@@app/FETCH_ARTICLES',
  FETCH_ARTICLE = '@@app/FETCH_ARTICLE'
}

export interface IActions {
  initApp: IInitApp;
  loginUser: ILoginUser;
  registerUser: IRegisterUser;
  logoutUser: ILogoutUser;
  fetchArticles: IFetchArticles;
  fetchArticle: IFetchArticle;
}

export interface IInitApp {
  (): IInitAppAction;
}

export interface IFetchArticles {
  (params: IQueryParams): IFetchArticlesAction;
}

export interface IFetchArticle {
  (id: number | string): IFetchArticleAction;
}

export interface ILoginUser {
  (credentials: ICredentials): ILoginUserAction;
}

export interface IRegisterUser {
  (credentials: ICredentials): IRegisterUserAction;
}

export interface ILogoutUser {
  (): ILogoutUserAction;
}

export interface IAppState {
  isInitialised: boolean;
}

export interface IInitAppAction {
  type: typeof ActionNames.INIT_APP;
}

export interface ILoginUserAction {
  type: typeof ActionNames.LOGIN_USER;
  credentials: ICredentials;
}

export interface IRegisterUserAction {
  type: typeof ActionNames.REGISTER_USER;
  credentials: ICredentials;
}

export interface ILogoutUserAction {
  type: typeof ActionNames.LOGOUT_USER;
}

export interface IFetchArticlesAction {
  type: typeof ActionNames.FETCH_ARTICLES;
  params?: IQueryParams;
}

export interface IFetchArticleAction {
  type: typeof ActionNames.FETCH_ARTICLE;
  id: number | string;
}

export type AppActionTypes =
  IInitAppAction |
  ILoginUserAction |
  IRegisterUserAction |
  ILogoutUserAction |
  IFetchArticlesAction |
  IFetchArticleAction;
