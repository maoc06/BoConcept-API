import makeListPaymentMethod from './list-payment-method';
import makeAddPaymentMethod from './add-payment-method';
import makeUpdatePaymentMethod from './update-payment-method';
import makeRemovePaymentMethod from './remove-payment-method';

import { paymentMethodDb } from '../../data-access';

const listPaymentMethod = makeListPaymentMethod({ paymentMethodDb });
const addPaymentMethod = makeAddPaymentMethod({ paymentMethodDb });
const updatePaymentMethod = makeUpdatePaymentMethod({ paymentMethodDb });
const removePaymentMethod = makeRemovePaymentMethod({ paymentMethodDb });

export default {
  listPaymentMethod,
  addPaymentMethod,
  updatePaymentMethod,
  removePaymentMethod,
};
