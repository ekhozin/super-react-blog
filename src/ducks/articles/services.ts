import {AxiosPromise} from 'axios';

import {IQueryParams} from 'ts/interfaces/common';
import API_ENDPOINTS from 'constants/api-endpoints';
import request from 'helpers/request';

import {IArticlesData} from './types';

export default {
  fetchArticles(params: IQueryParams = {}): AxiosPromise<IArticlesData> {
    return request.get(API_ENDPOINTS.ARTICLES, {params});
  }
};
