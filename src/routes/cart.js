import express from 'express';
import { cartControllers } from '../controllers';
import makeCallback from '../express-callback';
import authorize from '../utils/middlewares/authorization';
import { Admin, Customer } from '../utils/role';

function getCartRoutes() {
  const router = express.Router();

  /*
        #swagger.start
       #swagger.path = '/cart'
       #swagger.method = 'get'
       #swagger.produces = ["application/json"]
       #swagger.description = 'Endpoint para obtener todos carrito de compras.'
       #swagger.tags = ['Cart']
       #swagger.responses[200] = { 
               schema: { $ref: "#/definitions/Cart" },
               description: 'Listado de carritos de compra.' 
        }
    */
  router.get(
    '/',
    authorize([Admin, Customer]),
    makeCallback(cartControllers.getCart)
  );
  // #swagger.end

  /*
        #swagger.start
       #swagger.path = '/cart/{cartId}'
       #swagger.method = 'get'
       #swagger.produces = ["application/json"]
       #swagger.description = 'Endpoint para obtener un carrito especifico.'
       #swagger.parameters['cartId'] = { description: 'Id del carrito de compras.' }
       #swagger.tags = ['Cart']
       #swagger.responses[200] = { 
               schema: { $ref: "#/definitions/Cart" },
               description: 'Carrito de compras.' 
        }
        #swagger.responses[400] = { 
               schema: { error: "Cart not found" },
               description: 'El carrito con ese id no existe.' 
        }
    */
  router.get(
    '/:cartId',
    authorize([Admin, Customer]),
    makeCallback(cartControllers.getCart)
  );
  // #swagger.end

  /*
        #swagger.start
       #swagger.path = '/by-customer/{email}'
       #swagger.method = 'get'
       #swagger.produces = ["application/json"]
       #swagger.description = 'Endpoint para obtener lo(s) carrito(s) de compra de un usuario.'
       #swagger.parameters['email'] = { description: 'Email del usuario.' }
       #swagger.tags = ['Cart']
       #swagger.responses[200] = { 
               schema: { $ref: "#/definitions/Cart" },
               description: 'Listado de carrito(s) de compras.' 
        }
        #swagger.responses[400] = { 
               schema: { error: "Customer not found" },
               description: 'El email de busquda no existe.' 
        }
    */
  router.get(
    '/by-customer/:email',
    authorize([Admin, Customer]),
    makeCallback(cartControllers.getCartByEmail)
  );
  // #swagger.end

  /*
        #swagger.start
       #swagger.path = '/by-enable/{email}'
       #swagger.method = 'get'
       #swagger.produces = ["application/json"]
       #swagger.description = 'Endpoint para obtener el carrito de compras habilitado para un usuario.'
       #swagger.parameters['email'] = { description: 'Email del usuario.' }
       #swagger.tags = ['Cart']
       #swagger.responses[200] = { 
               schema: { $ref: "#/definitions/Cart" },
               description: 'Carrito de compras actualmente habilitado.' 
        }
        #swagger.responses[400] = { 
               schema: { error: "Customer not found" },
               description: 'El email de busquda no existe.' 
        }
    */
  router.get(
    '/by-enable/:email',
    authorize([Admin, Customer]),
    makeCallback(cartControllers.getCartEnable)
  );
  // #swagger.end

  /*
        #swagger.start
       #swagger.path = '/cart'
       #swagger.method = 'post'
       #swagger.produces = ["application/json"]
       #swagger.description = 'Endpoint para guardar una nuevo carrito de compras'
       #swagger.parameters['newCart'] = {
               in: 'body',
               description: 'Información del carrito.',
               required: true,
               type: 'object',
               schema: { email: "miguelorrego@outlook.com", "shipping_method_id": 1, enable: 1 },
        }
       #swagger.tags = ['Cart']
       #swagger.responses[201] = { 
               schema: { $ref: "#/definitions/Cart" },
               description: 'Carrito de compras guardado.' 
        }
    */
  router.post(
    '/',
    authorize([Admin, Customer]),
    makeCallback(cartControllers.postCart)
  );
  // #swagger.end

  /*
        #swagger.start
       #swagger.path = '/cart'
       #swagger.method = 'put'
       #swagger.produces = ["application/json"]
       #swagger.description = 'Endpoint para actualizar un carrito de compras'
       #swagger.tags = ['Cart']
       #swagger.parameters['newCart'] = {
               in: 'body',
               description: 'Información del carrito.',
               required: true,
               type: 'object',
               schema: { $ref: "#/definitions/Cart" }
        }
       #swagger.responses[200] = { 
               schema: { $ref: "#/definitions/Cart" },
               description: 'Carrito de compras actualizado.' 
        }
        #swagger.responses[400] = { 
               schema: { error: "Cart not found" },
               description: 'Carrito de compras no encontrado.' 
        }
    */
  router.put(
    '/',
    authorize([Admin, Customer]),
    makeCallback(cartControllers.putCart)
  );
  // #swagger.end

  /*
        #swagger.start
       #swagger.path = '/cart'
       #swagger.method = 'patch'
       #swagger.produces = ["application/json"]
       #swagger.description = 'Endpoint para actualizar la tarjeta de credito asociado al carrito'
       #swagger.tags = ['Cart']
       #swagger.parameters['updateCreditCard'] = {
               in: 'body',
               description: 'Información del carrito y de la tarjeta de credito.',
               required: true,
               type: 'object',
               schema: { cartId: 1, creditCardNumber: 4152369854126985 }
        }
       #swagger.responses[200] = { 
               schema: { $ref: "#/definitions/Cart" },
               description: 'Tarjeta de credito actualizado.' 
        }
        #swagger.responses[400] = { 
               schema: { error: "Cart not found" },
               description: 'Tarjeta de credito no encontrado.' 
        }
    */
  router.patch(
    '/credit-card',
    authorize([Admin, Customer]),
    makeCallback(cartControllers.patchCartCreditCard)
  );
  // #swagger.end

  /*
        #swagger.start
       #swagger.path = '/cart'
       #swagger.method = 'patch'
       #swagger.produces = ["application/json"]
       #swagger.description = 'Endpoint para actualizar la direccion de envio de un carrito de compras.'
       #swagger.tags = ['Cart']
       #swagger.parameters['updateBillingAddress'] = {
               in: 'body',
               description: 'Información del carrito y de la direccion de envio.',
               required: true,
               type: 'object',
               schema: { cartId: 1, addressId: 3 }
        }
       #swagger.responses[200] = { 
               schema: { $ref: "#/definitions/Cart" },
               description: 'Direccion de envio actualizada.' 
        }
        #swagger.responses[400] = { 
               schema: { error: "Billing address not found" },
               description: 'Direccion no encontrado.' 
        }
    */
  router.patch(
    '/billing-address',
    authorize([Admin, Customer]),
    makeCallback(cartControllers.patchCartBillingAddress)
  );
  // #swagger.end

  /*
        #swagger.start
       #swagger.path = '/cart'
       #swagger.method = 'patch'
       #swagger.produces = ["application/json"]
       #swagger.description = 'Endpoint para actualizar el metodo de envio de un carrito de compras.'
       #swagger.tags = ['Cart']
       #swagger.parameters['updateShippingMethod'] = {
               in: 'body',
               description: 'Información del carrito y el metodo de envio.',
               required: true,
               type: 'object',
               schema: { cartId: 1, shippingMethodId: 2 }
        }
       #swagger.responses[200] = { 
               schema: { $ref: "#/definitions/Cart" },
               description: 'Metodo de envio actualizado.' 
        }
        #swagger.responses[400] = { 
               schema: { error: "Shipping method not found" },
               description: 'Metodo de envio no encontrado.' 
        }
    */
  router.patch(
    '/shipping-method',
    authorize([Admin, Customer]),
    makeCallback(cartControllers.patchCartShippingMethod)
  );
  // #swagger.end

  /*
        #swagger.start
       #swagger.path = '/cart'
       #swagger.method = 'patch'
       #swagger.produces = ["application/json"]
       #swagger.description = 'Endpoint para actualizar un la fecha de pago del carrito (now()).'
       #swagger.tags = ['Cart']
       #swagger.parameters['updatePaymentDate'] = {
               in: 'body',
               description: 'Id del carrito (la fecha se actualiza al instante presente).',
               required: true,
               type: 'object',
               schema: { cartId: 1 }
        }
       #swagger.responses[200] = { 
               schema: { $ref: "#/definitions/Cart" },
               description: 'Fecha de pago actualizado.' 
        }
    */
  router.patch(
    '/payment-date',
    authorize([Admin, Customer]),
    makeCallback(cartControllers.patchCartPaymentDate)
  );
  // #swagger.end

  /*
        #swagger.start
       #swagger.path = '/cart/{id}'
       #swagger.method = 'delete'
       #swagger.produces = ["application/json"]
       #swagger.description = 'Endpoint para borrar un carrito de compras'
       #swagger.parameters['id'] = { description: 'Id del carrito de compras.' }
       #swagger.tags = ['Cart']
       #swagger.responses[200] = { 
               schema: { message: "Cart successfully deleted" },
               description: 'Carrito de compras Borrado.' 
        }
        #swagger.responses[400] = { 
               schema: { error: "Cart not found" },
               description: 'Carrito de compras no encontrado.' 
        }
    */
  router.delete(
    '/:cartId',
    authorize([Admin, Customer]),
    makeCallback(cartControllers.deleteCart)
  );
  // #swagger.end

  return router;
}

export { getCartRoutes };
