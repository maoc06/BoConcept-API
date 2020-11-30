export default function makeListCart({ cartDb }) {
  return async function listCart({ cartId } = {}) {
    if (cartId) {
      const cart = await cartDb.findById(cartId);

      if (!cart) {
        throw new RangeError('Cart not found.');
      }
      return cart;
    }
    const cart = await cartDb.findAll();
    return cart;
  };
}
