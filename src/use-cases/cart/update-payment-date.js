export default function makeUpdateCartPaymentDate({ cartDb }) {
  return async function updateCartPaymentDate({ cartId }) {
    const existing = await cartDb.findById(cartId);

    if (!existing) {
      throw new RangeError('Cart not found.');
    }

    return cartDb.updatePaymentDate({
      car_id: cartId,
    });
  };
}
