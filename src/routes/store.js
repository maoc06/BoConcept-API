import express from 'express';
import { storeControllers } from '../controllers';
import makeCallback from '../express-callback';
import authorize from '../utils/middlewares/authorization';
import { Admin, Customer } from '../utils/role';

function getStoreRoutes() {
  const router = express.Router();

  router.get(
    '/',
    authorize([Admin, Customer]),
    makeCallback(storeControllers.getStore)
  );

  router.post('/', authorize(Admin), makeCallback(storeControllers.postStore));

  router.put('/', authorize(Admin), makeCallback(storeControllers.putStore));

  router.delete(
    '/:id',
    authorize(Admin),
    makeCallback(storeControllers.deleteStore)
  );
  return router;
}

export { getStoreRoutes };
