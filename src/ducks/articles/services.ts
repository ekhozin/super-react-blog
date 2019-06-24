import API_ENDPOINTS from 'constants/api-endpoints';
import request from 'helpers/request';

export default {
  fetchArticles(params = {}) {
    return request.get(API_ENDPOINTS.ARTICLES, {params});
  }
};
