export default function makeRemoveShippingMethod({ shippingMethodDb }) {
  return async function removeShippingMethod({ shippingMethodId } = {}) {
    if (!shippingMethodId) {
      throw new Error('You must supply a shipping method id');
    }

    const existing = await shippingMethodDb.findById(shippingMethodId);

    if (!existing) {
      throw new RangeError('Shipping method not found.');
    }

    const shippingMethod = await shippingMethodDb.deleteById(shippingMethodId);
    return shippingMethod;
  };
}
