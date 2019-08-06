import {call, put, all, takeLatest} from 'redux-saga/effects';
import {SagaIterator} from '@redux-saga/core';

import {loginSaga, registerSaga, fetchUserSaga, logoutSaga} from 'ducks/auth/sagas';
import {fetchArticlesSaga} from 'ducks/articles/sagas';
import actions from './actions';
import {ActionNames, ILoginUserAction, IFetchArticlesAction} from './types';


/**
 * @return {SagaIterator}
 */
function* initAppSaga(): SagaIterator {
  yield call(fetchUserSaga);
  yield put(actions.initApp());
}

/**
 * @param {ILoginUserAction} action
 * @return {IterableIterator<SagaIterator>}
 */
function* loginUserSaga(action: ILoginUserAction): IterableIterator<SagaIterator> {
  const {credentials} = action;
  yield loginSaga(credentials);
}

/**
 * @param {ILoginUserAction} action
 * @return {IterableIterator<SagaIterator>}
 */
function* registerUserSaga(action: ILoginUserAction): IterableIterator<SagaIterator> {
  const {credentials} = action;
  yield registerSaga(credentials);
}

/**
 * @return {IterableIterator<SagaIterator>}
 */
function* logoutUserSaga(): IterableIterator<SagaIterator> {
  yield logoutSaga();
}

/**
 * @param {IFetchArticlesAction} action
 * @return {IterableIterator<SagaIterator>}
 */
function* fetchArticles(action: IFetchArticlesAction): IterableIterator<SagaIterator> {
  yield fetchArticlesSaga(action.params);
}

/**
 * @return {SagaIterator}
 */
export default function* rootAppSaga(): SagaIterator {
  yield all([
    takeLatest(ActionNames.LOGIN_USER, loginUserSaga),
    takeLatest(ActionNames.LOGOUT_USER, logoutUserSaga),
    takeLatest(ActionNames.REGISTER_USER, registerUserSaga),
    takeLatest(ActionNames.FETCH_ARTICLES, fetchArticles),
    call(initAppSaga)
  ]);
}
