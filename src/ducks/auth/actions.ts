import {IError} from 'ts/interfaces/common';
import {
  LOGIN_USER_REQUEST,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_ERROR,
  REGISTER_USER_REQUEST,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_ERROR,
  LOGOUT_USER,
  FETCH_USER_REQUEST,
  FETCH_USER_SUCCESS,
  FETCH_USER_ERROR,
  ILogoutUserAction,
  ILoginUserRequestAction,
  ILoginUserSuccessAction,
  ILoginUserErrorAction,
  IRegisterUserRequestAction,
  IRegisterUserSuccessAction,
  IRegisterUserErrorAction,
  IFetchUserRequestAction,
  IFetchUserSuccessAction,
  IFetchUserErrorAction,
  IUser
} from './types';

export default {
  loginUserRequest(): ILoginUserRequestAction {
    return {
      type: LOGIN_USER_REQUEST
    };
  },

  loginUserSuccess(user: IUser): ILoginUserSuccessAction {
    return {
      type: LOGIN_USER_SUCCESS,
      user
    };
  },

  loginUserError(error: IError): ILoginUserErrorAction {
    return {
      type: LOGIN_USER_ERROR,
      error
    };
  },

  registerUserRequest(): IRegisterUserRequestAction {
    return {
      type: REGISTER_USER_REQUEST
    };
  },

  registerUserSuccess(user: IUser): IRegisterUserSuccessAction {
    return {
      type: REGISTER_USER_SUCCESS,
      user
    };
  },

  registerUserError(error: IError): IRegisterUserErrorAction {
    return {
      type: REGISTER_USER_ERROR,
      error
    };
  },

  logoutUser(): ILogoutUserAction {
    return {
      type: LOGOUT_USER
    };
  },

  fetchUserRequest(): IFetchUserRequestAction {
    return {
      type: FETCH_USER_REQUEST
    };
  },

  fetchUserSuccess(user: IUser): IFetchUserSuccessAction {
    return {
      type: FETCH_USER_SUCCESS,
      user
    };
  },

  fetchUserError(error: IError): IFetchUserErrorAction {
    return {
      type: FETCH_USER_ERROR,
      error
    };
  }
};
