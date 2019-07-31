import {convertToString} from 'helpers/helpers';

type validatorResultType = string|null|undefined;
type validatorFunctionType = (value: any) => validatorResultType;

/**
 * Checks if the value is empty string or not.
 *
 * @param {String} message
 * @return {function}
 */
export function required(message: string): validatorFunctionType {
  return function(value = ''): validatorResultType {
    return convertToString(value).length ? null : message;
  };
}

/**
 * Checks if the value is number or not.
 *
 * @param {String} message
 * @return {function}
 */
export function mustBeNumber(message: string): validatorFunctionType {
  return function (value: any): validatorResultType {
    return isNaN(value) ? message : null;
  };
}

/**
 * Compose all passed validators.
 * Loops over them and pass a value.
 *
 * @param {String} message
 * @return {function}
 */

export function composeValidators(...validators: validatorFunctionType[]): validatorFunctionType {
  return function(value: any): validatorResultType {
    return validators.reduce(
      (error: validatorResultType,validator: validatorFunctionType): validatorResultType => {
        return error || validator(value);
      },
      undefined
    );
  };
}
