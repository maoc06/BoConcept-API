/* eslint-disable no-empty-pattern */
/* eslint-disable camelcase */
export default function buildMakePaymentMethod({}) {
  return function makePaymentMethod({ pay_id, name } = {}) {
    if (!name) {
      throw new Error('Payment method must have a name');
    }
    return Object.freeze({
      getPayId: () => pay_id,
      getPayName: () => name,
    });
  };
}
