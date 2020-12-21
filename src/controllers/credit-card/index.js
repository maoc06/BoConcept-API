import { creditCardUseCases } from '../../use-cases';

import makeGetCreditCard from './get-credit-card';
import makeGetCreditCardByCustomer from './get-credit-card-by-customer';
import makePostCreditCard from './post-credit-card';
import makePutCreditCard from './put-credit-card';
import makeDeleteCreditCard from './delete-credit-card';

const {
  listCreditCard,
  listCreditCardByCustomer,
  addCreditCard,
  updateCreditCard,
  removeCreditCard,
} = creditCardUseCases;

const getCreditCard = makeGetCreditCard({ listCreditCard });
const getCreditCardByCustomer = makeGetCreditCardByCustomer({
  listCreditCardByCustomer,
});
const postCreditCard = makePostCreditCard({ addCreditCard });
const putCreditCard = makePutCreditCard({ updateCreditCard });
const deleteCreditCard = makeDeleteCreditCard({ removeCreditCard });

export default {
  getCreditCard,
  getCreditCardByCustomer,
  postCreditCard,
  putCreditCard,
  deleteCreditCard,
};
