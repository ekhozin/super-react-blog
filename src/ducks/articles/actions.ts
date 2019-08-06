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
  }
};

export default actions;
