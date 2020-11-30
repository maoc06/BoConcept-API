import Pool from 'pg';
import makeProductDb from './products-db';
import makeCustomerDb from './customer-db';
import makeCategoryDb from './category-db';
import makePaymentMethodDb from './payment-method-db';
import makeShoppingProduct from './shopping-product-db';
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
const customerDb = makeCustomerDb({ makeDb });
const categoryDb = makeCategoryDb({ makeDb });
const paymentMethodDb = makePaymentMethodDb({ makeDb });
const shoppingProductDb = makeShoppingProduct({ makeDb });
const cartDb = makeCart({ makeDb });

export {
  productsDb,
  customerDb,
  categoryDb,
  paymentMethodDb,
  shoppingProductDb,
  cartDb,
};
