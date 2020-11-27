const swaggerAutogen = require('swagger-autogen')();

const outputFile = './swagger_output.json';
const endpointsFiles = ['src/routes/products.js'];

const doc = {
    info: {
        version: '0.0.1',
        title: 'BoConcept API',
        description: 'RESTful API for BoConcept Furniture',
    },
    host: 'localhost:3000',
    basePath: '/',
    schemes: ['http', 'https'],
    consumes: ['application/json'],
    produces: ['application/json'],
    tags: [
        {
            name: 'Product',
            description: 'Endpoints',
        },
    ],
    definitions: {
        Product: {
            pro_id: '1334558DP890',
            name: 'Osaka',
            description:
                'Las esbeltas proporciones del sofá Osaka lo convierten en un mueble...',
            collection: 2020,
            price: 199999,
        },
    },
};

swaggerAutogen(outputFile, endpointsFiles, doc);
