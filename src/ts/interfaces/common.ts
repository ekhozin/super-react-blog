export interface ICredentials {
  username: string;
  password: string;
}

export interface IQueryParams {
  offset?: number | string;
  limit?: number | string;
}

export interface IError {
  status?: number;
  statusText?: string;
  errorCode?: string;
}
