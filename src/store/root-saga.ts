import {call, all} from 'redux-saga/effects';
import {appSagas} from 'ducks/app';
import {uiSagas} from 'ducks/ui';

export default function* () {
  yield all([
    call(appSagas),
    call(uiSagas.windowSizeSagaWatch)
  ]);
}
