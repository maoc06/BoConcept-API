export default function makeRemoveStore({ storeDb }) {
  return async function removeStore({ storeId } = {}) {
    if (!storeId) {
      throw new Error('You must supply a store id');
    }

    const existing = await storeDb.findById(storeId);
    if (!existing) {
      throw new RangeError('Store not found.');
    }
    const store = await storeDb.deleteById(storeId);
    return store;
  };
}
