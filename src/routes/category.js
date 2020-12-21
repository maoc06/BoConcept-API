import express from 'express';
import { categoryControllers } from '../controllers';
import makeCallback from '../express-callback';
import authorize from '../utils/middlewares/authorization';
import { Admin, Customer } from '../utils/role';

function getCategoryRoutes() {
  const router = express.Router();

  /*
        #swagger.start
       #swagger.path = '/category'
       #swagger.method = 'get'
       #swagger.produces = ["application/json"]
       #swagger.description = 'Endpoint para obtener todas las categorias.'
       #swagger.tags = ['Category']
       #swagger.responses[200] = { 
               schema: { $ref: "#/definitions/ListCategories" },
               description: 'Listado de categorias.' 
        }
    */
  router.get(
    '/',
    authorize([Admin, Customer]),
    makeCallback(categoryControllers.getCategory)
  );
  // #swagger.end

  /*
        #swagger.start
       #swagger.path = '/category/{cat_id}'
       #swagger.method = 'get'
       #swagger.produces = ["application/json"]
       #swagger.description = 'Endpoint para obtener un categoria'
       #swagger.parameters['cat_id'] = { description: 'Id de la categoria.' }
       #swagger.tags = ['Category']
       #swagger.responses[200] = { 
               schema: { $ref: "#/definitions/Category" },
               description: 'Categoria encontrada.' 
        }
        #swagger.responses[400] = { 
               schema: { error: "Category not found" },
               description: 'Category no encontrado.' 
        }
    */
  router.get(
    '/:id',
    authorize([Admin, Customer]),
    makeCallback(categoryControllers.getCategory)
  );
  // #swagger.end

  /*
        #swagger.start
       #swagger.path = '/category'
       #swagger.method = 'post'
       #swagger.produces = ["application/json"]
       #swagger.description = 'Endpoint para guardar una nueva categoria'
       #swagger.parameters['newCategory'] = {
               in: 'body',
               description: 'Información de la categoria.',
               required: true,
               type: 'object',
               schema: { name: "sillas" }
        }
       #swagger.tags = ['Category']
       #swagger.responses[201] = { 
               schema: { $ref: "#/definitions/Category" },
               description: 'Categoria Guardada.' 
        }
    */
  router.post(
    '/',
    authorize(Admin),
    makeCallback(categoryControllers.postCategory)
  );
  // #swagger.end

  /*
        #swagger.start
       #swagger.path = '/category'
       #swagger.method = 'put'
       #swagger.produces = ["application/json"]
       #swagger.description = 'Endpoint para actualizar un categoria'
       #swagger.tags = ['Category']
       #swagger.parameters['newCategory'] = {
               in: 'body',
               description: 'Información de la categoria.',
               required: true,
               type: 'object',
               schema: { $ref: "#/definitions/Category" }
        }
       #swagger.responses[200] = { 
               schema: { $ref: "#/definitions/Category" },
               description: 'Category Actualizado.' 
        }
        #swagger.responses[400] = { 
               schema: { error: "Category not found" },
               description: 'Category no encontrado.' 
        }
    */
  router.put(
    '/',
    authorize(Admin),
    makeCallback(categoryControllers.putCategory)
  );
  // #swagger.end

  /*
        #swagger.start
       #swagger.path = '/category/{cat_id}'
       #swagger.method = 'delete'
       #swagger.produces = ["application/json"]
       #swagger.description = 'Endpoint para borrar una categoria'
       #swagger.parameters['cat_id'] = { description: 'Id de la categoria.' }
       #swagger.tags = ['Category']
       #swagger.responses[200] = { 
               schema: { message: "Category successfully deleted" },
               description: 'Categoria Borrada.' 
        }
        #swagger.responses[400] = { 
               schema: { error: "Category not found" },
               description: 'Category no encontrada.' 
        }
    */
  router.delete(
    '/:id',
    authorize(Admin),
    makeCallback(categoryControllers.deleteCategory)
  );
  // #swagger.end
  return router;
}

export { getCategoryRoutes };
