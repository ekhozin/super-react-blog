import {AppStateType} from 'store/root-reducer';
import getByPath from 'lodash.get';

import {IAuthState, IUser} from './types';

function selectAuthState(state: AppStateType): IAuthState {
  return state.auth;
}

function selectIsAuthenticated(state: AppStateType): boolean {
  return selectAuthState(state).isAuthenticated;
}

function selectUser(state: AppStateType): IUser | {} {
  return selectAuthState(state).user;
}

function selectError(state: AppStateType): string {
  const err = getByPath(state, 'error.statusText');
  return err;
}

export default {
  selectIsAuthenticated,
  selectUser,
  selectError
};
