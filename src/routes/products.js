import express from 'express';
import {
    getProducts,
    postProduct,
    putProduct,
    deleteProduct,
} from '../controllers';
import makeCallback from '../express-callback';

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
    router.get('/', makeCallback(getProducts));
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
    router.get('/:id', makeCallback(getProducts));
    // #swagger.end

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
    router.post('/', makeCallback(postProduct));
    // #swagger.end

    /*
        #swagger.start
       #swagger.path = '/product'
       #swagger.method = 'put'
       #swagger.produces = ["application/json"]
       #swagger.description = 'Endpoint para actualizar un producto'
       #swagger.parameters['id'] = { description: 'ID del producto.' }
       #swagger.tags = ['Product']
       #swagger.responses[200] = { 
               schema: { $ref: "#/definitions/Product" },
               description: 'Producto Actualizado.' 
        }
    */
    router.put('/', makeCallback(putProduct));
    // #swagger.end

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
    router.delete('/:id', makeCallback(deleteProduct));
    // #swagger.end
    return router;
}

export { getProductsRoutes };
