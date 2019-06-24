import types from './types';

export default {
  changeLocale(locale) {
    return {
      type: types.CHANGE_LOCALE,
      locale
    };
  }
};
