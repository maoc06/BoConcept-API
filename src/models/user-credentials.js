/* eslint-disable no-empty-pattern */
export default function buildMakeUserCredentials({}) {
  return function makeUserCredentials({ email, password } = {}) {
    if (!email) {
      throw new Error('User mush have a email');
    }
    if (!password) {
      throw new Error('User mush have a password');
    }
    return Object.freeze({
      getEmail: () => email,
      getPassword: () => password,
    });
  };
}
