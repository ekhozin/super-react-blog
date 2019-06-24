import types from './types';

export default {
  windowResize(windowSize) {
    return {
      type: types.WINDOW_RESIZE,
      windowSize
    };
  }
};
