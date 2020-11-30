import buildMakeProduct from './product';
import buildMakeCustomer from './customer';
import buildMakeCategory from './category';
import buildMakeUserCredentials from './user-credentials';

const makeProduct = buildMakeProduct({});
const makeCustomer = buildMakeCustomer({});
const makeCategory = buildMakeCategory({});
const makeUserCredentials = buildMakeUserCredentials({});

export { makeCustomer, makeProduct, makeCategory, makeUserCredentials };
