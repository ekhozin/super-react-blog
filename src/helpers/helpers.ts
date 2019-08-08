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

/**
 * Trims chars from start of string. Returns trimmed string.
 * @param {string} str Trimmed string.
 * @param {string} trimChar Chars to trim.
 * @return {string}
 */
export function trimStart(str: string, trimChar: string): string {
  return str.charAt(0) === trimChar ? str.slice(1) : str;
}

/**
 * Checks if passed value is null or undefined.
 * @param {any} value Checkable value.
 * @return {boolean}
 */
export function isNullOrUndefined(value: any): boolean {
  return value === null || value === undefined;
}
