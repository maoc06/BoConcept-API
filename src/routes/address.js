import express from 'express';
import { addressControllers } from '../controllers';
import makeCallback from '../express-callback';
import authorize from '../utils/middlewares/authorization';
import { Admin, Customer } from '../utils/role';

function getAddressRoutes() {
  const router = express.Router();

  /*
        #swagger.start
       #swagger.path = '/address'
       #swagger.method = 'get'
       #swagger.produces = ["application/json"]
       #swagger.description = 'Endpoint para obtener una direccion.'
       #swagger.parameters['id'] = { description: 'Id de la direccion.' }
       #swagger.tags = ['Address']
       #swagger.responses[200] = { 
               schema: { $ref: "#/definitions/Address" },
               description: 'Direccion con id[param].' 
        }
    */
  router.get(
    '/:id',
    authorize([Admin, Customer]),
    makeCallback(addressControllers.getAddress)
  );
  // #swagger.end

  /*
        #swagger.start
       #swagger.path = '/address/by-customer'
       #swagger.method = 'get'
       #swagger.produces = ["application/json"]
       #swagger.description = 'Endpoint para obtener la(s) direcciones de un usuario.'
       #swagger.parameters['email'] = { description: 'email del usuario registrado.' }
       #swagger.tags = ['Address']
       #swagger.responses[200] = { 
               schema: { $ref: "#/definitions/Address" },
               description: 'Direcciones pertenecientes al usario con [email].' 
        }
    */
  router.get(
    '/by-customer/:email',
    authorize([Admin, Customer]),
    makeCallback(addressControllers.getAddresByCustomer)
  );
  // #swagger.end

  /*
        #swagger.start
       #swagger.path = '/address'
       #swagger.method = 'post'
       #swagger.produces = ["application/json"]
       #swagger.description = 'Endpoint para agregar una nueva direccion.'
       #swagger.parameters['newAddress'] = {
               in: 'body',
               description: 'La informacion de la nueva direccion.',
               required: true,
               type: 'object',
               schema: { $ref: "#/definitions/Address" }
        }
       #swagger.tags = ['Address']
       #swagger.responses[201] = { 
               schema: { $ref: "#/definitions/Address" },
               description: 'Direccion creada.' 
        }
    */
  router.post(
    '/',
    authorize([Admin, Customer]),
    makeCallback(addressControllers.postAddress)
  );
  // #swagger.end

  /*
        #swagger.start
       #swagger.path = '/address'
       #swagger.method = 'put'
       #swagger.produces = ["application/json"]
       #swagger.description = 'Endpoint para actualizar una direccion.'
       #swagger.parameters['updateAddress'] = {
               in: 'body',
               description: 'La informacion de la nueva direccion.',
               required: true,
               type: 'object',
               schema: { $ref: "#/definitions/Address" }
        }
       #swagger.tags = ['Address']
       #swagger.responses[200] = { 
               schema: { $ref: "#/definitions/Address" },
               description: 'Direccion actualizada.' 
        }
    */
  router.put(
    '/',
    authorize([Admin, Customer]),
    makeCallback(addressControllers.putAddress)
  );
  // #swagger.end

  /*
        #swagger.start
       #swagger.path = '/address/{addressId}'
       #swagger.method = 'delete'
       #swagger.produces = ["application/json"]
       #swagger.description = 'Endpoint para eliminar una direccion.'
       #swagger.parameters['addressId'] = { description: 'Id de la direccion a eliminar.' }
       #swagger.tags = ['Address']
       #swagger.responses[200] = { 
               schema: { $ref: "#/definitions/Address" },
               description: 'Direccion actualizada.' 
        }
    */
  router.delete(
    '/:addressId',
    authorize([Admin, Customer]),
    makeCallback(addressControllers.deleteAddress)
  );
  // #swagger.end

  return router;
}

export { getAddressRoutes };
