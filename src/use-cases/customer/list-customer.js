export default function makeListCustomer({ customerDb }) {
  return async function listCustomer({ email } = {}) {
    const customer = await await customerDb.findById(email);
    if (!customer) {
      throw new RangeError('Customer not found');
    }
    return customer;
  };
}
