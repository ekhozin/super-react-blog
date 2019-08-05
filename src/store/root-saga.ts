import {SagaIterator} from '@redux-saga/core';
import {call, all} from 'redux-saga/effects';
import appSagas from 'ducks/app/sagas';
import {uiSagas} from 'ducks/ui';

export default function* rootSaga(): SagaIterator {
  yield all([
    call(appSagas),
    call(uiSagas.windowSizeSagaWatch)
  ]);
}
