import {IUser} from 'ducks/auth/types';
import {IPagination, IError} from 'ts/interfaces/common';

export enum ActionNames {
  FETCH_ARTICLES_REQUEST = '@@articles/FETCH_ARTICLES_REQUEST',
  FETCH_ARTICLES_SUCCESS = '@@articles/FETCH_ARTICLES_SUCCESS',
  FETCH_ARTICLES_ERROR = '@@articles/FETCH_ARTICLES_ERROR'
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

export interface IFetchArticelsRequestAction {
  type: ActionNames.FETCH_ARTICLES_REQUEST;
}

export interface IFetchArticelsSuccessAction {
  type: ActionNames.FETCH_ARTICLES_SUCCESS;
  articles: IArticlesData;
}

export interface IFetchArticelsErrorAction {
  type: ActionNames.FETCH_ARTICLES_ERROR;
  error: IError;
}

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

export type ArticleActions =
  IFetchArticelsRequestAction |
  IFetchArticelsSuccessAction |
  IFetchArticelsErrorAction;
