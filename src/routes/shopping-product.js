import express from 'express';
import { shoppingProductControllers } from '../controllers';
import makeCallback from '../express-callback';
import authorize from '../utils/middlewares/authorization';
import { Admin, Customer } from '../utils/role';

function getShoppingProductRoutes() {
  const router = express.Router();

  /*
        #swagger.start
       #swagger.path = '/shopping-product'
       #swagger.method = 'get'
       #swagger.produces = ["application/json"]
       #swagger.description = 'Endpoint para obtener todos los producto agregados a almenos un carrito de compras.'
       #swagger.tags = ['ShoppingProduct']
       #swagger.responses[200] = { 
               schema: { $ref: "#/definitions/ShoppingProduct" },
               description: 'Listado de shopping products.' 
        }
    */
  router.get(
    '/',
    authorize([Admin, Customer]),
    makeCallback(shoppingProductControllers.getShoppingProduct)
  );
  // #swagger.end

  /*
        #swagger.start
       #swagger.path = '/shopping-product/{id}'
       #swagger.method = 'get'
       #swagger.produces = ["application/json"]
       #swagger.description = 'Endpoint para obtener un producto de un carrito de compras.'
       #swagger.parameters['id'] = { description: 'id del shopping product' }
       #swagger.tags = ['ShoppingProduct']
       #swagger.responses[200] = { 
               schema: { $ref: "#/definitions/ShoppingProduct" },
               description: 'Shopping product encontrado.' 
        }
       #swagger.responses[400] = { 
               schema: { error: "Shopping product not found" },
               description: 'Shopping product no encontrado.' 
        }
    */
  router.get(
    '/:shprId',
    authorize([Admin, Customer]),
    makeCallback(shoppingProductControllers.getShoppingProduct)
  );
  // #swagger.end

  /*
        #swagger.start
       #swagger.path = '/shopping-product/by-cart/{cartId}'
       #swagger.method = 'get'
       #swagger.produces = ["application/json"]
       #swagger.description = 'Endpoint para obtener un lo(s) producto(s) de un carrito de compras especificado.'
       #swagger.parameters['cartId'] = { description: 'id del carrito de compras' }
       #swagger.tags = ['ShoppingProduct']
       #swagger.responses[200] = { 
               schema: { $ref: "#/definitions/ShoppingProduct" },
               description: 'Listado de shopping product.' 
        }
       #swagger.responses[400] = { 
               schema: { error: "Cart not found" },
               description: 'El id del carrito no se existe.' 
        }
    */
  router.get(
    '/by-cart/:carId',
    authorize([Admin, Customer]),
    makeCallback(shoppingProductControllers.getShoppingProduct)
  );
  // #swagger.end

  /*
        #swagger.start
       #swagger.path = '/shopping-product/by-enable-cart/{email}'
       #swagger.method = 'get'
       #swagger.produces = ["application/json"]
       #swagger.description = 'Endpoint para obtener un lo(s) producto(s) del carrito actualmente habilitado de un usuario especificado.'
       #swagger.parameters['email'] = { description: 'email del usuario al que pertenece el carrito de compras' }
       #swagger.tags = ['ShoppingProduct']
       #swagger.responses[200] = { 
               schema: { $ref: "#/definitions/ShoppingProduct" },
               description: 'Listado de shopping product.' 
        }
       #swagger.responses[400] = { 
               schema: { error: "Customer not found" },
               description: 'No se encontro un usuario con el email.' 
        }
    */
  router.get(
    '/by-enable-cart/:email',
    authorize([Admin, Customer]),
    makeCallback(shoppingProductControllers.getShoppingProductByEnableCart)
  );
  // #swagger.end

  /*
        #swagger.start
       #swagger.path = '/shopping-product'
       #swagger.method = 'post'
       #swagger.produces = ["application/json"]
       #swagger.description = 'Endpoint para guardar un nuevo producto en un carrito de compras'
       #swagger.parameters['newShoppingProduct'] = {
               in: 'body',
               description: 'Información del producto.',
               required: true,
               type: 'object',
               schema: { pro_id: "3000125D0010137", car_id: 1, quantity: 1 }
        }
       #swagger.tags = ['ShoppingProduct']
       #swagger.responses[201] = { 
               schema: { $ref: "#/definitions/ShoppingProduct" },
               description: 'Shopping product Guardado.' 
        }
    */
  router.post(
    '/',
    authorize([Admin, Customer]),
    makeCallback(shoppingProductControllers.postShoppingProduct)
  );
  // #swagger.end

  /*
        #swagger.start
       #swagger.path = '/shopping-product'
       #swagger.method = 'put'
       #swagger.produces = ["application/json"]
       #swagger.description = 'Endpoint para actualizar un product de un carrito de compras'
       #swagger.tags = ['ShoppingProduct']
       #swagger.responses[200] = { 
               schema: { $ref: "#/definitions/ShoppingProduct" },
               description: 'Shopping product Actualizado.' 
        }
        #swagger.responses[400] = { 
               schema: { error: "Shopping product not found" },
               description: 'Shopping product no encontrado.' 
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
       #swagger.path = '/shopping-product/{id}'
       #swagger.method = 'delete'
       #swagger.produces = ["application/json"]
       #swagger.description = 'Endpoint para borrar un producto del carrito'
       #swagger.parameters['id'] = { description: 'Id del shopping product.' }
       #swagger.tags = ['ShoppingProduct']
       #swagger.responses[200] = { 
               schema: { message: "Shopping product successfully deleted" },
               description: 'Shopping product Borrado.' 
        }
        #swagger.responses[400] = { 
               schema: { error: "Shopping product not found" },
               description: 'Shopping product no encontrado.' 
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
