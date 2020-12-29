import { makeStore } from '../../models';

export default function makeAddStore({ storeDb }) {
  return async function addStore(storeInfo) {
    const store = makeStore(storeInfo);

    return storeDb.insert({
      title: store.getTitle(),
      description: store.getDescription(),
      latitude: store.getLatitude(),
      longitude: store.getLongitude(),
      country: store.getCountry(),
      city: store.getCity(),
    });
  };
}
