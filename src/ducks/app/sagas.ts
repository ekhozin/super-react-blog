import {call, put, all, takeLatest} from 'redux-saga/effects';
import {SagaIterator} from '@redux-saga/core';

import {authSagas} from 'ducks/auth';
import {articlesSagas} from 'ducks/articles';
import actions from './actions';
import types, {ILoginUserAction, IFetchArticlesAction} from './types';

function* initAppSaga(): SagaIterator {
  yield call(authSagas.fetchUserSaga);
  yield put(actions.initApp());
}

function* loginUserSaga(action: ILoginUserAction): SagaIterator {
  const {credentials} = action;
  yield authSagas.loginSaga(credentials);
}

function* registerUserSaga(action: ILoginUserAction): SagaIterator {
  const {credentials} = action;
  yield authSagas.registerSaga(credentials);
}

function* logoutUserSaga(): SagaIterator {
  yield authSagas.logoutSaga();
}

function* fetchArticles(action: IFetchArticlesAction): SagaIterator {
  yield articlesSagas.fetchArticlesSaga(action.params);
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
