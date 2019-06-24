import {createSelector} from 'reselect';

function selectAuthState(state) {
  return state.get('auth');
}

function selectIsAuthenticated(state) {
  return selectAuthState(state).get('isAuthenticated');
}

function selectUserImmutable(state) {
  return selectAuthState(state).get('user');
}

function selectErrorImmutable(state) {
  return selectAuthState(state).get('error');
}

const selectUser = createSelector(
  selectUserImmutable,
  (user) => user.toJS()
);

const selectError = createSelector(
  selectErrorImmutable,
  (error) => error ? error.toJS() : null
);

export default {
  selectIsAuthenticated,
  selectUser,
  selectError
};
