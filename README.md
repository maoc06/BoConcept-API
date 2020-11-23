# BoConcept-API :chair:

For the purpose of practicing Node.js perform this
RESTful API with the help of express. The business
case is the Danish furniture retail chain, [BoConcept](https://www.boconcept.com/).

:warning:
This project is only for educational purposes. It is
not intended to use the BoConcept brand for any other purpose.

## Architecture

The architecture used for this project is a
[Clean Architecture](https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html)
with the purpose of avoiding to the maximum the coupling
of the business logic with the framework and the databases.

![alt text](https://blog.cleancoder.com/uncle-bob/images/2012-08-13-the-clean-architecture/CleanArchitecture.jpg "Clean Architecture - Uncle Bob")

## Endpoints

To review the documentation of routes and endpoints, execute the following commands:

`npm run swagger-autogen`

> :bulb: This will generate a json configuration file auto generated with the help of [Swagger](https://swagger.io/).

Then run the server with

`npm start`

and go to <http://localhost:3000/doc> to see the documentation.
