import { makeShippingMethod } from '../../models';

export default function makeAddShippingMethod({ shippingMethodDb }) {
  return async function addShippingMethod(shippingMethodInfo) {
    const shippingMethod = makeShippingMethod(shippingMethodInfo);

    return shippingMethodDb.insert({
      name: shippingMethod.getName(),
    });
  };
}
