import express from 'express';
import {
  getCart,
  getCartByEmail,
  postCart,
  putCart,
  deleteCart,
} from '../controllers';
import makeCallback from '../express-callback';
import authorize from '../utils/middlewares/authorization';
import { Admin, Customer } from '../utils/role';

function getCartRoutes() {
  const router = express.Router();
  router.get('/', authorize([Admin, Customer]), makeCallback(getCart));
  router.get('/:cartId', authorize([Admin, Customer]), makeCallback(getCart));
  router.get(
    '/by-customer/:email',
    authorize([Admin, Customer]),
    makeCallback(getCartByEmail)
  );
  router.post('/', authorize([Admin, Customer]), makeCallback(postCart));
  router.put('/', authorize([Admin, Customer]), makeCallback(putCart));
  router.delete(
    '/:cartId',
    authorize([Admin, Customer]),
    makeCallback(deleteCart)
  );
  return router;
}

export { getCartRoutes };
