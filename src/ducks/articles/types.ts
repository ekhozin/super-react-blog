import {IUser} from 'ducks/auth/types';
import {IPagination, IError} from 'ts/interfaces/common';

/**
 * Actions
 */
export enum ActionNames {
  FETCH_ARTICLES_REQUEST = '@@articles/FETCH_ARTICLES_REQUEST',
  FETCH_ARTICLES_SUCCESS = '@@articles/FETCH_ARTICLES_SUCCESS',
  FETCH_ARTICLES_ERROR = '@@articles/FETCH_ARTICLES_ERROR',
  FETCH_ARTICLE_REQUEST = '@@articles/FETCH_ARTICLE_REQUEST',
  FETCH_ARTICLE_SUCCESS = '@@articles/FETCH_ARTICLE_SUCCESS',
  FETCH_ARTICLE_ERROR = '@@articles/FETCH_ARTICLE_ERROR',
  FLUSH_ARTICLE_STATE = '@@articles/FLUSH_ARTICLE_STATE'
}

export interface IActions {
  fetchArticlesRequest: IFetchArticlesRequest;
  fetchArticlesSuccess: IFetchArticlesSuccess;
  fetchArticlesError: IFetchArticlesError;
  fetchArticleRequest: IFetchArticleRequest;
  fetchArticleSuccess: IFetchArticleSuccess;
  fetchArticleError: IFetchArticleError;
  flushArticleState: IFlushArticleState;
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

export interface IFetchArticleRequest {
  (): IFetchArticleRequestAction;
}

export interface IFetchArticleSuccess {
  (articles: IArticleData): IFetchArticleSuccessAction;
}

export interface IFetchArticleError {
  (error: IError): IFetchArticleErrorAction;
}

export interface IFlushArticleState {
  (): IFlushArticleStateAction;
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

export type TArticlePreview = Pick<IArticle, 'id' | 'userId' | 'title'| 'content' | 'imageUrl'> & {link: string};

export interface IArticles {
  articles: IArticle[];
}

export interface IArticlesData {
  articles: IArticles;
  pagination: IPagination;
}

export interface IArticleData {
  article: IArticle;
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

export interface IFetchArticleRequestAction {
  type: typeof ActionNames.FETCH_ARTICLE_REQUEST;
}

export interface IFetchArticleSuccessAction {
  type: typeof ActionNames.FETCH_ARTICLE_SUCCESS;
  article: IArticleData;
}

export interface IFetchArticleErrorAction {
  type: typeof ActionNames.FETCH_ARTICLE_ERROR;
  error: IError;
}

export interface IFlushArticleStateAction {
  type: typeof ActionNames.FLUSH_ARTICLE_STATE;
}

export type ArticleActions =
  IFetchArticlesRequestAction |
  IFetchArticlesSuccessAction |
  IFetchArticlesErrorAction |
  IFetchArticleRequestAction |
  IFetchArticleSuccessAction |
  IFetchArticleErrorAction |
  IFlushArticleStateAction;

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
  article: IArticle | {};
  pagination: IPagination;
  error: IError | null;
}
