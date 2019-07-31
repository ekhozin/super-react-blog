import axios from 'axios';
import get from 'lodash.get';
import humps from 'humps';

import {BASE_URL, TOKEN_ENDPOINTS} from 'config';
import DataSource from 'helpers/data-source';
import {parseJSON} from 'helpers/helpers';


interface IConfig {
  headers: {
    common: {
      Authorization: string|null;
    };
  };
}

interface IResponse {
  config: {
    url: string;
  };
  data: {
    data: {
      token: string;
    };
  };
}

const request = axios.create({
  baseURL: BASE_URL
});

/**
 * Request interceptor for setting JWT to request header
 */
request.interceptors.request.use(setJWTHeader);

/**
 * Request interceptor for format data
 */
request.interceptors.request.use(requestMapper);

/**
 * Response interceptor for setting JWT to LocalStorage
 */
request.interceptors.response.use(setJWTLocalStorage);

/**
 * Response interceptors for send and check response
 */
request.interceptors.response.use(responseMapper, errorHandle);

/**
 * Set jwt token in the authorization header under the 'Authorization' key
 *
 * @param {AxiosRequestConfig} config
 * @return {AxiosRequestConfig}
 */
function setJWTHeader(config: IConfig): IConfig {
  config.headers.common['Authorization'] = DataSource.getToken();

  return config;
}

/**
 * Save JWT to the LocalStorage
 *
 * @param {AxiosResponse} response
 * @return {AxiosResponse}
 */
function setJWTLocalStorage(response: IResponse): IResponse {
  switch (true) {
    case new RegExp(`/${TOKEN_ENDPOINTS.REGISTER}$`).test(response.config.url):
    case new RegExp(`/${TOKEN_ENDPOINTS.LOGIN}$`).test(response.config.url):
      const token = get(response, 'data.data.token');

      if (token) {
        DataSource.setToken(token);
      }

      return response;
    default:
      return response;
  }
}

/**
 * Separates camelCased object keys with an underscore
 *
 * @param {AxiosRequestConfig} config - server's request
 * @return {AxiosRequestConfig}
 */
function requestMapper(config) {
  if (config.data && !(config.data instanceof FormData)) {
    const decamelizedData = humps.decamelizeKeys(config.data);
    delete config.data;
    config.data = decamelizedData;
  }

  return config;
}

/**
 * Converts object keys to camelCase
 *
 * @param {AxiosResponse} response - server's response
 * @return {Promise.<Object>}
 */
function responseMapper(response) {
  return Promise.resolve(humps.camelizeKeys(response.data.data));
}

/**
 * Check response for errors
 *
 * @param {AxiosResponse} data - server's response
 * @return {Promise.<Object>}
 */
function errorHandle(data) {
  const {response} = data;
  const newError = {};
  const errorCode = get(response, 'data.errors[0]');

  newError.status = response.status;
  newError.statusText = response.statusText;
  newError.errorCode = parseJSON(errorCode);

  return Promise.reject(newError);
}

export default request;
