import {IAppState} from './types';

function selectAppState(state: IAppState): any {
  return state.app;
}

function selectIsInitialised(state: IAppState): any {
  return selectAppState(state).isInitialised;
}

export default {
  selectAppState,
  selectIsInitialised
};
