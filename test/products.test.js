const chai = require('chai');
const chaiHttp = require('chai-http');

chai.should();

chai.use(chaiHttp);
const url = 'http://localhost:3000/api';

describe('Products', () => {
    describe('/GET product', () => {
        it('it should GET all the products', (done) => {
            chai.request(url)
                .get('/product')
                .end((err, res) => {
                    res.should.have.status(201);
                    res.body.should.be.a('object');
                    res.body.should.have.property('message');
                    res.body.should.have.property('data');
                    done();
                });
        });
        it('it should GET a product by id', (done) => {
            chai.request(url)
                .get('/product/300003101000096')
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    res.body.should.have.property('message');
                    res.body.should.have.property('data');
                    done();
                });
        });
    });

    describe('/POST product', () => {
        it('it should not POST a product without id field', (done) => {
            const product = {
                name: 'Test Product',
                description: 'Test description',
                collection: 2020,
                price: 1650000,
            };
            chai.request(url)
                .post('/product')
                .send(product)
                .end((err, res) => {
                    res.should.have.status(400);
                    res.body.should.be.a('object');
                    res.body.should.have.property('error');
                    res.body.should.have
                        .property('error')
                        .eql('Product must hava a ID');
                    done();
                });
        });

        it('it should POST a product', (done) => {
            const product = {
                pro_id: '331523P28',
                name: 'Test Product',
                description: 'Test description',
                collection: 2021,
                price: 280615,
            };
            chai.request(url)
                .post('/product')
                .send(product)
                .end((err, res) => {
                    res.should.have.status(201);
                    res.body.should.be.a('object');
                    res.body.should.have.property('message');
                    res.body.should.have
                        .property('message')
                        .eql('Product successfully added');
                    res.body.should.have.property('data');
                    res.body.should.have.property('data').should.be.a('object');
                    done();
                });
        });

        it('it should not POST a product because it already exists', (done) => {
            const product = {
                pro_id: '331523P28',
                name: 'Test Product',
                description: 'Test description already exists',
                collection: 2021,
                price: 280615,
            };
            chai.request(url)
                .post('/product')
                .send(product)
                .end((err, res) => {
                    res.should.have.status(400);
                    res.body.should.be.a('object');
                    res.body.should.have.property('error');
                    res.body.should.have
                        .property('error')
                        .eql('Product already exists.');
                    done();
                });
        });
    });

    describe('/PUT product', () => {
        it('it should not UPDATE a product because not exists', (done) => {
            const product = {
                pro_id: 'idNotExists',
                name: 'Test Product updated',
                description: 'Test description updated',
                collection: 2021,
                price: 280615,
            };
            chai.request(url)
                .put('/product')
                .send(product)
                .end((err, res) => {
                    res.should.have.status(400);
                    res.body.should.be.a('object');
                    res.body.should.have.property('error');
                    res.body.should.have
                        .property('error')
                        .eql('Product not found.');
                    done();
                });
        });

        it('it should not UPDATE a product whitout Id field', (done) => {
            const product = {
                name: 'Test Product updated',
                description: 'Test description updated',
                collection: 2021,
                price: 280615,
            };
            chai.request(url)
                .put('/product')
                .send(product)
                .end((err, res) => {
                    res.should.have.status(400);
                    res.body.should.be.a('object');
                    res.body.should.have.property('error');
                    res.body.should.have
                        .property('error')
                        .eql('Product must hava a ID');
                    done();
                });
        });

        it('it should UPDATE a product', (done) => {
            const product = {
                pro_id: '331523P28',
                name: 'Test Product updated',
                description: 'Test description updated',
                collection: 2021,
                price: 280615,
            };
            chai.request(url)
                .put('/product')
                .send(product)
                .end((err, res) => {
                    res.should.have.status(201);
                    res.body.should.be.a('object');
                    res.body.should.have.property('message');
                    res.body.should.have
                        .property('message')
                        .eql('Product successfully updated');
                    res.body.should.have.property('data');
                    res.body.should.have.property('data').should.be.a('object');
                    done();
                });
        });
    });

    describe('/DELETE product', () => {
        it('it should not DELETE a product because not exists', (done) => {
            chai.request(url)
                .delete('/product/idNotExists')
                .end((err, res) => {
                    res.should.have.status(400);
                    res.body.should.be.a('object');
                    res.body.should.have.property('error');
                    res.body.should.have
                        .property('error')
                        .eql('Product not found.');
                    done();
                });
        });

        it('it should not DELETE a product whitout Id field', (done) => {
            chai.request(url)
                .delete('/product/')
                .end((err, res) => {
                    res.should.have.status(404);
                    res.body.should.be.a('object');
                    res.body.should.have.property('error');
                    res.body.should.have.property('error').eql('Not found.');
                    done();
                });
        });

        it('it should DELETE a product given the id', (done) => {
            chai.request(url)
                .delete('/product/331523P28')
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    res.body.should.have.property('message');
                    res.body.should.have
                        .property('message')
                        .eql('Product successfully deleted');
                    done();
                });
        });
    });
});
