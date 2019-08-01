import {call, put, all, takeLatest} from 'redux-saga/effects';

import {authSagas} from 'ducks/auth';
import {articlesSagas} from 'ducks/articles';
import actions from './actions';
import types from './types';

function* initAppSaga() {
  yield call(authSagas.fetchUserSaga);
  yield put(actions.initApp());
}

function* loginUserSaga(action) {
  const {credentials} = action;
  yield authSagas.loginSaga(credentials);
}

function* registerUserSaga(action) {
  const {credentials} = action;
  yield authSagas.registerSaga(credentials);
}

function* logoutUserSaga() {
  yield authSagas.logoutSaga();
}

function* fetchArticles(action) {
  yield articlesSagas.fetchArticlesSaga(action.params);
}

export default function* () {
  yield all([
    takeLatest(types.LOGIN_USER, loginUserSaga),
    takeLatest(types.LOGOUT_USER, logoutUserSaga),
    takeLatest(types.REGISTER_USER, registerUserSaga),
    takeLatest(types.FETCH_ARTICLES, fetchArticles),
    call(initAppSaga)
  ]);
}
