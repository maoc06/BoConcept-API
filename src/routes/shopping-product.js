import express from 'express';
import { shoppingProductControllers } from '../controllers';
import makeCallback from '../express-callback';
import authorize from '../utils/middlewares/authorization';
import { Admin, Customer } from '../utils/role';

function getShoppingProductRoutes() {
  const router = express.Router();

  router.get(
    '/',
    authorize([Admin, Customer]),
    makeCallback(shoppingProductControllers.getShoppingProduct)
  );

  /*
        #swagger.start
       #swagger.path = '/customer/{email}'
       #swagger.method = 'get'
       #swagger.produces = ["application/json"]
       #swagger.description = 'Endpoint para obtener un customer.'
       #swagger.parameters['email'] = { description: 'email del customer' }
       #swagger.tags = ['Customer']
       #swagger.responses[200] = { 
               schema: { $ref: "#/definitions/Customer" },
               description: 'Customer encontrado.' 
        }
       #swagger.responses[400] = { 
               schema: { error: "Customer not found" },
               description: 'Customer no encontrado.' 
        }
    */
  router.get(
    '/:shprId',
    authorize([Admin, Customer]),
    makeCallback(shoppingProductControllers.getShoppingProduct)
  );
  // #swagger.end

  router.get(
    '/by-cart/:carId',
    authorize([Admin, Customer]),
    makeCallback(shoppingProductControllers.getShoppingProduct)
  );

  router.get(
    '/by-enable-cart/:email',
    authorize([Admin, Customer]),
    makeCallback(shoppingProductControllers.getShoppingProductByEnableCart)
  );

  router.post(
    '/',
    authorize([Admin, Customer]),
    makeCallback(shoppingProductControllers.postShoppingProduct)
  );

  /*
        #swagger.start
       #swagger.path = '/customer'
       #swagger.method = 'put'
       #swagger.produces = ["application/json"]
       #swagger.description = 'Endpoint para actualizar un customer'
       #swagger.tags = ['Customer']
       #swagger.responses[200] = { 
               schema: { $ref: "#/definitions/Customer" },
               description: 'Customer Actualizado.' 
        }
        #swagger.responses[400] = { 
               schema: { error: "Customer not found" },
               description: 'Customer no encontrado.' 
        }
    */
  router.put(
    '/',
    authorize([Admin, Customer]),
    makeCallback(shoppingProductControllers.putShoppingProduct)
  );
  // #swagger.end

  /*
        #swagger.start
       #swagger.path = '/customer/{email}'
       #swagger.method = 'delete'
       #swagger.produces = ["application/json"]
       #swagger.description = 'Endpoint para borrar un customer'
       #swagger.parameters['email'] = { description: 'Email del customer.' }
       #swagger.tags = ['Customer']
       #swagger.responses[200] = { 
               schema: { message: "Customer successfully deleted" },
               description: 'Producto Borrado.' 
        }
        #swagger.responses[400] = { 
               schema: { error: "Customer not found" },
               description: 'Customer no encontrado.' 
        }
    */
  router.delete(
    '/:shprId',
    authorize([Admin, Customer]),
    makeCallback(shoppingProductControllers.deleteShoppingProduct)
  );
  // #swagger.end
  return router;
}

export { getShoppingProductRoutes };
