import {IUser} from 'ducks/auth/types';
import {IPagination, IError} from 'ts/interfaces/common';

/**
 * Actions
 */
export enum ActionNames {
  FETCH_ARTICLES_REQUEST = '@@articles/FETCH_ARTICLES_REQUEST',
  FETCH_ARTICLES_SUCCESS = '@@articles/FETCH_ARTICLES_SUCCESS',
  FETCH_ARTICLES_ERROR = '@@articles/FETCH_ARTICLES_ERROR'
}

export interface IActions {
  fetchArticlesRequest: IFetchArticlesRequest;
  fetchArticlesSuccess: IFetchArticlesSuccess;
  fetchArticlesError: IFetchArticlesError;
}

export interface IFetchArticlesRequest {
  (): IFetchArticlesRequestAction;
}

export interface IFetchArticlesSuccess {
  (articles: IArticlesData): IFetchArticlesSuccessAction;
}

export interface IFetchArticlesError {
  (error: IError): IFetchArticlesErrorAction;
}

export interface IArticle {
  id: number;
  userId: number;
  title: string;
  content: string;
  createdAt: string;
  updatedAt: string;
  imageUrl: string;
  user: IUser;
}

export interface IArticles {
  articles: IArticle[];
}

export interface IArticlesData {
  articles: IArticles;
  pagination: IPagination;
}

export interface IFetchArticlesRequestAction {
  type: typeof ActionNames.FETCH_ARTICLES_REQUEST;
}

export interface IFetchArticlesSuccessAction {
  type: typeof ActionNames.FETCH_ARTICLES_SUCCESS;
  articles: IArticlesData;
}

export interface IFetchArticlesErrorAction {
  type: typeof ActionNames.FETCH_ARTICLES_ERROR;
  error: IError;
}


export type ArticleActions =
  IFetchArticlesRequestAction |
  IFetchArticlesSuccessAction |
  IFetchArticlesErrorAction;

/**
 * State
 */
export interface IArticlesByIdState {
  [index: string]: IArticle;
}

export interface IArticlesSliceState {
  ids: number[];
  byId: IArticlesByIdState;
}

export interface IArticlesState {
  articles: IArticlesSliceState;
  pagination: IPagination;
  error: IError | null;
}
