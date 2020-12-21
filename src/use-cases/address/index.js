import makeListAddress from './list-address';
import makeListAddressByCustomer from './list-address-by-customer';
import makeAddAddress from './add-address';
import makeUpdateAddress from './update-address';
import makeRemoveAddress from './remove-address';

import { addressDb } from '../../data-access';

const listAddress = makeListAddress({ addressDb });
const listAddressByCustomer = makeListAddressByCustomer({ addressDb });
const addAddress = makeAddAddress({ addressDb });
const updateAddress = makeUpdateAddress({ addressDb });
const removeAddress = makeRemoveAddress({ addressDb });

export default {
  listAddress,
  listAddressByCustomer,
  addAddress,
  updateAddress,
  removeAddress,
};
