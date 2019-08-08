import {put, call} from 'redux-saga/effects';
import {SagaIterator} from '@redux-saga/core';

import {IQueryParams} from 'ts/interfaces/common';
import actions from './actions';
import services from './services';

/**
 * @param {IQueryParams} params
 * @return {SagaIterator}
 */
export function* fetchArticlesSaga(params?: IQueryParams): SagaIterator {
  try {
    yield put(actions.fetchArticlesRequest());
    const payload = yield call(services.fetchArticles, params);
    yield put(actions.fetchArticlesSuccess(payload));
  } catch (error) {
    yield put(actions.fetchArticlesError(error));
  }
}

/**
 * @param {string | number} id Article id.
 * @return {SagaIterator}
 */
export function* fetchArticleSaga(id: string | number): SagaIterator {
  try {
    yield put(actions.fetchArticleRequest());
    const payload = yield call(services.fetchArticle, id);
    yield put(actions.fetchArticleSuccess(payload));
  } catch (error) {
    yield put(actions.fetchArticleError(error));
  }
}
