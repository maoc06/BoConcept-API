import { makeAddress } from '../../models';

export default function makeAddAddress({ addressDb }) {
  return async function addAddress(addressInfo) {
    const address = makeAddress(addressInfo);

    return addressDb.insert({
      name: address.getName(),
      billing_address: address.getBillingAddress(),
      city: address.getCity(),
      zip_code: address.getZipCode(),
      customer_owner: address.getCustomerOwner(),
      is_default: address.getIsDefault(),
    });
  };
}
