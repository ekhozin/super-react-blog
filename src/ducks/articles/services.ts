import {AxiosPromise} from 'axios';

import {IQueryParams} from 'ts/interfaces/common';
import API_ENDPOINTS from 'constants/api-endpoints';
import request from 'helpers/request';

import {IArticlesData, IArticleData} from './types';

export default {
  /**
   * Requests collection of articles with query parameters.
   * @param {IQueryParams} params
   * @return {AxiosPromise<IArticlesData>}
   */
  fetchArticles(params: IQueryParams = {}): AxiosPromise<IArticlesData> {
    return request.get(API_ENDPOINTS.ARTICLES, {params});
  },

  /**
   * Requests sinle article by id.
   * @param {number | string} id
   * @return {AxiosPromise<IArticleData>}
   */
  fetchArticle(id: number | string): AxiosPromise<IArticleData> {
    return request.get(`${API_ENDPOINTS.ARTICLES}/${id}`);
  }
};
