import { addressUseCases } from '../../use-cases';

import makeGetAddress from './get-address';
import makeGetAddressByCustomer from './get-address-by-customer';
import makePostAddress from './post-address';
import makePutAddress from './put-address';
import makeDeleteAddress from './delete-address';

const {
  listAddress,
  listAddressByCustomer,
  addAddress,
  updateAddress,
  removeAddress,
} = addressUseCases;

const getAddress = makeGetAddress({ listAddress });
const getAddresByCustomer = makeGetAddressByCustomer({ listAddressByCustomer });
const postAddress = makePostAddress({ addAddress });
const putAddress = makePutAddress({ updateAddress });
const deleteAddress = makeDeleteAddress({ removeAddress });

export default {
  getAddress,
  getAddresByCustomer,
  postAddress,
  putAddress,
  deleteAddress,
};
