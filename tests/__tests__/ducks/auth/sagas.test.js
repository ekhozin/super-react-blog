// jest.mock('tests/__mocks__/apiCallsMocks/fetchUser.js');
import {call, put} from 'redux-saga/effects';
import { expectSaga, testSaga } from 'redux-saga-test-plan';
import * as matchers from 'redux-saga-test-plan/matchers';
import { throwError } from 'redux-saga-test-plan/providers';

import userResponse from 'tests/__mocks__/responsesMocks/user';
import actions from 'ducks/auth/actions';
import sagas from 'ducks/auth/sagas';
import services from 'ducks/auth/services';
import reducer from 'ducks/auth/reducer';

const {fetchUserSaga} = sagas;
const {fetchUserRequest, fetchUserSuccess, fetchUserError} = actions;
const {fetchUser} = services;

describe('auth sagas', () => {
  describe('fetchUser saga success', () => {
    it('user should be in redux store', () => {
      return expectSaga(fetchUserSaga)
        .withReducer(reducer)
        .provide([
          [matchers.call.fn(services.fetchUser), userResponse]
        ])
        .hasFinalState({
          isAuthenticated: true,
          error: null,
          user: userResponse.user
        })
        .run();
    });

    it('should be successfull', () => {
      return expectSaga(fetchUserSaga)
        .provide([
          [matchers.call.fn(fetchUser), userResponse]
        ])
        .put(fetchUserSuccess(userResponse.user))
        .run();
    });

    it('should be failed', () => {
      const error = {message: 'fetch user error'};

      return expectSaga(fetchUserSaga)
        .provide([
          [matchers.call.fn(fetchUser), throwError(error)]
        ])
        .put(fetchUserError(error))
        .run();
    });

    it('step by step', () => {
      const fetchUser = jest
        .spyOn(services, 'fetchUser')
        .mockName('fetchUserMock')
        .mockImplementation(() => Promise.resolve(userResponse));

      const error = {message: 'error message'};

      testSaga(fetchUserSaga)
        .next() // success branch
        .put(fetchUserRequest())
        .next()
        .call(fetchUser)
        .save('before yield response')
        .next(userResponse)
        .put(fetchUserSuccess(userResponse.user))
        .next()
        .isDone()
        .restore('before yield response') // error branch
        .throw(error)
        .put(fetchUserError(error))
        .next()
        .isDone();
    });
  });
});
