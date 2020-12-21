import buildMakeProduct from './product';
import buildMakeProductImage from './product-image';
import buildMakeCustomer from './customer';
import buildMakeCategory from './category';
import buildMakeUserCredentials from './user-credentials';
import buildMakePaymentMethod from './payment-method';
import buildMakeCreditCard from './credit-card';
import buildMakeShoppingProduct from './shopping-product';
import buildMakeShippingMethod from './shipping-method';
import buildMakeAddress from './address';
import buildMakeCart from './cart';

const makeProduct = buildMakeProduct({});
const makeProductImage = buildMakeProductImage({});
const makeCustomer = buildMakeCustomer({});
const makeCategory = buildMakeCategory({});
const makeUserCredentials = buildMakeUserCredentials({});
const makePaymentMethod = buildMakePaymentMethod({});
const makeCreditCard = buildMakeCreditCard({});
const makeShoppingProduct = buildMakeShoppingProduct({});
const makeShippingMethod = buildMakeShippingMethod({});
const makeAddress = buildMakeAddress({});
const makeCart = buildMakeCart({});

export {
  makeCustomer,
  makeProduct,
  makeProductImage,
  makeCategory,
  makeUserCredentials,
  makePaymentMethod,
  makeCreditCard,
  makeShoppingProduct,
  makeShippingMethod,
  makeAddress,
  makeCart,
};
