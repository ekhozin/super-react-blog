import {IError} from 'ts/interfaces/common';

const LOGIN_USER_REQUEST = '@@auth/LOGIN_USER_REQUEST';
const LOGIN_USER_SUCCESS = '@@auth/LOGIN_USER_SUCCESS';
const LOGIN_USER_ERROR = '@@auth/LOGIN_USER_ERROR';

const REGISTER_USER_REQUEST = '@@auth/REGISTER_USER_REQUEST';
const REGISTER_USER_SUCCESS = '@@auth/REGISTER_USER_SUCCESS';
const REGISTER_USER_ERROR = '@@auth/REGISTER_USER_ERROR';

const LOGOUT_USER = '@@auth/LOGOUT_USER';

const FETCH_USER_REQUEST = '@@auth/FETCH_USER_REQUEST';
const FETCH_USER_SUCCESS = '@@auth/FETCH_USER_SUCCESS';
const FETCH_USER_ERROR = '@@auth/FETCH_USER_ERROR';

export interface IUser {
  id: number;
  username: string;
  createdAt: string;
  updatedAt: string;
}

export interface IAuthState {
  isAuthenticated: boolean;
  error: IError | null;
  user: IUser | {};
}

export interface ILoginUserRequestAction {
  type: typeof LOGIN_USER_REQUEST;
}

export interface ILoginUserSuccessAction {
  type: typeof LOGIN_USER_SUCCESS;
  user: IUser;
}

export interface ILoginUserErrorAction {
  type: typeof LOGIN_USER_ERROR;
  error: IError;
}

export interface IRegisterUserRequestAction {
  type: typeof REGISTER_USER_REQUEST;
}

export interface IRegisterUserSuccessAction {
  type: typeof REGISTER_USER_SUCCESS;
  user: IUser;
}

export interface IRegisterUserErrorAction {
  type: typeof REGISTER_USER_ERROR;
  error: IError;
}

export interface IFetchUserRequestAction {
  type: typeof FETCH_USER_REQUEST;
}

export interface IFetchUserSuccessAction {
  type: typeof FETCH_USER_SUCCESS;
  user: IUser;
}

export interface IFetchUserErrorAction {
  type: typeof FETCH_USER_ERROR;
  error: IError;
}

export interface ILogoutUserAction {
  type: typeof LOGOUT_USER;
}

export type LoginActionTypes =
  ILoginUserRequestAction |
  ILoginUserSuccessAction |
  ILoginUserErrorAction;

export type RegisterActionTypes =
  IRegisterUserRequestAction |
  IRegisterUserSuccessAction |
  IRegisterUserErrorAction;

export type FetchUserActionTypes =
  IFetchUserSuccessAction |
  IFetchUserRequestAction |
  IFetchUserErrorAction;

export type SuccessActionTypes = ILoginUserSuccessAction | IRegisterUserSuccessAction | IFetchUserSuccessAction;
export type ErrorActionTypes = ILoginUserErrorAction | IRegisterUserErrorAction | IFetchUserErrorAction;
export type AuthActionTypes = LoginActionTypes | RegisterActionTypes | ILogoutUserAction | FetchUserActionTypes;

export {
  LOGIN_USER_REQUEST,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_ERROR,
  REGISTER_USER_REQUEST,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_ERROR,
  LOGOUT_USER,
  FETCH_USER_REQUEST,
  FETCH_USER_SUCCESS,
  FETCH_USER_ERROR
};

export default {
  LOGIN_USER_REQUEST,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_ERROR,
  REGISTER_USER_REQUEST,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_ERROR,
  LOGOUT_USER,
  FETCH_USER_REQUEST,
  FETCH_USER_SUCCESS,
  FETCH_USER_ERROR
};
