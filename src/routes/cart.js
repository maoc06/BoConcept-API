import express from 'express';
import {
  getCart,
  getCartByEmail,
  postCart,
  putCart,
  deleteCart,
} from '../controllers';
import makeCallback from '../express-callback';

function getCartRoutes() {
  const router = express.Router();
  router.get('/', makeCallback(getCart));
  router.get('/:cartId', makeCallback(getCart));
  router.get('/by-customer/:email', makeCallback(getCartByEmail));
  router.post('/', makeCallback(postCart));
  router.put('/', makeCallback(putCart));
  router.delete('/:cartId', makeCallback(deleteCart));
  return router;
}

export { getCartRoutes };
