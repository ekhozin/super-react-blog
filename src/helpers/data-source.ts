import {AUTH_TOKEN_KEY} from 'config';
import Immutable from 'immutable';

/** Class representing a localStorage data source */
class DataSource {
  /**
   * Gets value from localStorage by key
   *
   * @param {string} key
   * @return {string}
   */
  static getItem = (key) => window.localStorage.getItem(key);

  /**
   * Sets value to localStorage under key
   *
   * @param {*} key
   * @param {string} value
   * @return {undefined}
   */
  static setItem = (key, value) => {
    window.localStorage.setItem(key, value);
  };

  /**
   * Removes value to localStorage under key
   *
   * @param {string} key
   * @return {undefined}
   */
  static removeItem = (key) => {
    window.localStorage.removeItem(key);
  };

  constructor() {
    this.keys = {
      token: AUTH_TOKEN_KEY
    };
  }

  /**
   * Gets token from localStorage
   *
   * @return {string}
   */
  getToken = () => DataSource.getItem(this.keys.token);

  /**
   * Sets token to localStorage
   *
   * @return {undefined}
   */
  setToken = (value) => {
    DataSource.setItem(this.keys.token, value);
  };

  /**
   * Removes token from localStorage
   *
   * @return {undefined}
   */
  removeToken = () => {
    DataSource.removeItem(this.keys.token);
  };

  loadState = () => {
    try {
      const serializedState = DataSource.getItem('state');

      if (serializedState === null) {
        return undefined;
      }

      const parsed = JSON.parse(serializedState);

      return Immutable.fromJS(parsed);
    } catch (err) {
      return undefined;
    }
  };

  saveState = (state) => {
    try {
      const serializedState = JSON.stringify(state);
      DataSource.setItem('state', serializedState);
    } catch (err) {
      console.error('save state error ', err);
    }
  }
}

export default new DataSource();
