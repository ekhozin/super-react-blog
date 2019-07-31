import toString from 'lodash.tostring';

/**
 * Parse json if needed
 *
 * @param {*} data
 * @return {Object}
 */
export function parseJSON(data: any): object {
  try {
    return JSON.parse(data);
  } catch (e) {
    return {};
  }
}

/**
 * Converts value to string and trim spaces
 *
 * @param {*} value
 * @return {String}
 */
export function convertToString(value: any): string {
  return toString(value).trim();
}
