export default function makeUpdateCartShippingMethod({
  cartDb,
  shippingMethodDb,
}) {
  return async function updateCartShippingMethod({ cartId, shippingMethodId }) {
    let existing = await cartDb.findById(cartId);

    if (!existing) {
      throw new RangeError('Cart not found.');
    }

    existing = await shippingMethodDb.findById(shippingMethodId);

    if (!existing) {
      throw new RangeError('Shipping method not found.');
    }

    return cartDb.updateShippingMethod({
      car_id: cartId,
      shipping_method_id: shippingMethodId,
    });
  };
}
