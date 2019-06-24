import types from './types';

export default {
  fetchArticlesRequest() {
    return {
      type: types.FETCH_ARTICLES_REQUEST
    };
  },

  fetchArticlesSuccess(payload) {
    return {
      type: types.FETCH_ARTICLES_SUCCESS,
      payload
    };
  },

  fetchArticlesError(error) {
    return {
      type: types.FETCH_ARTICLES_ERROR,
      error
    };
  }
};
