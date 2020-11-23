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

## Routes

### GET

- /api/product

> return a list of products

- /api/product/:id

> returns the product that matches the parameter id
