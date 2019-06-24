import {combineReducers} from 'redux-immutable';

import {appReducer} from 'ducks/app';
import {authReducer} from 'ducks/auth';
import {localeReducer} from 'ducks/locale';
import {modalsReducer} from 'ducks/modals';
import {uiReducer} from 'ducks/ui';
import {articlesReducer} from 'ducks/articles';

export default combineReducers({
  app: appReducer,
  auth: authReducer,
  locale: localeReducer,
  modals: modalsReducer,
  ui: uiReducer,
  articles: articlesReducer
});
