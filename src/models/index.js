import buildMakeProduct from './product';
import buildMakeCustomer from './customer';
import buildMakeCategory from './category';
import buildMakeUserCredentials from './user-credentials';
import buildMakePaymentMethod from './payment-method';
import buildMakeShoppingProduct from './shopping-product';
import buildMakeCart from './cart';

const makeProduct = buildMakeProduct({});
const makeCustomer = buildMakeCustomer({});
const makeCategory = buildMakeCategory({});
const makeUserCredentials = buildMakeUserCredentials({});
const makePaymentMethod = buildMakePaymentMethod({});
const makeShoppingProduct = buildMakeShoppingProduct({});
const makeCart = buildMakeCart({});

export {
  makeCustomer,
  makeProduct,
  makeCategory,
  makeUserCredentials,
  makePaymentMethod,
  makeShoppingProduct,
  makeCart,
};
