import Pool from 'pg';
import makeProductDb from './products-db';
import makeProductImageDb from './product-image-db';
import makeCustomerDb from './customer-db';
import makeCategoryDb from './category-db';
import makePaymentMethodDb from './payment-method-db';
import makeCreditCardDb from './credit-card-db';
import makeShoppingProduct from './shopping-product-db';
import makeShippingMethod from './shipping-method-db';
import makeAddressDb from './address-db';
import makeCart from './cart-db';
import { config } from '../../config';

const client = new Pool.Pool({
  user: config.dbUser,
  host: config.dbHost,
  database: config.dbName,
  password: config.dbPassword,
  port: config.dbPort,
});

export function makeDb() {
  return client;
}

const productsDb = makeProductDb({ makeDb });
const productImageDb = makeProductImageDb({ makeDb });
const customerDb = makeCustomerDb({ makeDb });
const categoryDb = makeCategoryDb({ makeDb });
const paymentMethodDb = makePaymentMethodDb({ makeDb });
const creditCardDb = makeCreditCardDb({ makeDb });
const shoppingProductDb = makeShoppingProduct({ makeDb });
const shippingMethodDb = makeShippingMethod({ makeDb });
const addressDb = makeAddressDb({ makeDb });
const cartDb = makeCart({ makeDb });

export {
  productsDb,
  productImageDb,
  customerDb,
  categoryDb,
  paymentMethodDb,
  creditCardDb,
  shoppingProductDb,
  shippingMethodDb,
  addressDb,
  cartDb,
};
