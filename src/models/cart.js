/* eslint-disable camelcase */
/* eslint-disable no-empty-pattern */
export default function buildMakeCart({}) {
  return function makeCart({ car_id, email, pay_id, quantity } = {}) {
    if (!email) {
      throw new Error('The cart must have have a email (customer owner)');
    }
    return Object.freeze({
      getCartId: () => car_id,
      getEmail: () => email,
      getPayId: () => pay_id,
      getQuantity: () => quantity,
    });
  };
}
