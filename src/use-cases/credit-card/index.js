import makeListCreditCard from './list-credit-card';
import makeListCreditCardByCustomer from './list-credit-card-by-customer';
import makeAddCreditCard from './add-credit-card';
import makeUpdateCreditCard from './update-credit-card';
import makeRemoveCreditCard from './remove-credit-card';

import { customerDb, creditCardDb } from '../../data-access';

const listCreditCard = makeListCreditCard({ creditCardDb });
const listCreditCardByCustomer = makeListCreditCardByCustomer({
  creditCardDb,
  customerDb,
});
const addCreditCard = makeAddCreditCard({ creditCardDb });
const updateCreditCard = makeUpdateCreditCard({ creditCardDb });
const removeCreditCard = makeRemoveCreditCard({ creditCardDb });

export default {
  listCreditCard,
  listCreditCardByCustomer,
  addCreditCard,
  updateCreditCard,
  removeCreditCard,
};
