import toString from 'lodash.tostring';

/**
 * Parse json if needed
 *
 * @param {*} data
 * @return {Object|*}
 */

export function parseJSON(data) {
  try {
    return JSON.parse(data);
  } catch (e) {
    return data;
  }
}

/**
 * Converts value to string and trim spaces
 *
 * @param {*} value
 * @return {String}
 */
export function convertToString(value) {
  return toString(value).trim();
}
