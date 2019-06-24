import userResponse from 'tests/__mocks__/responsesMocks/user';

function fetchUser() {
  return new Promise((resolve, reject) => {
    resolve(userResponse);
  });
}
