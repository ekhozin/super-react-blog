import {
  ActionNames,
  IActions
} from './types';

const actions: IActions = {
  /**
   * @return {IInitAppAction}
   */
  initApp() {
    return {
      type: ActionNames.INIT_APP
    };
  },

  /**
   * @param {ICredentials} credentials
   * @return {ILoginUserAction}
   */
  loginUser(credentials) {
    return {
      type: ActionNames.LOGIN_USER,
      credentials
    };
  },

  /**
   * @param {ICredentials} credentials
   * @return {IRegisterUserAction}
   */
  registerUser(credentials) {
    return {
      type: ActionNames.REGISTER_USER,
      credentials
    };
  },

  /**
   * @return {ILogoutUserAction}
   */
  logoutUser() {
    return {
      type: ActionNames.LOGOUT_USER
    };
  },

  /**
   * @param {IQueryParams} params
   * @return {IFetchArticlesAction}
   */
  fetchArticles(params) {
    return {
      type: ActionNames.FETCH_ARTICLES,
      params
    };
  },

  /**
   * @param {number | string} id
   * @return {IFetchArticleAction}
   */
  fetchArticle(id) {
    return {
      type: ActionNames.FETCH_ARTICLE,
      id
    };
  }
};

export default actions;
