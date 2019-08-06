import {AppState} from 'store/root-reducer';
import {IAppState} from './types';

function selectAppState(state: AppState): IAppState {
  return state.app;
}

function selectIsInitialised(state: AppState): boolean {
  return selectAppState(state).isInitialised;
}

export default {
  selectAppState,
  selectIsInitialised
};
