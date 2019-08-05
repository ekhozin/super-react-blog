import {normalize, schema} from 'normalizr';
import {
  ActionNames,
  ArticleActions,
  IArticlesState,
  IFetchArticelsSuccessAction,
  IFetchArticelsErrorAction
} from './types';

const initialState: IArticlesState = {
  articles: {
    ids: [],
    byId: {}
  },
  pagination: {
    offset: 0,
    limit: 0,
    rowCount: 0,
    pageCount: 0
  },
  error: null
};

const articlesSchema = new schema.Entity('articles');
const articlesListSchema = new schema.Array(articlesSchema);

function requestArticles(state: IArticlesState): IArticlesState {
  return {
    ...state,
    error: null
  };
}

function successArticles(state: IArticlesState, action: IFetchArticelsSuccessAction): IArticlesState {
  const {articles, pagination} = action.articles;
  const normalizedData = normalize(articles, articlesListSchema);

  return {
    ...state,
    articles: {
      ids: normalizedData.result,
      byId: normalizedData.entities.articles
    },
    pagination
  };
}

function errorArticles(state: IArticlesState, action: IFetchArticelsErrorAction): IArticlesState {
  return {
    ...state,
    error: action.error
  };
}

export default function(state = initialState, action: ArticleActions): IArticlesState {
  switch (action.type) {
    case ActionNames.FETCH_ARTICLES_REQUEST:
      return requestArticles(state);
    case ActionNames.FETCH_ARTICLES_SUCCESS:
      return successArticles(state, action);
    case ActionNames.FETCH_ARTICLES_ERROR:
      return errorArticles(state, action);
    default:
      return state;
  }
}
