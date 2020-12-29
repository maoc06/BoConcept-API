/* eslint-disable camelcase */
/* eslint-disable no-empty-pattern */
export default function buildMakeOrder({}) {
  return function makeOrder({
    order_number,
    car_id,
    email,
    card_number,
    pay_id,
    billing_addres_id,
    shipping_method_id,
    store_id,
    subtotal,
    shipping_cost,
    payment_date,
    enable = 2,
  } = {}) {
    if (!order_number) {
      throw new Error('The order must have have a number');
    }
    if (!car_id) {
      throw new Error('The order must have have a cart id');
    }
    if (!email) {
      throw new Error('The order must have have a email (customer owner)');
    }
    if (!card_number) {
      throw new Error('The order must have card number');
    }
    if (!billing_addres_id) {
      throw new Error('The order must have have a billing address');
    }
    if (!subtotal) {
      throw new Error('The order must have have a subtotal calc');
    }
    if (shipping_cost < 0 || shipping_cost === null) {
      throw new Error('The order must have have a shipping cost');
    }
    if (!payment_date) {
      throw new Error('The order must have a payment date');
    }
    if (!shipping_method_id) {
      throw new Error('The order must have a shipping method');
    }
    if (!store_id) {
      throw new Error('The order must have a assigned store');
    }

    return Object.freeze({
      getOrderNumber: () => order_number,
      getCartId: () => car_id,
      getEmail: () => email,
      getCardNumber: () => card_number,
      getPayId: () => pay_id,
      getBillingAddress: () => billing_addres_id,
      getShippingMethod: () => shipping_method_id,
      getSubtotal: () => subtotal,
      getShippingCost: () => shipping_cost,
      getStoreId: () => store_id,
      getPaymentDate: () => payment_date,
      getEnable: () => enable,
    });
  };
}
