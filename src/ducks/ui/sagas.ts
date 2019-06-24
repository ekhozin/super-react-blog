import {put, call, take} from 'redux-saga/effects';
import {eventChannel} from 'redux-saga';
import throttle from 'lodash.throttle';

import actions from './actions';

function createChannel() {
  return eventChannel((emitter) => {
    function handleResize(e) {
      emitter({
        width: window.innerWidth,
        height: window.innerHeight
      });
    }

    const throttledHandle = throttle(handleResize, 100);

    window.addEventListener('load', handleResize);
    window.addEventListener('resize', throttledHandle);

    function unsubscribe() {
      window.removeEventListener('load', handleResize);
      window.removeEventListener('resize', throttledHandle);
    }

    return unsubscribe;
  });
}

function* windowSizeSagaWatch() {
  const channel = yield call(createChannel);

  while (true) {
    const size = yield take(channel);
    yield put(actions.windowResize(size));
  }
}

export default {
  windowSizeSagaWatch
};
