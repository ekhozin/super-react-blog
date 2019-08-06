import toString from 'lodash.tostring';

/**
 * Parse json if needed
 *
 * @param {string} data
 * @return {object}
 */
export function parseJSON(data: string): object {
  try {
    return JSON.parse(data);
  } catch (e) {
    return {};
  }
}

/**
 * Converts value to string and trims spaces
 *
 * @param {*} value
 * @return {string}
 */
export function convertToString(value: any): string {
  return toString(value).trim();
}
