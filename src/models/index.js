import buildMakeProduct from './product';
import buildMakeCustomer from './customer';
import buildMakeCategory from './category';
import buildMakeUserCredentials from './user-credentials';
import buildMakePaymentMethod from './payment-method';

const makeProduct = buildMakeProduct({});
const makeCustomer = buildMakeCustomer({});
const makeCategory = buildMakeCategory({});
const makeUserCredentials = buildMakeUserCredentials({});
const makePaymentMethod = buildMakePaymentMethod({});

export {
  makeCustomer,
  makeProduct,
  makeCategory,
  makeUserCredentials,
  makePaymentMethod,
};
