import * as validator from 'helpers/validator';
const {required} = validator;

describe('run test', () => {
  const message = 'required';
  const requiredValidator = required(message);

  it('should return null', () => {
    const result = requiredValidator('test');

    expect(result).toBeNull();
  });
});
