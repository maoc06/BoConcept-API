import express from 'express';
import {
  getCategory,
  postCategory,
  putCategory,
  deleteCategory,
} from '../controllers';
import makeCallback from '../express-callback';

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
  router.get('/', makeCallback(getCategory));
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
  router.get('/:id', makeCallback(getCategory));
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
  router.post('/', makeCallback(postCategory));
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
  router.put('/', makeCallback(putCategory));
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
  router.delete('/:id', makeCallback(deleteCategory));
  // #swagger.end
  return router;
}

export { getCategoryRoutes };
