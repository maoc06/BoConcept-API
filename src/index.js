import express from 'express';
import morgan from 'morgan';
import swaggerUi from 'swagger-ui-express';
import swaggerFile from '../swagger_output.json';
import { config } from '../config/index';
import { getRoutes } from './routes';

// initialization
const app = express();

// middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerFile));

// routes
app.use('/api', getRoutes());

app.listen(config.port, () => {
  console.log(`Server running on http://localhost:${config.port}`);
});
