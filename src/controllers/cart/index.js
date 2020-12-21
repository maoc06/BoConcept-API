import { cartUseCases } from '../../use-cases';

import makeGetCart from './get-cart';
import makeGetCartByEmail from './get-cart-by-email';
import makeGetCartEnable from './get-cart-enable';
import makePostCart from './post-cart';
import makePutCart from './put-cart';
import makePatchCartBillingAddress from './patch-cart-billing-address';
import makePatchCartShippingMethod from './patch-cart-shipping-method';
import makePatchCartPaymentDate from './patch-cart-payment-date';
import makePatchCartCreditCard from './patch-cart-credit-card';
import makeDeleteCart from './delete-cart';

const {
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
} = cartUseCases;

const getCart = makeGetCart({ listCart });
const getCartByEmail = makeGetCartByEmail({ listCartByEmail });
const getCartEnable = makeGetCartEnable({ listCartEnable });
const postCart = makePostCart({ addCart });
const putCart = makePutCart({ updateCart });
const patchCartBillingAddress = makePatchCartBillingAddress({
  updateCartBillingAddress,
});
const patchCartShippingMethod = makePatchCartShippingMethod({
  updateCartShippingMethod,
});
const patchCartPaymentDate = makePatchCartPaymentDate({
  updateCartPaymentDate,
});
const patchCartCreditCard = makePatchCartCreditCard({
  updateCartCreditCard,
});
const deleteCart = makeDeleteCart({ removeCart });

export default {
  getCart,
  getCartByEmail,
  getCartEnable,
  postCart,
  putCart,
  patchCartBillingAddress,
  patchCartShippingMethod,
  patchCartPaymentDate,
  patchCartCreditCard,
  deleteCart,
};
