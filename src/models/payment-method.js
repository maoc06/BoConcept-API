/* eslint-disable no-empty-pattern */
/* eslint-disable camelcase */
export default function buildMakePaymentMethod({}) {
  return function makePaymentMethod({
    pay_id,
    name,
    image_url,
    enable = 1,
  } = {}) {
    if (!name) {
      throw new Error('Payment method must have a name');
    }
    if (!enable) {
      throw new Error('The cart must have a status (enabled/disabled)');
    }
    if (!image_url) {
      throw new Error('The cart must have a image url');
    }
    return Object.freeze({
      getPayId: () => pay_id,
      getPayName: () => name,
      getImageUrl: () => image_url,
      getEnable: () => enable,
    });
  };
}
