/* eslint-disable no-empty-pattern */
/* eslint-disable camelcase */
export default function buildMakePaymentMethod({}) {
  return function makePaymentMethod({ pay_id, name, enable = 1 } = {}) {
    if (!name) {
      throw new Error('Payment method must have a name');
    }
    if (!enable) {
      throw new Error('The cart must have a status (enabled/disabled)');
    }
    return Object.freeze({
      getPayId: () => pay_id,
      getPayName: () => name,
      getEnable: () => enable,
    });
  };
}
