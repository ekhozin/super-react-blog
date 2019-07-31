import {createSelector} from 'reselect';

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
  return selectAuthState(state).error;
}

export default {
  selectIsAuthenticated,
  selectUser,
  selectError
};
