import axios, {AxiosRequestConfig, AxiosResponse, AxiosError} from 'axios';
import get from 'lodash.get';
import humps from 'humps';

import {BASE_URL, TOKEN_ENDPOINTS} from 'config';
import DataSource from 'helpers/data-source';
import {parseJSON} from 'helpers/helpers';

type IError = {
  status?: number;
  statusText?: string;
  errorCode?: string;
};

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
function setJWTHeader(config: AxiosRequestConfig): AxiosRequestConfig {
  config.headers.common['Authorization'] = DataSource.getToken();

  return config;
}

/**
 * Save JWT to the LocalStorage
 *
 * @param {AxiosResponse} response
 * @return {AxiosResponse}
 */
function setJWTLocalStorage(response: AxiosResponse): AxiosResponse {
  const url = get(response, 'config.url');

  switch (true) {
    case new RegExp(`/${TOKEN_ENDPOINTS.REGISTER}$`).test(url):
    case new RegExp(`/${TOKEN_ENDPOINTS.LOGIN}$`).test(url):
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
 * @param {c} config - server's request
 * @return {AxiosRequestConfig}
 */
function requestMapper(config: AxiosRequestConfig): AxiosRequestConfig {
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
function responseMapper(response: AxiosResponse): Promise<any> {
  return Promise.resolve(humps.camelizeKeys(response.data.data));
}

/**
 * Check response for errors
 *
 * @param {AxiosResponse} data - server's response
 * @return {Promise.<Object>}
 */
function errorHandle(error: AxiosError): Promise<IError> {
  const {response} = error;
  const errorCode = get(response, 'data.errors[0]');
  const status = get(response, 'status');
  const statusText = get(response, 'statusText');

  const newError: IError = {
    status,
    statusText,
    errorCode: parseJSON(errorCode)
  };

  return Promise.reject(newError);
}

export default request;
