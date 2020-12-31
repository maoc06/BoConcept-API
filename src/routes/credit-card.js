import express from 'express';
import { creditCardControllers } from '../controllers';
import makeCallback from '../express-callback';
import authorize from '../utils/middlewares/authorization';
import { Admin, Customer } from '../utils/role';

function getCreditCardRoutes() {
  const router = express.Router();

  /*
        #swagger.start
       #swagger.path = '/credit-card'
       #swagger.method = 'get'
       #swagger.produces = ["application/json"]
       #swagger.description = 'Endpoint para obtener todas las tarjetas de credito.'
       #swagger.tags = ['CreditCard']
       #swagger.responses[200] = { 
               schema: { $ref: "#/definitions/CreditCard" },
               description: 'Listado de metodos de envio.' 
        }
    */
  router.get(
    '/',
    authorize([Admin, Customer]),
    makeCallback(creditCardControllers.getCreditCard)
  );
  // #swagger.end

  /*
        #swagger.start
       #swagger.path = '/credit-card/{id}'
       #swagger.method = 'get'
       #swagger.produces = ["application/json"]
       #swagger.description = 'Endpoint para obtener un tarjeta de credito por su numero.'
       #swagger.parameters['id'] = { description: 'Id del tarjeta de credito.' }
       #swagger.tags = ['CreditCard']
       #swagger.responses[200] = { 
               schema: { $ref: "#/definitions/CreditCard" },
               description: 'Tarjeta de credito.' 
        }
        #swagger.responses[400] = { 
               schema: { error: "Shipping method not found" },
               description: 'Tarjeta de credito no encontrado.' 
        }
    */
  router.get(
    '/:id',
    authorize([Admin, Customer]),
    makeCallback(creditCardControllers.getCreditCard)
  );
  // #swagger.end

  /*
        #swagger.start
       #swagger.path = '/credit-card/by-customer/{email}'
       #swagger.method = 'get'
       #swagger.produces = ["application/json"]
       #swagger.description = 'Endpoint para obtener la(s) tarjeta(s) de credito de un usuario.'
       #swagger.parameters['email'] = { description: 'Email del usuario.' }
       #swagger.tags = ['CreditCard']
       #swagger.responses[200] = { 
               schema: { $ref: "#/definitions/CreditCard" },
               description: 'Listado de tarjeta(s) de credito.' 
        }
        #swagger.responses[400] = { 
               schema: { error: "Customer not found" },
               description: 'El email de busquda no existe.' 
        }
    */
  router.get(
    '/by-customer/:email',
    authorize([Admin, Customer]),
    makeCallback(creditCardControllers.getCreditCardByCustomer)
  );
  // #swagger.end

  /*
        #swagger.start
       #swagger.path = '/credit-card'
       #swagger.method = 'post'
       #swagger.produces = ["application/json"]
       #swagger.description = 'Endpoint para guardar una nuevo tarjeta de credito'
       #swagger.parameters['newCreditCard'] = {
               in: 'body',
               description: 'Información del tarjeta de credito.',
               required: true,
               type: 'object',
               schema: { $ref: "#/definitions/CreditCard" },
        }
       #swagger.tags = ['CreditCard']
       #swagger.responses[201] = { 
               schema: { $ref: "#/definitions/CreditCard" },
               description: 'Tarjeta de credito guardado.' 
        }
    */
  router.post(
    '/',
    authorize(Admin),
    makeCallback(creditCardControllers.postCreditCard)
  );
  // #swagger.end

  /*
        #swagger.start
       #swagger.path = '/credit-card'
       #swagger.method = 'put'
       #swagger.produces = ["application/json"]
       #swagger.description = 'Endpoint para actualizar un tarjeta de credito'
       #swagger.tags = ['CreditCard']
       #swagger.parameters['newCreditCard'] = {
               in: 'body',
               description: 'Información del tarjeta de credito.',
               required: true,
               type: 'object',
               schema: { $ref: "#/definitions/CreditCard" }
        }
       #swagger.responses[200] = { 
               schema: { $ref: "#/definitions/CreditCard" },
               description: 'Tarjeta de credito actualizado.' 
        }
        #swagger.responses[400] = { 
               schema: { error: "CreditCard not found" },
               description: 'Tarjeta de credito no encontrado.' 
        }
    */
  router.put(
    '/',
    authorize(Admin),
    makeCallback(creditCardControllers.putCreditCard)
  );
  // #swagger.end

  /*
        #swagger.start
       #swagger.path = '/credit-card/{id}'
       #swagger.method = 'delete'
       #swagger.produces = ["application/json"]
       #swagger.description = 'Endpoint para borrar una tarjeta de credito'
       #swagger.parameters['id'] = { description: 'Numero de la tarjeta a borrar.' }
       #swagger.tags = ['CreditCard']
       #swagger.responses[200] = { 
               schema: { message: "Credit card successfully deleted" },
               description: 'Tarjeta de credito Borrada.' 
        }
        #swagger.responses[400] = { 
               schema: { error: "Credit card not found" },
               description: 'Tarjeta de credito no encontrado.' 
        }
    */
  router.delete(
    '/:id',
    authorize(Admin),
    makeCallback(creditCardControllers.deleteCreditCard)
  );
  // #swagger.end

  return router;
}

export { getCreditCardRoutes };
