import express from 'express';
import { orderControllers } from '../controllers';
import makeCallback from '../express-callback';
import authorize from '../utils/middlewares/authorization';
import { Admin, Customer } from '../utils/role';

function getOrderRoutes() {
  const router = express.Router();

  /*
        #swagger.start
       #swagger.path = '/order/generate'
       #swagger.method = 'post'
       #swagger.produces = ["application/json"]
       #swagger.description = 'Endpoint para generar una nueva orden de compra'
       #swagger.parameters['newOrder'] = {
               in: 'body',
               description: 'Información de la orden.',
               required: true,
               type: 'object',
               schema: { $ref: "#/definitions/Order" }
        }
       #swagger.tags = ['Order']
       #swagger.responses[201] = { 
               schema: { $ref: "#/definitions/Order" },
               description: 'Orden generada exitosamente.' 
        }
    */
  router.post(
    '/generate',
    authorize([Admin, Customer]),
    makeCallback(orderControllers.generateOrder)
  );
  // #swagger.end

  return router;
}

export { getOrderRoutes };
