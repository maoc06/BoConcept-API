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
import buildMakeFavorite from './favorite';
import buildMakeCart from './cart';
import buildMakeOrder from './order';
import buildMakeStore from './store';

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
const makeFavorite = buildMakeFavorite({});
const makeCart = buildMakeCart({});
const makeOrder = buildMakeOrder({});
const makeStore = buildMakeStore({});

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
  makeFavorite,
  makeCart,
  makeOrder,
  makeStore,
};
