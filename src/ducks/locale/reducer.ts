import types from './types';
import locales from 'constants/locales'

const initialState = locales.en;

export default function (state = initialState, action) {
  switch (action.type) {
    case types.CHANGE_LOCALE:
      return action.locale;
    default:
      return state;
  }
}
