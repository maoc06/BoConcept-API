import express from 'express';
import {
  getShoppingProduct,
  postShoppingProduct,
  putShoppingProduct,
  deleteShoppingProduct,
} from '../controllers';
import makeCallback from '../express-callback';

function getShoppingProductRoutes() {
  const router = express.Router();

  router.get('/', makeCallback(getShoppingProduct));

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
  router.get('/:shprId', makeCallback(getShoppingProduct));
  // #swagger.end

  router.get('/by-cart/:carId', makeCallback(getShoppingProduct));

  router.post('/', makeCallback(postShoppingProduct));

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
  router.put('/', makeCallback(putShoppingProduct));
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
  router.delete('/:shprId', makeCallback(deleteShoppingProduct));
  // #swagger.end
  return router;
}

export { getShoppingProductRoutes };
