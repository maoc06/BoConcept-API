export default function makeRemoveAddress({ addressDb }) {
  return async function removeAddress({ addressId } = {}) {
    if (!addressId) {
      throw new Error('You must supply a address id');
    }

    const existing = await addressDb.findById(addressId);

    if (!existing) {
      throw new RangeError('Address not found.');
    }

    const address = await addressDb.deleteById(addressId);
    return address;
  };
}
