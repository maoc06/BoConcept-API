/* eslint-disable no-empty-pattern */
/* eslint-disable camelcase */
export default function buildMakeShippingMethod({}) {
  return function makeShippingMethod({ shipping_method_id, name } = {}) {
    if (!name) {
      throw new Error('Shipping method must have a shipping method id');
    }

    return Object.freeze({
      getShippingMethodId: () => shipping_method_id,
      getName: () => name,
    });
  };
}
