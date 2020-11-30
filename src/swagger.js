const swaggerAutogen = require('swagger-autogen')();

const outputFile = './swagger_output.json';
const endpointsFiles = [
  'src/routes/products.js',
  'src/routes/auth.js',
  'src/routes/customer.js',
  'src/routes/category.js',
];

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
      name: 'Auth',
      description: 'Endpoints',
    },
    {
      name: 'Customer',
      description: 'Endpoints',
    },
    {
      name: 'Product',
      description: 'Endpoints',
    },
    {
      name: 'Category',
      description: 'Endpoints',
    },
  ],
  definitions: {
    Customer: {
      first_name: 'Miguel',
      last_name: 'Orrego',
      email: 'miguel@correo.com',
      billing_address: 'Avenida simpre viva',
      phone: '1234567',
    },
    Credentials: {
      email: 'miguelorrego@outlook.com',
      password: 'myPassword',
    },
    Product: {
      pro_id: '1334558DP890',
      name: 'Osaka',
      description:
        'Las esbeltas proporciones del sofá Osaka lo convierten en un mueble...',
      collection: 2020,
      price: 199999,
    },
    Category: {
      cat_id: 2,
      name: 'sillas',
    },
    ListCategories: {
      message: 'List Category',
      data: [
        {
          cat_id: 'n',
          name: 'name[n]',
        },
      ],
    },
    AccesToken: {
      token:
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoxLCJ1c2VybmFtZSI6Im1hb2MiLCJlbWFpbCI6Im1hb2NAZ21haWwuY29tIn0sImlhdCI6MTYwNjUxODIwMCwiZXhwIjoxNjA3MzgyMjAwfQ.zcY_fWzC0C8f_ROh3dyg9htoMOC0Er2CvqXTsxkE50g',
    },
  },
};

swaggerAutogen(outputFile, endpointsFiles, doc);
