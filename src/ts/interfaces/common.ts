interface ICredentials {
  username: string;
  password: string;
}

interface IQueryParams {
  offset?: number | string;
  limit?: number | string;
}

export {
  ICredentials,
  IQueryParams
};
