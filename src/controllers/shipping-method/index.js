import { shippingMethodUseCases } from '../../use-cases';

import makeGetShippingMethod from './get-shipping-method';
import makePostShippingMethod from './post-shipping-method';
import makePutShippingMethod from './put-shipping-method';
import makeDeleteShippingMethod from './delete-shipping-method';

const {
  listShippingMethod,
  addShippingMethod,
  updateShippingMethod,
  removeShippingMethod,
} = shippingMethodUseCases;

const getShippingMethod = makeGetShippingMethod({ listShippingMethod });
const postShippingMethod = makePostShippingMethod({ addShippingMethod });
const putShippingMethod = makePutShippingMethod({ updateShippingMethod });
const deleteShippingMethod = makeDeleteShippingMethod({
  removeShippingMethod,
});

export default {
  getShippingMethod,
  postShippingMethod,
  putShippingMethod,
  deleteShippingMethod,
};
