import express from 'express';
import { storeControllers } from '../controllers';
import makeCallback from '../express-callback';
import authorize from '../utils/middlewares/authorization';
import { Admin, Customer } from '../utils/role';

function getStoreRoutes() {
  const router = express.Router();

  /*
        #swagger.start
       #swagger.path = '/store'
       #swagger.method = 'get'
       #swagger.produces = ["application/json"]
       #swagger.description = 'Endpoint para obtener todas las tiendas.'
       #swagger.tags = ['Store']
       #swagger.responses[200] = { 
               schema: { $ref: "#/definitions/Store" },
               description: 'Listado de tiendas.' 
        }
    */
  router.get(
    '/',
    authorize([Admin, Customer]),
    makeCallback(storeControllers.getStore)
  );
  // #swagger.end

  /*
        #swagger.start
       #swagger.path = '/store'
       #swagger.method = 'post'
       #swagger.produces = ["application/json"]
       #swagger.description = 'Endpoint para agregar una nueva tienda'
       #swagger.parameters['newStore'] = {
               in: 'body',
               description: 'Información de la tienda.',
               required: true,
               type: 'object',
               schema: { $ref: "#/definitions/Store" }
        }
       #swagger.tags = ['Store']
       #swagger.responses[201] = { 
               schema: { $ref: "#/definitions/Store" },
               description: 'Tienda agregada exitosamente.' 
        }
    */
  router.post('/', authorize(Admin), makeCallback(storeControllers.postStore));
  // #swagger.end

  /*
        #swagger.start
       #swagger.path = '/store'
       #swagger.method = 'put'
       #swagger.produces = ["application/json"]
       #swagger.description = 'Endpoint para actualizar un tienda'
       #swagger.tags = ['Store']
       #swagger.parameters['newStore'] = {
               in: 'body',
               description: 'Información de la tienda.',
               required: true,
               type: 'object',
               schema: { $ref: "#/definitions/Store" }
        }
       #swagger.responses[200] = { 
               schema: { $ref: "#/definitions/Store" },
               description: 'Tienda Actualizada.' 
        }
        #swagger.responses[400] = { 
               schema: { error: "Store not found" },
               description: 'Tienda no encontrada.' 
        }
    */
  router.put('/', authorize(Admin), makeCallback(storeControllers.putStore));
  // #swagger.end

  /*
        #swagger.start
       #swagger.path = '/store/{store_id}'
       #swagger.method = 'delete'
       #swagger.produces = ["application/json"]
       #swagger.description = 'Endpoint para borrar una tienda'
       #swagger.parameters['store_id'] = { description: 'Id de la tienda a borrar.' }
       #swagger.tags = ['Store']
       #swagger.responses[200] = { 
               schema: { message: "Store successfully deleted" },
               description: 'Tienda Borrada.' 
        }
        #swagger.responses[400] = { 
               schema: { error: "Store not found" },
               description: 'Tienda no encontrada.' 
        }
    */
  router.delete(
    '/:id',
    authorize(Admin),
    makeCallback(storeControllers.deleteStore)
  );
  // #swagger.end

  return router;
}

export { getStoreRoutes };
