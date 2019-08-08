import {
  ActionNames,
  IActions
} from './types';

const actions: IActions = {
  /**
   * @return {IFetchArticelsRequest}
   */
  fetchArticlesRequest() {
    return {
      type: ActionNames.FETCH_ARTICLES_REQUEST
    };
  },


  /**
   * @param {IArticlesData} articles
   * @return {IFetchArticlesSuccess}
   */
  fetchArticlesSuccess(articles) {
    return {
      type: ActionNames.FETCH_ARTICLES_SUCCESS,
      articles
    };
  },

  /**
   * @param {IError} error
   * @return {IFetchArticlesError}
   */
  fetchArticlesError(error) {
    return {
      type: ActionNames.FETCH_ARTICLES_ERROR,
      error
    };
  },

  /**
   * @return {IFetchArticelRequest}
   */
  fetchArticleRequest() {
    return {
      type: ActionNames.FETCH_ARTICLE_REQUEST
    };
  },

  /**
   * @param {IArticleData} articles
   * @return {IFetchArticleSuccess}
   */
  fetchArticleSuccess(article) {
    return {
      type: ActionNames.FETCH_ARTICLE_SUCCESS,
      article
    };
  },

  /**
   * @param {IError} error
   * @return {IFetchArticleError}
   */
  fetchArticleError(error) {
    return {
      type: ActionNames.FETCH_ARTICLE_ERROR,
      error
    };
  },

  /**
   * @param {IError} error
   * @return {IFetchArticleError}
   */
  flushArticleState() {
    return {
      type: ActionNames.FLUSH_ARTICLE_STATE
    };
  }
};

export default actions;
