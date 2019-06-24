import {createStore, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension/developmentOnly';
import createSagaMiddleware from 'redux-saga';
import createHistory from 'history/createBrowserHistory';
import throttle from 'lodash.throttle';

import rootReducer from './root-reducer';
import rootSaga from './root-saga';
import DataSource from 'helpers/data-source';

const history = createHistory();
const sagaMiddleware = createSagaMiddleware();

const middleware = [
  sagaMiddleware
];

const persistedState = DataSource.loadState();

const store = createStore(
  rootReducer,
  persistedState,
  composeWithDevTools(applyMiddleware(...middleware))
);

store.subscribe(throttle(() => {
  const state = store.getState();
  const _state = state.deleteAll(['modals', 'ui']);

  DataSource.saveState(_state);
}, 1000));

sagaMiddleware.run(rootSaga);

export {history};
export default store;
