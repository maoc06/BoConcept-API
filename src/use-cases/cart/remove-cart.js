export default function makeRemoveCart({ cartDb }) {
  return async function removeCart({ cartId } = {}) {
    if (!cartId) {
      throw new Error('You must supply a cart id');
    }

    const existing = await cartDb.findById(cartId);

    if (!existing) {
      throw new RangeError('Cart not found.');
    }

    const cart = await cartDb.deleteById(cartId);
    return cart;
  };
}
