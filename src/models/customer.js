/* eslint-disable no-empty-pattern */
/* eslint-disable camelcase */
export default function buildMakeCustomer({}) {
  return function makeCustomer({
    first_name,
    last_name,
    email,
    password,
    rol_id = 2,
    enable = 1,
  } = {}) {
    if (!first_name) {
      throw new Error('User must have a first name');
    }
    if (!last_name) {
      throw new Error('User must have a last name');
    }
    if (!email) {
      throw new Error('User must have a email');
    }
    if (!password) {
      throw new Error('User must have a password');
    }
    if (!enable) {
      throw new Error('The cart must have a status (enabled/disabled)');
    }
    return Object.freeze({
      getFirstName: () => first_name,
      getLastName: () => last_name,
      getEmail: () => email,
      getRol: () => rol_id,
      getPassword: () => password,
      getEnable: () => enable,
    });
  };
}
