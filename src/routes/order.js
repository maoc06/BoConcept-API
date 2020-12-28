import express from 'express';
import { orderControllers } from '../controllers';
import makeCallback from '../express-callback';
import authorize from '../utils/middlewares/authorization';
import { Admin, Customer } from '../utils/role';

function getOrderRoutes() {
  const router = express.Router();

  router.post(
    '/generate',
    authorize([Admin, Customer]),
    makeCallback(orderControllers.generateOrder)
  );

  return router;
}

export { getOrderRoutes };
