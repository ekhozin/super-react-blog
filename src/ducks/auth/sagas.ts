import {call, put} from 'redux-saga/effects';
import {SagaIterator} from '@redux-saga/core';

import {ICredentials} from 'ts/interfaces/common';
import DataSource from 'helpers/data-source';
import actions from './actions';
import services from './services';

/**
 *
 * @param {ICredentials} credentials
 * @return {SagaIterator}
 */
export function* loginSaga(credentials: ICredentials): SagaIterator {
  try {
    yield put(actions.loginUserRequest());
    const {user} = yield call(services.login, credentials);
    yield put(actions.loginUserSuccess(user));
    // TODO: return?
  } catch (error) {
    yield put(actions.loginUserError(error));
    // TODO: return?
  }
}

/**
 *
 * @param {ICredentials} credentials
 * @return {SagaIterator}
 */
export function* registerSaga(credentials: ICredentials): SagaIterator {
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
 * @return {SagaIterator}
 */
export function* fetchUserSaga(): SagaIterator {
  try {
    yield put(actions.fetchUserRequest());
    const {user} = yield call(services.fetchUser);
    yield put(actions.fetchUserSuccess(user));
  } catch (error) {
    yield put(actions.fetchUserError(error));
  }
}

/**
 * @return {SagaIterator}
 */
export function* logoutSaga(): SagaIterator {
  yield put(actions.logoutUser());
  DataSource.removeToken();
}
