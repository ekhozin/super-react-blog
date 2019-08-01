import {call, put} from 'redux-saga/effects';

import DataSource from 'helpers/data-source';
import actions from './actions';
import services from './services';

/**
 *
 * @param {UserCredentials} credentials
 * @return {IterableIterator<*>}
 */
function* loginSaga(credentials) {
  try {
    yield put(actions.loginUserRequest());
    const {user} = yield call(services.login, credentials);
    yield put(actions.loginUserSuccess(user));
    // TODO: return?
  } catch (error) {
    yield put(actions.loginUserError(error));;
    // TODO: return?
  }
}

/**
 *
 * @param {UserCredentials} credentials
 * @return {IterableIterator<*>}
 */
function* registerSaga(credentials) {
  try {
    yield put(actions.registerUserRequest());
    const {user} = yield call(services.register, credentials);
    yield put(actions.registerUserSuccess(user));
    // TODO: return?
  } catch (error) {
    yield put(actions.registerUserError(error));
    // TODO: return?
  }
}

/**
 * @return {IterableIterator<*>}
 */
function* fetchUserSaga() {
  try {
    yield put(actions.fetchUserRequest());
    const {user} = yield call(services.fetchUser);
    yield put(actions.fetchUserSuccess(user));
  } catch (error) {
    yield put(actions.fetchUserError(error));
  }
}

/**
 * @return {IterableIterator<*>}
 */
function* logoutSaga() {
  yield put(actions.logoutUser());
  DataSource.removeToken();
}

export default {
  loginSaga,
  logoutSaga,
  fetchUserSaga,
  registerSaga
};
