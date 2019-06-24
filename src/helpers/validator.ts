import {convertToString} from 'helpers/helpers';

/**
 * Checks if the value is empty string or not.
 *
 * @param {String} message
 * @return {function}
 */
export function required(message) {
  return function(value = '') {
    return convertToString(value).length ? null : message;
  };
}

/**
 * Checks if the value is number or not.
 *
 * @param {String} message
 * @return {function}
 */
export function mustBeNumber(message) {
  return function (value) {
    return isNaN(value) ? message : undefined;
  };
}

/**
 * Compose all passed validators.
 * Loops over them and pass a value.
 *
 * @param {String} message
 * @return {function}
 */

export function composeValidators(...validators) {
  return function(value) {
    return validators.reduce((error, validator) => {
      return error || validator(value);
    }, undefined);
  };
}
