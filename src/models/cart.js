/* eslint-disable camelcase */
/* eslint-disable no-empty-pattern */
export default function buildMakeCart({}) {
  return function makeCart({
    car_id,
    email,
    pay_id,
    quantity,
    enable = 1,
  } = {}) {
    if (!email) {
      throw new Error('The cart must have have a email (customer owner)');
    }
    if (!enable) {
      throw new Error('The cart must have a status (enabled/disabled)');
    }
    return Object.freeze({
      getCartId: () => car_id,
      getEmail: () => email,
      getPayId: () => pay_id,
      getQuantity: () => quantity,
      getEnable: () => enable,
    });
  };
}
