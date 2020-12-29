export default function makeListStore({ storeDb }) {
  return async function listStore() {
    const store = await storeDb.findAll();
    return store;
  };
}
