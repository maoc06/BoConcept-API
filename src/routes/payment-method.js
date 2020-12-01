import express from 'express';
import {
  getPaymentMethod,
  postPaymentMethod,
  putPaymentMethod,
  deletePaymentMethod,
} from '../controllers';
import makeCallback from '../express-callback';
import authorize from '../utils/middlewares/authorization';
import { Admin, Customer } from '../utils/role';

function getPaymentMethodRoutes() {
  const router = express.Router();

  /*
        #swagger.start
       #swagger.path = '/paymethod'
       #swagger.method = 'get'
       #swagger.produces = ["application/json"]
       #swagger.description = 'Endpoint para obtener todas los metodos de pago.'
       #swagger.tags = ['Payment Method']
       #swagger.responses[200] = { 
               schema: { $ref: "#/definitions/ListPayment" },
               description: 'Listado de metodos de pagos.' 
        }
    */
  router.get('/', authorize([Admin, Customer]), makeCallback(getPaymentMethod));
  // #swagger.end

  /*
        #swagger.start
       #swagger.path = '/paymethod/{payId}'
       #swagger.method = 'get'
       #swagger.produces = ["application/json"]
       #swagger.description = 'Endpoint para obtener un metodo de pago'
       #swagger.parameters['payId'] = { description: 'Id del metodo de pago.' }
       #swagger.tags = ['Payment Method']
       #swagger.responses[200] = { 
               schema: { $ref: "#/definitions/PaymentMethod" },
               description: 'Metodo de pago encontrada.' 
        }
        #swagger.responses[400] = { 
               schema: { error: "Payment method not found" },
               description: 'Metodo de pago no encontrado.' 
        }
    */
  router.get(
    '/:id',
    authorize([Admin, Customer]),
    makeCallback(getPaymentMethod)
  );
  // #swagger.end

  /*
        #swagger.start
       #swagger.path = '/paymethod'
       #swagger.method = 'post'
       #swagger.produces = ["application/json"]
       #swagger.description = 'Endpoint para guardar un nuevo metodo de pago'
       #swagger.parameters['newPaymentMethod'] = {
               in: 'body',
               description: 'Información del metodo de pago.',
               required: true,
               type: 'object',
               schema: { name: "PSE" }
        }
       #swagger.tags = ['Payment Method']
       #swagger.responses[201] = { 
               schema: { $ref: "#/definitions/PaymentMethod" },
               description: 'Metodo de pago Guardado.' 
        }
    */
  router.post('/', authorize(Admin), makeCallback(postPaymentMethod));
  // #swagger.end

  /*
        #swagger.start
       #swagger.path = '/paymethod'
       #swagger.method = 'put'
       #swagger.produces = ["application/json"]
       #swagger.description = 'Endpoint para actualizar un metodo de pago'
       #swagger.tags = ['Payment Method']
       #swagger.parameters['paymentMethod'] = {
               in: 'body',
               description: 'Información del metodo de pago.',
               required: true,
               type: 'object',
               schema: { $ref: "#/definitions/PaymentMethod" }
        }
       #swagger.responses[200] = { 
               schema: { $ref: "#/definitions/PaymentMethod" },
               description: 'Metodo de pago Actualizado.' 
        }
        #swagger.responses[400] = { 
               schema: { error: "Payment method not found" },
               description: 'Metodo de pago no encontrado.' 
        }
    */
  router.put('/', authorize(Admin), makeCallback(putPaymentMethod));
  // #swagger.end

  /*
        #swagger.start
       #swagger.path = '/paymethod/{payId}'
       #swagger.method = 'delete'
       #swagger.produces = ["application/json"]
       #swagger.description = 'Endpoint para borrar una categoria'
       #swagger.parameters['payId'] = { description: 'Id del metodo de pago.' }
       #swagger.tags = ['Payment Method']
       #swagger.responses[200] = { 
               schema: { message: "Payment method successfully deleted" },
               description: 'Metodo de pago Borrado.' 
        }
        #swagger.responses[400] = { 
               schema: { error: "Payment method not found" },
               description: 'Metodo de pago no encontrada.' 
        }
    */
  router.delete('/:id', authorize(Admin), makeCallback(deletePaymentMethod));
  // #swagger.end
  return router;
}

export { getPaymentMethodRoutes };
