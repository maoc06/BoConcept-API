import { makeCart } from '../../models';

export default function makeUpdateCart({ cartDb, paymentMethodDb }) {
  return async function updateCart(cartInfo) {
    const cart = makeCart(cartInfo);

    const existing = await cartDb.findById(cart.getCartId());

    if (!existing) {
      throw new RangeError('Cart not found.');
    }

    if (cart.getPayId() != null) {
      const paymentExisting = await paymentMethodDb.findById(cart.getPayId());
      if (!paymentExisting) {
        throw new Error('Payment method not existing');
      }
    }

    return cartDb.update({
      car_id: cart.getCartId(),
      email: cart.getEmail(),
      pay_id: cart.getPayId(),
      quantity: cart.getQuantity(),
      enable: cart.getEnable(),
    });
  };
}
