import {AxiosPromise} from 'axios';

import {ICredentials} from 'ts/interfaces/common';
import API_ENDPOINTS from 'constants/api-endpoints';
import request from 'helpers/request';

import {IUserResponse} from './types';

export default {
  /**
   * @param {ICredentials} credentials
   * @return {AxiosPromise.<IUserResponse>}
   */
  login(credentials: ICredentials): AxiosPromise<IUserResponse> {
    return request.post(API_ENDPOINTS.LOGIN, credentials);
  },

  /**
   * @param {ICredentials} credentials
   * @return {AxiosPromise.<IUserResponse>}
   */
  register(credentials: ICredentials): AxiosPromise<IUserResponse> {
    return request.post(API_ENDPOINTS.REGISTER, credentials);
  },

  /**
   * @return {AxiosPromise.<IUserResponse>}
   */
  fetchUser(): AxiosPromise<IUserResponse> {
    return request.get(API_ENDPOINTS.USER);
  }
};
