import express from 'express';
import { shippingMethodControllers } from '../controllers';
import makeCallback from '../express-callback';
import authorize from '../utils/middlewares/authorization';
import { Admin, Customer } from '../utils/role';

function getShippingMethodRoutes() {
  const router = express.Router();

  /*
        #swagger.start
       #swagger.path = '/shipping-method'
       #swagger.method = 'get'
       #swagger.produces = ["application/json"]
       #swagger.description = 'Endpoint para obtener todas los metodos de envio.'
       #swagger.tags = ['ShippingMethod']
       #swagger.responses[200] = { 
               schema: { $ref: "#/definitions/ShippingMethod" },
               description: 'Listado de metodos de envio.' 
        }
    */
  router.get(
    '/',
    authorize([Admin, Customer]),
    makeCallback(shippingMethodControllers.getShippingMethod)
  );
  // #swagger.end

  /*
        #swagger.start
       #swagger.path = '/shipping-method/{id}'
       #swagger.method = 'get'
       #swagger.produces = ["application/json"]
       #swagger.description = 'Endpoint para obtener un metodo de envio.'
       #swagger.parameters['id'] = { description: 'Id del metodo de envio.' }
       #swagger.tags = ['ShippingMethod']
       #swagger.responses[200] = { 
               schema: { $ref: "#/definitions/ShippingMethod" },
               description: 'Metodo de envio.' 
        }
        #swagger.responses[400] = { 
               schema: { error: "Shipping method not found" },
               description: 'Metodo de envio no encontrado.' 
        }
    */
  router.get(
    '/:shippingMethodId',
    authorize([Admin, Customer]),
    makeCallback(shippingMethodControllers.getShippingMethod)
  );
  // #swagger.end

  /*
        #swagger.start
       #swagger.path = '/shipping-method'
       #swagger.method = 'post'
       #swagger.produces = ["application/json"]
       #swagger.description = 'Endpoint para guardar una nuevo metodo de envio'
       #swagger.parameters['newShippingMethod'] = {
               in: 'body',
               description: 'Información del metodo de envio.',
               required: true,
               type: 'object',
               schema: { $ref: "#/definitions/ShippingMethod" },
        }
       #swagger.tags = ['ShippingMethod']
       #swagger.responses[201] = { 
               schema: { $ref: "#/definitions/ShippingMethod" },
               description: 'Metodo de envio guardado.' 
        }
    */
  router.post(
    '/',
    authorize(Admin),
    makeCallback(shippingMethodControllers.postShippingMethod)
  );
  // #swagger.end

  /*
        #swagger.start
       #swagger.path = '/shipping-method'
       #swagger.method = 'put'
       #swagger.produces = ["application/json"]
       #swagger.description = 'Endpoint para actualizar un metodo de envio'
       #swagger.tags = ['ShippingMethod']
       #swagger.parameters['newShippingMethod'] = {
               in: 'body',
               description: 'Información del metodo de envio.',
               required: true,
               type: 'object',
               schema: { $ref: "#/definitions/ShippingMethod" }
        }
       #swagger.responses[200] = { 
               schema: { $ref: "#/definitions/ShippingMethod" },
               description: 'Metodo de envio actualizado.' 
        }
        #swagger.responses[400] = { 
               schema: { error: "ShippingMethod not found" },
               description: 'Metodo de envio no encontrado.' 
        }
    */
  router.put(
    '/',
    authorize(Admin),
    makeCallback(shippingMethodControllers.putShippingMethod)
  );
  // #swagger.end

  /*
        #swagger.start
       #swagger.path = '/shipping-method/{id}'
       #swagger.method = 'delete'
       #swagger.produces = ["application/json"]
       #swagger.description = 'Endpoint para borrar un metodo de envio'
       #swagger.parameters['id'] = { description: 'Id del metodo de envio.' }
       #swagger.tags = ['ShippingMethod']
       #swagger.responses[200] = { 
               schema: { message: "Shipping method successfully deleted" },
               description: 'Metodo de envio Borrada.' 
        }
        #swagger.responses[400] = { 
               schema: { error: "Shipping method not found" },
               description: 'Metodo de pago no encontrado.' 
        }
    */
  router.delete(
    '/:shippingMethodId',
    authorize(Admin),
    makeCallback(shippingMethodControllers.deleteShippingMethod)
  );
  // #swagger.end

  return router;
}

export { getShippingMethodRoutes };
