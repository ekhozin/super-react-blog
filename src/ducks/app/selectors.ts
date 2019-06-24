function selectAppState(state) {
  return state.get('app');
}

function selectIsInitialised(state) {
  return selectAppState(state).get('isInitialised');
}

export default {
  selectAppState,
  selectIsInitialised
};
