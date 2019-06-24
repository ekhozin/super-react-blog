import API_ENDPOINTS from 'constants/api-endpoints';
import request from 'helpers/request';

/**
 * @typedef {Object} UserCredentials
 * @property {string} username
 * @property {string} password
 */

export default {
  /**
   * @param {UserCredentials} credentials
   * @return {Promise.<Object>}
   */
  login(credentials) {
    return request.post(API_ENDPOINTS.LOGIN, credentials);
  },

  /**
   * @param {UserCredentials} credentials
   * @return {Promise.<Object>}
   */
  register(credentials) {
    return request.post(API_ENDPOINTS.REGISTER, credentials);
  },

  /**
   * @return {Promise.<Object>}
   */
  fetchUser() {
    return request.get(API_ENDPOINTS.USER);
  }
};
