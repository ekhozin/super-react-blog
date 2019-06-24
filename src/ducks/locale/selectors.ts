import Immutable from 'immutable';

function selectLocaleState(state) {
  return state.get('locale');
}

export default {
  selectLocaleState
};
