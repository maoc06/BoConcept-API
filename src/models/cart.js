/* eslint-disable camelcase */
/* eslint-disable no-empty-pattern */
export default function buildMakeCart({}) {
  return function makeCart({
    car_id,
    email,
    card_number,
    pay_id,
    billing_addres_id,
    shipping_method_id = 1,
    payment_date,
    enable = 1,
  } = {}) {
    if (!email) {
      throw new Error('The cart must have have a email (customer owner)');
    }
    if (!enable) {
      throw new Error('The cart must have a status (enabled/disabled)');
    }
    if (!shipping_method_id) {
      throw new Error('The cart must have a shipping method');
    }
    return Object.freeze({
      getCartId: () => car_id,
      getEmail: () => email,
      getCardNumber: () => card_number,
      getPayId: () => pay_id,
      getBillingAddress: () => billing_addres_id,
      getShippingMethod: () => shipping_method_id,
      getPaymentDate: () => payment_date,
      getEnable: () => enable,
    });
  };
}
