import {AppState} from 'store/root-reducer';
import getByPath from 'lodash.get';

import {IAuthState, IUser} from './types';

function selectAuthState(state: AppState): IAuthState {
  return state.auth;
}

function selectIsAuthenticated(state: AppState): boolean {
  return selectAuthState(state).isAuthenticated;
}

function selectUser(state: AppState): IUser | {} {
  return selectAuthState(state).user;
}

function selectError(state: AppState): string {
  const err = getByPath(state, 'error.statusText');
  return err;
}

export default {
  selectIsAuthenticated,
  selectUser,
  selectError
};
