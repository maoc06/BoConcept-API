import makeListShippingMethod from './list-shipping-method';
import makeAddShippingMethod from './add-shipping-method';
import makeUpdateShippingMethod from './update-shipping-method';
import makeRemoveShippingMethod from './remove-shipping-method';

import { shippingMethodDb } from '../../data-access';

const listShippingMethod = makeListShippingMethod({ shippingMethodDb });
const addShippingMethod = makeAddShippingMethod({ shippingMethodDb });
const updateShippingMethod = makeUpdateShippingMethod({ shippingMethodDb });
const removeShippingMethod = makeRemoveShippingMethod({ shippingMethodDb });

export default {
  listShippingMethod,
  addShippingMethod,
  updateShippingMethod,
  removeShippingMethod,
};
