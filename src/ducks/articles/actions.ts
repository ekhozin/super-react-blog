import {IError} from 'ts/interfaces/common';

import {
  ActionNames,
  IFetchArticelsRequestAction,
  IFetchArticelsSuccessAction,
  IFetchArticelsErrorAction,
  IArticlesData
} from './types';

export default {
  fetchArticlesRequest(): IFetchArticelsRequestAction {
    return {
      type: ActionNames.FETCH_ARTICLES_REQUEST
    };
  },

  fetchArticlesSuccess(articles: IArticlesData): IFetchArticelsSuccessAction {
    return {
      type: ActionNames.FETCH_ARTICLES_SUCCESS,
      articles
    };
  },

  fetchArticlesError(error: IError): IFetchArticelsErrorAction {
    return {
      type: ActionNames.FETCH_ARTICLES_ERROR,
      error
    };
  }
};
