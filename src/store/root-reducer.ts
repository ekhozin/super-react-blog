import {combineReducers} from 'redux';

import {appReducer} from 'ducks/app';
import {authReducer} from 'ducks/auth';
import {localeReducer} from 'ducks/locale';
import {modalsReducer} from 'ducks/modals';
import {uiReducer} from 'ducks/ui';
import {articlesReducer} from 'ducks/articles';

const rootReducer = combineReducers({
  app: appReducer,
  auth: authReducer,
  locale: localeReducer,
  modals: modalsReducer,
  ui: uiReducer,
  articles: articlesReducer
});

export type AppStateType = ReturnType<typeof rootReducer>;

export default rootReducer;
