import {AppStateType} from 'store/root-reducer';
import {IAppState} from './types';


function selectAppState(state: AppStateType): IAppState {
  return state.app;
}

function selectIsInitialised(state: AppStateType): boolean {
  return selectAppState(state).isInitialised;
}

export default {
  selectAppState,
  selectIsInitialised
};
