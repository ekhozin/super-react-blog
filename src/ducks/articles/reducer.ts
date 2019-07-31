import {normalize, schema} from 'normalizr';
import types from './types';

const initialState = {
  articles: {
    ids: [],
    byId: {}
  },
  pagination: {},
  error: null
};

const articlesSchema = new schema.Entity('articles');
const articlesListSchema = new schema.Array(articlesSchema);

function requestArticles(state) {
  return {
    ...state,
    error: null
  };
}

function successArticles(state, action) {
  const {articles, pagination} = action.payload;
  const normalizedData = normalize(articles, articlesListSchema);

  return {
    ...state,
    articles: {
      ids: normalizedData.result,
      byId: normalizedData.entities.articles
    },
    pagination,
  };
}

function errorArticles(state, action) {
  return {
    ...state,
    error: action.error
  };
}

export default function(state = initialState, action) {
  switch (action.type) {
    case types.FETCH_ARTICLES_REQUEST:
      return requestArticles(state);
    case types.FETCH_ARTICLES_SUCCESS:
      return successArticles(state, action);
    case types.FETCH_ARTICLES_ERROR:
      return errorArticles(state, action);
    default:
      return state;
  }
}
