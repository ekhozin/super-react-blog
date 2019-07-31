function selectAppState(state) {
  return state.app;
}

function selectIsInitialised(state) {
  return selectAppState(state).isInitialised;
}

export default {
  selectAppState,
  selectIsInitialised
};
