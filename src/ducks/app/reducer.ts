import types, {IAppState, AppActionTypes} from './types';

const initialState: IAppState = {
  isInitialised: false
};

export default function(state = initialState, action: AppActionTypes): IAppState {
  switch (action.type) {
    case types.INIT_APP:
      return {
        ...state,
        isInitialised: true
      };
    default:
      return state;
  }
}
