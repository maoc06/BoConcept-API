/* eslint-disable no-empty-pattern */
/* eslint-disable camelcase */
export default function buildMakeStore({}) {
  return function makeStore({
    store_id,
    title,
    description,
    latitude,
    longitude,
    country,
    city,
  } = {}) {
    if (!title) {
      throw new Error('Store must have a title');
    }
    if (!description) {
      throw new Error('Store must have a description');
    }
    if (!latitude) {
      throw new Error('Store must have a latitiude (coordinate)');
    }
    if (!longitude) {
      throw new Error('Store must have a longitude (coordinate)');
    }
    if (!country) {
      throw new Error('Store must have a country');
    }
    if (!city) {
      throw new Error('Store must have a city');
    }

    return Object.freeze({
      getStoreId: () => store_id,
      getTitle: () => title,
      getDescription: () => description,
      getLatitude: () => latitude,
      getLongitude: () => longitude,
      getCountry: () => country,
      getCity: () => city,
    });
  };
}
