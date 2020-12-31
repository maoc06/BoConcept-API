import express from 'express';
import { authControllers } from '../controllers';
import makeCallback from '../express-callback';

function getAuthRoutes() {
  const router = express.Router();
  /*
      #swagger.start
       #swagger.path = '/auth/signup'
       #swagger.method = 'post'
       #swagger.produces = ["application/json"]
       #swagger.description = 'Endpoint para registrar un usuario'
       #swagger.parameters['newCustomer'] = {
               in: 'body',
               description: 'Información del customer.',
               required: true,
               type: 'object',
               schema: { $ref: "#/definitions/Customer" }
        }
       #swagger.tags = ['Auth']
       #swagger.responses[201] = { 
               schema: { $ref: "#/definitions/Customer" },
               description: 'Customer successfully register' 
        }
       #swagger.responses[400] = { 
               schema: { error: "auth/user-already-exists" },
               description: 'Customer email already exists' 
        }
    */
  router.post('/signup', makeCallback(authControllers.signUp));
  // #swagger.end

  /*
        #swagger.start
       #swagger.path = '/auth/signin'
       #swagger.method = 'post'
       #swagger.produces = ["application/json"]
       #swagger.description = 'Endpoint para autenticar un usuario'
       #swagger.parameters['userCredentials'] = {
               in: 'body',
               description: 'Las crendenciales de autenticación.',
               required: true,
               type: 'object',
               schema: { $ref: "#/definitions/Credentials" }
        }
       #swagger.tags = ['Auth']
       #swagger.responses[200] = { 
               schema: { $ref: "#/definitions/AccesToken" },
               description: 'Access Token.' 
        }
        #swagger.responses[403] = { 
               schema: { error: "auth/<code-error>"},
               description: 'Forbidden' 
        }
    */
  router.post('/signin', makeCallback(authControllers.signIn));
  // #swagger.end
  return router;
}

export { getAuthRoutes };
