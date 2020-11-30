export default function makeListCartByEmail({ cartDb, customerDb }) {
  return async function listCartByEmail({ email } = {}) {
    // Verificar que el email corresponde a un customer valido
    const customerExisting = await customerDb.findById(email);
    if (!customerExisting) {
      throw new Error(`Customer with email ${email} not exists`);
    }

    const cart = await cartDb.findCartByCustomerEmail(email);

    if (!cart) {
      throw new RangeError('Cart not found.');
    }
    return cart;
  };
}
