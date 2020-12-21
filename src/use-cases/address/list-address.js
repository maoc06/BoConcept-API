export default function makeListAddress({ addressDb }) {
  return async function listAddress({ addressId } = {}) {
    const address = await addressDb.findById(addressId);

    if (!address) {
      throw new RangeError('Address not found.');
    }
    return address;
  };
}
