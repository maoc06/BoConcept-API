const swaggerAutogen = require('swagger-autogen')();

const outputFile = './swagger_output.json';
const endpointsFiles = [
  'src/routes/products.js',
  'src/routes/auth.js',
  'src/routes/customer.js',
  'src/routes/category.js',
  'src/routes/address.js',
  'src/routes/cart.js',
  'src/routes/credit-card.js',
  'src/routes/favorite.js',
  'src/routes/order.js',
  'src/routes/payment-method.js',
  // 'src/routes/shipping-method.js',
  // 'src/routes/shopping-product.js',
  'src/routes/store.js',
];

const doc = {
  info: {
    version: '0.9.9',
    title: 'BoConcept API',
    description: 'RESTful API for BoConcept Furniture',
    contact: {
      name: 'Miguel Orrego',
      email: 'miguelorrego@outlook.com',
    },
  },
  host: 'localhost:3000',
  basePath: '/api/',
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
    {
      name: 'Address',
      description: 'Endpoints',
    },
    {
      name: 'Cart',
      description: 'Endpoints',
    },
    {
      name: 'CreditCard',
      description: 'Endpoints',
    },
    {
      name: 'Favorite',
      description: 'Endpoints',
    },
    {
      name: 'Order',
      description: 'Endpoints',
    },
    {
      name: 'PaymentMethod',
      description: 'Endpoints',
    },
    // {
    //   name: 'ShippingMethod',
    //   description: 'Endpoints',
    // },
    // {
    //   name: 'ShoppingProduct',
    //   description: 'Endpoints',
    // },
    {
      name: 'Store',
      description: 'Endpoints',
    },
  ],
  definitions: {
    Customer: {
      first_name: 'Miguel',
      last_name: 'Orrego',
      email: 'miguel@correo.com',
      password: 'myP@assword',
      rol_id: 2,
      enable: 1,
    },
    Credentials: {
      email: 'miguelorrego@outlook.com',
      password: 'myP@ssword',
    },
    Product: {
      pro_id: '1334558DP890',
      name: 'Osaka',
      description:
        'Las esbeltas proporciones del sofá Osaka lo convierten en un mueble...',
      collection: 2020,
      price: 199999,
      enable: 1,
    },
    Category: {
      cat_id: 2,
      name: 'sillas',
      enable: 1,
    },
    Address: {
      address_id: 1,
      name: 'Home',
      billing_address: '704 Hauser Street',
      country: 'EE. UU.',
      city: 'New York',
      zip_code: 10027,
      phone: 123456789,
      customer_owner: 'miguelorrego@outlook.com',
      is_default: 'N',
    },
    Cart: {
      car_id: 1,
      email: 'miguelorrego@outlook.com',
      card_number: '4125325612358965',
      billing_addres_id: 5,
      shipping_method_id: 1,
      payment_date: '2020/11/29',
      enable: 1,
    },
    CreditCard: {
      cardholders_name: 'MIGUEL ORREGO',
      card_number: '4125325612358965',
      expiry_month: 11,
      expiry_year: 2022,
      cvv: 123,
      credit_card_owner: 'miguelorrego@outlook.com',
      pay_id: 1,
    },
    Favorite: {
      customer_owner: 'miguelorrego@outlook.com',
      product_id: '1334558DP890',
    },
    Order: {
      order_number: 123456,
      car_id: 1,
      email: 'miguelorrego@outlook.com',
      card_number: '4125325612358965',
      pay_id: 1,
      billing_addres_id: 1,
      shipping_method_id: 1,
      store_id: 1,
      subtotal: 1548,
      shipping_cost: 575,
      payment_date: '2020/11/29',
      enable: 2,
    },
    PaymentMethod: {
      pay_id: 1,
      name: 'visa',
      image_url: 'visa-url.png',
      enable: 1,
    },
    // ShippingMethod: {
    //   shipping_method_id: 1,
    //   name: 'Pick up at warehouse',
    // },
    // ShoppingProduct: {
    //   shpr_id: 1,
    //   pro_id: '1334558DP890',
    //   car_id: 1,
    //   quantity: 1,
    // },
    Store: {
      store_id: 1,
      title: 'BoConcept Title Store',
      description: '308 Negra Arroyo Lane',
      latitude: 35.106766,
      longitude: -106.629181,
      country: 'EE. UU.',
      city: 'Albuquerque',
    },
    ListCategories: {
      message: 'List Category',
      data: [
        {
          cat_id: 'n',
          name: 'name[n]',
          enable: 1,
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
