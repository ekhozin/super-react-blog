import {call, put, all, takeLatest} from 'redux-saga/effects';
import {SagaIterator} from '@redux-saga/core';

import {loginSaga, registerSaga, fetchUserSaga, logoutSaga} from 'ducks/auth/sagas';
import {fetchArticlesSaga} from 'ducks/articles/sagas';
import actions from './actions';
import types, {ILoginUserAction, IFetchArticlesAction} from './types';

function* initAppSaga(): SagaIterator {
  yield call(fetchUserSaga);
  yield put(actions.initApp());
}

function* loginUserSaga(action: ILoginUserAction): IterableIterator<SagaIterator> {
  const {credentials} = action;
  yield loginSaga(credentials);
}

function* registerUserSaga(action: ILoginUserAction): IterableIterator<SagaIterator> {
  const {credentials} = action;
  yield registerSaga(credentials);
}

function* logoutUserSaga(): IterableIterator<SagaIterator> {
  yield logoutSaga();
}

function* fetchArticles(action: IFetchArticlesAction): IterableIterator<SagaIterator> {
  yield fetchArticlesSaga(action.params);
}

export default function* rootAppSaga(): SagaIterator {
  yield all([
    takeLatest(types.LOGIN_USER, loginUserSaga),
    takeLatest(types.LOGOUT_USER, logoutUserSaga),
    takeLatest(types.REGISTER_USER, registerUserSaga),
    takeLatest(types.FETCH_ARTICLES, fetchArticles),
    call(initAppSaga)
  ]);
}
