import makeListCustomer from './list-customer';
import makeAddCustomer from './add-customer';
import makeUpdateCustomer from './update-customer';
import makeRemoveCustomer from './remove-customer';

import { customerDb } from '../../data-access';

const listCustomer = makeListCustomer({ customerDb });
const addCustomer = makeAddCustomer({ customerDb });
const updateCustomer = makeUpdateCustomer({ customerDb });
const removeCustomer = makeRemoveCustomer({ customerDb });

export default {
  listCustomer,
  addCustomer,
  updateCustomer,
  removeCustomer,
};
