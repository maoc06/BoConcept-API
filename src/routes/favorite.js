import express from 'express';
import { favoriteControllers } from '../controllers';
import makeCallback from '../express-callback';
import authorize from '../utils/middlewares/authorization';
import { Admin, Customer } from '../utils/role';

function getFavoriteRoutes() {
  const router = express.Router();

  /*
        #swagger.start
       #swagger.path = '/favorite/{email}'
       #swagger.method = 'get'
       #swagger.produces = ["application/json"]
       #swagger.description = 'Endpoint para obtener los productos favoritos de un usuario'
       #swagger.parameters['email'] = { description: 'Email del usuario.' }
       #swagger.tags = ['Favorite']
       #swagger.responses[200] = { 
               schema: { $ref: "#/definitions/Favorite" },
               description: 'Listado de favorito(s).' 
        }
    */
  router.get(
    '/:email',
    authorize([Admin, Customer]),
    makeCallback(favoriteControllers.getFavoriteByCustomer)
  );
  // #swagger.end

  /*
        #swagger.start
       #swagger.path = '/favorite'
       #swagger.method = 'post'
       #swagger.produces = ["application/json"]
       #swagger.description = 'Endpoint para agregar un favorito'
       #swagger.parameters['newFavorite'] = {
               in: 'body',
               description: 'Información del favorito.',
               required: true,
               type: 'object',
               schema: { $ref: "#/definitions/Favorite" }
        }
       #swagger.tags = ['Favorite']
       #swagger.responses[201] = { 
               schema: { $ref: "#/definitions/Favorite" },
               description: 'Favorito agregada exitosamente.' 
        }
    */
  router.post(
    '/',
    authorize([Admin, Customer]),
    makeCallback(favoriteControllers.postFavorite)
  );
  // #swagger.end

  /*
        #swagger.start
       #swagger.path = '/favorite/{email}/{proId}'
       #swagger.method = 'delete'
       #swagger.produces = ["application/json"]
       #swagger.description = 'Endpoint para borrar una favorito'
       #swagger.parameters['email'] = { description: 'Email al que pertenece.' }
       #swagger.parameters['proId'] = { description: 'Id del proucto.' }
       #swagger.tags = ['Favorite']
       #swagger.responses[200] = { 
               schema: { message: "Favorite successfully deleted" },
               description: 'Favorito Borrado.' 
        }
        #swagger.responses[400] = { 
               schema: { error: "Favorite not found" },
               description: 'Favorite no encontrado.' 
        }
    */
  router.delete(
    '/:owner/:proId',
    authorize([Admin, Customer]),
    makeCallback(favoriteControllers.deleteFavorite)
  );
  // #swagger.end

  return router;
}

export { getFavoriteRoutes };
