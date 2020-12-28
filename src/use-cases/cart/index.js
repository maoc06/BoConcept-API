import makeListCart from './list-cart';
import makeListCartByEmail from './list-cart-by-email';
import makeListCartEnable from './list-cart-enable';
import makeAddCart from './add-cart';
import makeUpdateCart from './update-cart';
import makeUpdateCartBillingAddress from './update-billing-address';
import makeUpdateCartShippingMethod from './update-shipping-method';
import makeUpdateCartPaymentDate from './update-payment-date';
import makeUpdateCartCreditCard from './update-credit-card';
import makeRemoveCart from './remove-cart';

import {
  cartDb,
  customerDb,
  addressDb,
  shippingMethodDb,
  creditCardDb,
} from '../../data-access';

const listCart = makeListCart({ cartDb });
const listCartByEmail = makeListCartByEmail({ cartDb, customerDb });
const listCartEnable = makeListCartEnable({ cartDb, customerDb });
const addCart = makeAddCart({ cartDb, customerDb });
const updateCart = makeUpdateCart({ cartDb });
const updateCartBillingAddress = makeUpdateCartBillingAddress({
  cartDb,
  addressDb,
});
const updateCartShippingMethod = makeUpdateCartShippingMethod({
  cartDb,
  shippingMethodDb,
});
const updateCartPaymentDate = makeUpdateCartPaymentDate({ cartDb });
const updateCartCreditCard = makeUpdateCartCreditCard({ cartDb, creditCardDb });
const removeCart = makeRemoveCart({ cartDb });

export default {
  listCart,
  listCartByEmail,
  listCartEnable,
  addCart,
  updateCart,
  updateCartBillingAddress,
  updateCartShippingMethod,
  updateCartPaymentDate,
  updateCartCreditCard,
  removeCart,
};
