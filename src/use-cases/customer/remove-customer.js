export default function makeRemoveCustomer({ customerDb }) {
  return async function removeProduct({ email } = {}) {
    if (!email) {
      throw new Error('You must supply a customer id (email)');
    }

    const existing = await customerDb.findById(email);

    if (!existing) {
      throw new RangeError('Customer not found.');
    }

    const customer = await customerDb.deleteById(email);
    return customer;
  };
}
