import { paymentMethodUseCases } from '../../use-cases';

import makeGetPaymentMethod from './get-payment-method';
import makePostPaymentMethod from './post-payment-method';
import makePutPaymentMethod from './put-payment-method';
import makeDeletePaymentMethod from './delete-payment-method';

const {
  listPaymentMethod,
  addPaymentMethod,
  updatePaymentMethod,
  removePaymentMethod,
} = paymentMethodUseCases;

const getPaymentMethod = makeGetPaymentMethod({ listPaymentMethod });
const postPaymentMethod = makePostPaymentMethod({ addPaymentMethod });
const putPaymentMethod = makePutPaymentMethod({ updatePaymentMethod });
const deletePaymentMethod = makeDeletePaymentMethod({ removePaymentMethod });

export default {
  getPaymentMethod,
  postPaymentMethod,
  putPaymentMethod,
  deletePaymentMethod,
};
