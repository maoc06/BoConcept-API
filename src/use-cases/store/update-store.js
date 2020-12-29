import { makeStore } from '../../models';

export default function makeUpdateStore({ storeDb }) {
  return async function updateStore(storeInfo) {
    const store = makeStore(storeInfo);

    const existing = await storeDb.findById(store.getStoreId());

    if (!existing) {
      throw new RangeError('Store not found.');
    }

    return storeDb.update({
      store_id: store.getStoreId(),
      title: store.getTitle(),
      description: store.getDescription(),
      latitude: store.getLatitude(),
      longitude: store.getLongitude(),
      country: store.getCountry(),
      city: store.getCity(),
    });
  };
}
