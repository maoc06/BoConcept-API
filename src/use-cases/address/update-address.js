import { makeAddress } from '../../models';

export default function makeUpdateAddress({ addressDb }) {
  return async function updateAddress(addressInfo) {
    const address = makeAddress(addressInfo);

    const existing = await addressDb.findById(address.getAddressId());

    if (!existing) {
      throw new RangeError('Address not found.');
    }

    return addressDb.update({
      address_id: address.getAddressId(),
      name: address.getName(),
      billing_address: address.getBillingAddress(),
      city: address.getCity(),
      zip_code: address.getZipCode(),
      customer_owner: address.getCustomerOwner(),
      is_default: address.getIsDefault(),
    });
  };
}
