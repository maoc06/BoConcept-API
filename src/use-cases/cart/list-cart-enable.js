export default function makeListCartEnable({ cartDb, customerDb }) {
  return async function listCartEnable({ email } = {}) {
    // Verificar que el email corresponde a un customer valido
    const customerExisting = await customerDb.findById(email);
    if (!customerExisting) {
      throw new Error(`Customer with email ${email} not exists`);
    }

    const cart = await cartDb.findCartCustomerByEnable(email);

    if (!cart) {
      throw new RangeError(
        `No cart(s) enabled for the customer with email: ${email}`
      );
    }
    return cart;
  };
}
