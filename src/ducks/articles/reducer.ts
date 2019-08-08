import {normalize, schema} from 'normalizr';
import {
  ActionNames,
  ArticleActions,
  IArticlesState,
  IFetchArticlesSuccessAction,
  IFetchArticlesErrorAction,
  IFetchArticleSuccessAction,
  IFetchArticleErrorAction
} from './types';

const initialState: IArticlesState = {
  articles: {
    ids: [],
    byId: {}
  },
  article: {},
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

function successArticles(state: IArticlesState, action: IFetchArticlesSuccessAction): IArticlesState {
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

function errorArticles(state: IArticlesState, action: IFetchArticlesErrorAction): IArticlesState {
  return {
    ...state,
    error: action.error
  };
}

function requestArticle(state: IArticlesState): IArticlesState {
  return {
    ...state,
    error: null
  };
}

function successArticle(state: IArticlesState, action: IFetchArticleSuccessAction): IArticlesState {
  return {
    ...state,
    article: action.article
  };
}

function errorArticle(state: IArticlesState, action: IFetchArticleErrorAction): IArticlesState {
  return {
    ...state,
    article: action.error
  };
}

function flushArticleState(state: IArticlesState): IArticlesState {
  return {
    ...state,
    article: {}
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
    case ActionNames.FETCH_ARTICLE_REQUEST:
      return requestArticle(state);
    case ActionNames.FETCH_ARTICLE_SUCCESS:
      return successArticle(state, action);
    case ActionNames.FETCH_ARTICLE_ERROR:
      return errorArticle(state, action);
    case ActionNames.FLUSH_ARTICLE_STATE:
      return flushArticleState(state);
    default:
      return state;
  }
}
