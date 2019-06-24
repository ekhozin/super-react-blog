import {put, call} from 'redux-saga/effects';
import actions from './actions';
import services from './services';

function* fetchArticlesSaga(params) {
  try {
    yield put(actions.fetchArticlesRequest());
    const payload = yield call(services.fetchArticles, params);
    yield put(actions.fetchArticlesSuccess(payload));
  } catch (error) {
    yield put(actions.fetchArticlesError(error));
  }
}

export default {
  fetchArticlesSaga
};
