import express from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import { config } from '../config/index';
import { getRoutes } from './routes';

// initialization
const app = express();

// middlewares
app.use(morgan('dev'));
app.use(bodyParser.json());

// routes
app.use('/api', getRoutes());

app.listen(config.port, () => {
    console.log(`Server running on http://localhost:${config.port}`);
});

export default app