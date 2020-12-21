import express from 'express';
import { productControllers } from '../controllers';
import makeCallback from '../express-callback';
import authorize from '../utils/middlewares/authorization';
import { Admin, Customer } from '../utils/role';

function getProductsRoutes() {
  const router = express.Router();
  /*
        #swagger.start
       #swagger.path = '/product'
       #swagger.method = 'get'
       #swagger.produces = ["application/json"]
       #swagger.description = 'Endpoint para obtener todos los productos'
       #swagger.tags = ['Product']
       #swagger.responses[200] = { 
               schema: { $ref: "#/definitions/Product" },
               description: 'Productos listados.' 
        }
    */
  router.get(
    '/',
    authorize([Admin, Customer]),
    makeCallback(productControllers.getProducts)
  );
  // #swagger.end

  /*
        #swagger.start
       #swagger.path = '/product/{id}'
       #swagger.method = 'get'
       #swagger.produces = ["application/json"]
       #swagger.description = 'Endpoint para obtener un producto'
       #swagger.parameters['id'] = { description: 'ID del producto.' }
       #swagger.tags = ['Product']
       #swagger.responses[200] = { 
               schema: { $ref: "#/definitions/Product" },
               description: 'Producto encontrado.' 
        }
    */
  router.get(
    '/:id',
    authorize([Admin, Customer]),
    makeCallback(productControllers.getProducts)
  );
  // #swagger.end

  router.get(
    '/by-cat/:id',
    authorize([Admin, Customer]),
    makeCallback(productControllers.getProductsByCategory)
  );

  router.get(
    '/query/:query',
    authorize([Admin, Customer]),
    makeCallback(productControllers.getProductsByQuery)
  );

  router.get(
    '/image/:proId',
    authorize([Admin, Customer]),
    makeCallback(productControllers.getProductImage)
  );

  /*
        #swagger.start
       #swagger.path = '/product'
       #swagger.method = 'post'
       #swagger.produces = ["application/json"]
       #swagger.description = 'Endpoint para guardar un nuevo producto'
       #swagger.parameters['newProduct'] = {
               in: 'body',
               description: 'Información del producto.',
               required: true,
               type: 'object',
               schema: { $ref: "#/definitions/Product" }
        }
       #swagger.tags = ['Product']
       #swagger.responses[201] = { 
               schema: { $ref: "#/definitions/Product" },
               description: 'Producto Guardado.' 
        }
    */
  router.post(
    '/',
    authorize(Admin),
    makeCallback(productControllers.postProduct)
  );
  // #swagger.end

  router.post(
    '/image',
    authorize(Admin),
    makeCallback(productControllers.postProductImage)
  );

  /*
        #swagger.start
       #swagger.path = '/product'
       #swagger.method = 'put'
       #swagger.produces = ["application/json"]
       #swagger.description = 'Endpoint para actualizar un producto'
       #swagger.tags = ['Product']
       #swagger.responses[200] = { 
               schema: { $ref: "#/definitions/Product" },
               description: 'Producto Actualizado.' 
        }
    */
  router.put(
    '/',
    authorize(Admin),
    makeCallback(productControllers.putProduct)
  );
  // #swagger.end

  router.put(
    '/image',
    authorize(Admin),
    makeCallback(productControllers.putProductImage)
  );

  /*
        #swagger.start
       #swagger.path = '/product/{id}'
       #swagger.method = 'delete'
       #swagger.produces = ["application/json"]
       #swagger.description = 'Endpoint para borrar un producto'
       #swagger.parameters['id'] = { description: 'ID del producto.' }
       #swagger.tags = ['Product']
       #swagger.responses[200] = { 
               schema: { message: "remove product" },
               description: 'Producto Borrado.' 
        }
        #swagger.responses[404]
    */
  router.delete(
    '/:id',
    authorize(Admin),
    makeCallback(productControllers.deleteProduct)
  );
  // #swagger.end

  router.delete(
    '/image/:id',
    authorize(Admin),
    makeCallback(productControllers.deleteProductImage)
  );

  return router;
}

export { getProductsRoutes };
