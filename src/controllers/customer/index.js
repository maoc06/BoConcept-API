import { customerUseCases } from '../../use-cases';

import makeGetCustomer from './get-customer';
import makePutCustomer from './put-customer';
import makeDeleteCustomer from './delete-customer';

const { listCustomer, updateCustomer, removeCustomer } = customerUseCases;

const getCustomer = makeGetCustomer({ listCustomer });
const putCustomer = makePutCustomer({ updateCustomer });
const deleteCustomer = makeDeleteCustomer({ removeCustomer });

export default {
  getCustomer,
  putCustomer,
  deleteCustomer,
};
