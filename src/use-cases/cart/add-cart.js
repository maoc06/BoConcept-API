import { makeCart } from '../../models';

export default function makeAddCart({ cartDb, customerDb }) {
  return async function addCart(cartInfo) {
    const cart = makeCart(cartInfo);

    const customerExisting = await customerDb.findById(cart.getEmail());
    if (!customerExisting) {
      throw new Error(`Customer with email ${cart.getEmail()} not existing`);
    }

    return cartDb.insert({
      email: cart.getEmail(),
      shipping_method_id: cart.getShippingMethod(),
      enable: cart.getEnable(),
    });
  };
}
