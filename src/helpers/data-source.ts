import {AUTH_TOKEN_KEY} from 'config';

interface IKeys {
  token: string;
}

/** Class representing a localStorage data source */
class DataSource {
  /**
   * Gets value from localStorage by key
   *
   * @param {string} key
   * @return {string|null}
   */
  public static getItem = (key: string): string|null => window.localStorage.getItem(key);

  /**
   * Sets value to localStorage under key
   *
   * @param {*} key
   * @param {string} value
   * @return {undefined}
   */
  public static setItem = (key: string, value: any): void => {
    window.localStorage.setItem(key, value);
  };

  /**
   * Removes value to localStorage under key
   *
   * @param {string} key
   * @return {undefined}
   */
  public static removeItem = (key: string): void => {
    window.localStorage.removeItem(key);
  };

  private keys: IKeys;

  public constructor() {
    this.keys = {
      token: AUTH_TOKEN_KEY
    };
  }

  /**
   * Gets token from localStorage
   *
   * @return {string}
   */
  public getToken = (): string|null => DataSource.getItem(this.keys.token);

  /**
   * Sets token to localStorage
   *
   * @return {undefined}
   */
  public setToken = (value: any): void => {
    DataSource.setItem(this.keys.token, value);
  };

  /**
   * Removes token from localStorage
   *
   * @return {undefined}
   */
  public removeToken = (): void => {
    DataSource.removeItem(this.keys.token);
  };

  public loadState = (): object|undefined => {
    try {
      const serializedState = DataSource.getItem('state');

      if (serializedState === null) {
        return undefined;
      }

      return JSON.parse(serializedState);
    } catch (err) {
      return undefined;
    }
  };

  public saveState = (state: object): void => {
    try {
      const serializedState = JSON.stringify(state);
      DataSource.setItem('state', serializedState);
    } catch (err) {
      /* eslint-disable-next-line */
      console.error('save state error ', err);
    }
  }
}

export default new DataSource();
