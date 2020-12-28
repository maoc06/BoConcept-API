import makeListCustomer from './list-customer';
import makeAddCustomer from './add-customer';
import makeUpdateCustomer from './update-customer';
import makeRemoveCustomer from './remove-customer';

import { customerDb } from '../../data-access';
import mail from '../../mails';

const { sendWelcomeMail } = mail;

const listCustomer = makeListCustomer({ customerDb });
const addCustomer = makeAddCustomer({ customerDb, sendWelcomeMail });
const updateCustomer = makeUpdateCustomer({ customerDb });
const removeCustomer = makeRemoveCustomer({ customerDb });

export default {
  listCustomer,
  addCustomer,
  updateCustomer,
  removeCustomer,
};
