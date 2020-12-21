import { makeShippingMethod } from '../../models';

export default function makeUpdateShippingMethod({ shippingMethodDb }) {
  return async function updateShippingMethod(shippingMethodInfo) {
    const shippingMethod = makeShippingMethod(shippingMethodInfo);

    const existing = await shippingMethodDb.findById(
      shippingMethod.getShippingMethodId()
    );

    if (!existing) {
      throw new RangeError('Shipping method not found.');
    }

    return shippingMethodDb.update({
      shipping_method_id: shippingMethod.getShippingMethodId(),
      name: shippingMethod.getName(),
    });
  };
}
