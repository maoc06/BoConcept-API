/* eslint-disable no-empty-pattern */
/* eslint-disable camelcase */
export default function buildMakeAddress({}) {
  return function makeAddress({
    name,
    address_id,
    billing_address,
    country,
    city,
    zip_code,
    phone,
    customer_owner,
    is_default,
  } = {}) {
    if (!name) {
      throw new Error('Address must have a name');
    }
    if (!billing_address) {
      throw new Error('Address must have a billing address id');
    }
    if (!country) {
      throw new Error('Address must have a country');
    }
    if (!city) {
      throw new Error('Address must have a city');
    }
    if (!zip_code) {
      throw new Error('Address must have a zip code');
    }
    if (!phone) {
      throw new Error('Address must have a phone');
    }
    if (!customer_owner) {
      throw new Error('Address must have a customer owner(email)');
    }
    if (!is_default) {
      throw new Error('Address must have a default state(Y/N)');
    }

    return Object.freeze({
      getName: () => name,
      getAddressId: () => address_id,
      getBillingAddress: () => billing_address,
      getCountry: () => country,
      getCity: () => city,
      getZipCode: () => zip_code,
      getPhone: () => phone,
      getCustomerOwner: () => customer_owner,
      getIsDefault: () => is_default,
    });
  };
}
