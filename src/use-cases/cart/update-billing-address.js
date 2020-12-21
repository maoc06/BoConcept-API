export default function makeUpdateCartBillingAddress({ cartDb, addressDb }) {
  return async function updateCartBillingAddress({ cartId, addressId }) {
    let existing = await cartDb.findById(cartId);

    if (!existing) {
      throw new RangeError('Cart not found.');
    }

    existing = await addressDb.findById(addressId);

    if (!existing) {
      throw new RangeError('Address not found.');
    }

    return cartDb.updateBillingAddress({
      car_id: cartId,
      billing_address_id: addressId,
    });
  };
}
