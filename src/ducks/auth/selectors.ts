import {createSelector} from 'reselect';
import getByPath from 'lodash.get';

function selectAuthState(state) {
  return state.auth;
}

function selectIsAuthenticated(state) {
  return selectAuthState(state).isAuthenticated;
}

function selectUser(state) {
  return selectAuthState(state).user;
}

function selectError(state) {
  const err = getByPath(state, 'error.statusText');
  return err;
}

export default {
  selectIsAuthenticated,
  selectUser,
  selectError
};
