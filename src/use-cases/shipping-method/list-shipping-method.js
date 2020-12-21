export default function makeListShippingMethod({ shippingMethodDb }) {
  return async function listShippingMethod({ shippingMethodId } = {}) {
    if (shippingMethodId) {
      const shippingMethod = await shippingMethodDb.findById(shippingMethodId);

      if (!shippingMethod) {
        throw new RangeError('Shipping method not found.');
      }
      return shippingMethod;
    }
    const shippingMethod = await shippingMethodDb.findAll();
    return shippingMethod;
  };
}
