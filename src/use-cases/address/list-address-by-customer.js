export default function makeListAddressByCustomer({ addressDb }) {
  return async function listAddressByCustomer({ email } = {}) {
    const address = await addressDb.findByCustomer(email);

    if (!address) {
      throw new RangeError('Address by customer not found.');
    }
    return address;
  };
}
