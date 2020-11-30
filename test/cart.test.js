const chai = require('chai');
const chaiHttp = require('chai-http');
const { loginWithDefaultUser, getDefaultCustomer } = require('./common.test');

chai.should();

chai.use(chaiHttp);
const url = 'http://localhost:3000/api';
let lastCartId;
let token;

describe('Cart', () => {
  before(async () => {
    const res = await loginWithDefaultUser();
    token = res.body.token;
  });

  describe('/POST cart', () => {
    it('it should not POST a cart without email field', (done) => {
      const cart = {
        pay_id: null,
        total: 0,
        quantity: 0,
      };
      chai
        .request(url)
        .post('/cart')
        .set({ Authorization: `Bearer ${token}` })
        .send(cart)
        .end((err, res) => {
          res.should.have.status(400);
          res.body.should.be.a('object');
          res.body.should.have.property('error');
          res.body.should.have
            .property('error')
            .eql('The cart must have have a email (customer owner)');
          done();
        });
    });

    it('it should not POST a cart becasue email not existing', (done) => {
      const cart = {
        email: 'not@existing.com',
        pay_id: null,
        total: 0,
        quantity: 0,
      };
      chai
        .request(url)
        .post('/cart')
        .set({ Authorization: `Bearer ${token}` })
        .send(cart)
        .end((err, res) => {
          res.should.have.status(400);
          res.body.should.be.a('object');
          res.body.should.have.property('error');
          res.body.should.have
            .property('error')
            .eql('Customer with email not@existing.com not existing');
          done();
        });
    });

    it('it should POST a cart', (done) => {
      const cart = {
        email: getDefaultCustomer().email,
        pay_id: null,
        total: 0,
        quantity: 0,
      };
      chai
        .request(url)
        .post('/cart')
        .set({ Authorization: `Bearer ${token}` })
        .send(cart)
        .end((err, res) => {
          res.should.have.status(201);
          res.body.should.be.a('object');
          res.body.should.have.property('message');
          res.body.should.have
            .property('message')
            .eql('Cart successfully added');
          res.body.should.have.property('data');
          res.body.should.have.property('data').should.be.a('object');
          lastCartId = res.body.data.car_id;
          done();
        });
    });
  });

  describe('/GET cart', () => {
    it('it should GET all carts', (done) => {
      chai
        .request(url)
        .get('/cart')
        .set({ Authorization: `Bearer ${token}` })
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('object');
          res.body.should.have.property('message');
          res.body.should.have.property('data');
          done();
        });
    });

    it('it should not GET a cart because not existing', (done) => {
      chai
        .request(url)
        .get(`/cart/${899999}`)
        .set({ Authorization: `Bearer ${token}` })
        .end((err, res) => {
          res.should.have.status(400);
          res.body.should.be.a('object');
          res.body.should.have.property('error');
          res.body.should.have.property('error').eql('Cart not found.');
          done();
        });
    });

    it('it should GET a cart by car_id', (done) => {
      chai
        .request(url)
        .get(`/cart/${lastCartId}`)
        .set({ Authorization: `Bearer ${token}` })
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('object');
          res.body.should.have.property('message');
          res.body.should.have.property('data');
          done();
        });
    });

    it('it should not GET a cart because email not existing', (done) => {
      chai
        .request(url)
        .get('/cart/by-customer/not@existing.com')
        .set({ Authorization: `Bearer ${token}` })
        .end((err, res) => {
          res.should.have.status(400);
          res.body.should.be.a('object');
          res.body.should.have.property('error');
          res.body.should.have
            .property('error')
            .eql('Customer with email not@existing.com not exists');
          done();
        });
    });

    it('it should GET a cart by email', (done) => {
      chai
        .request(url)
        .get(`/cart/by-customer/${getDefaultCustomer().email}`)
        .set({ Authorization: `Bearer ${token}` })
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('object');
          res.body.should.have.property('message');
          res.body.should.have.property('data');
          done();
        });
    });
  });

  describe('/PUT cart', () => {
    it('it should not UPDATE a cart because not exists', (done) => {
      const cart = {
        car_id: 888999,
        email: getDefaultCustomer().email,
        pay_id: null,
        total: 0,
        quantity: 0,
      };
      chai
        .request(url)
        .put('/cart')
        .set({ Authorization: `Bearer ${token}` })
        .send(cart)
        .end((err, res) => {
          res.should.have.status(400);
          res.body.should.be.a('object');
          res.body.should.have.property('error');
          res.body.should.have.property('error').eql('Cart not found.');
          done();
        });
    });

    it('it should not UPDATE a cart whitout Id field', (done) => {
      const cart = {
        email: getDefaultCustomer().email,
        pay_id: null,
        total: 0,
        quantity: 0,
      };
      chai
        .request(url)
        .put('/cart')
        .set({ Authorization: `Bearer ${token}` })
        .send(cart)
        .end((err, res) => {
          res.should.have.status(400);
          res.body.should.be.a('object');
          res.body.should.have.property('error');
          res.body.should.have.property('error').eql('Cart not found.');
          done();
        });
    });

    it('it should not UPDATE a cart because payment not exists', (done) => {
      const cart = {
        car_id: lastCartId,
        email: getDefaultCustomer().email,
        pay_id: 99999,
        total: 0,
        quantity: 0,
      };
      chai
        .request(url)
        .put('/cart')
        .set({ Authorization: `Bearer ${token}` })
        .send(cart)
        .end((err, res) => {
          res.should.have.status(400);
          res.body.should.be.a('object');
          res.body.should.have.property('error');
          res.body.should.have
            .property('error')
            .eql('Payment method not existing');
          done();
        });
    });

    it('it should UPDATE a cart', (done) => {
      const cart = {
        car_id: lastCartId,
        email: getDefaultCustomer().email,
        pay_id: null,
        total: 0,
        quantity: 0,
      };
      chai
        .request(url)
        .put('/cart')
        .set({ Authorization: `Bearer ${token}` })
        .send(cart)
        .end((err, res) => {
          res.should.have.status(201);
          res.body.should.be.a('object');
          res.body.should.have.property('message');
          res.body.should.have
            .property('message')
            .eql('Cart successfully updated');
          res.body.should.have.property('data');
          res.body.should.have.property('data').should.be.a('object');
          done();
        });
    });
  });

  describe('/DELETE cart', () => {
    it('it should not DELETE a cart because not exists', (done) => {
      chai
        .request(url)
        .delete(`/cart/${88888}`)
        .set({ Authorization: `Bearer ${token}` })
        .end((err, res) => {
          res.should.have.status(400);
          res.body.should.be.a('object');
          res.body.should.have.property('error');
          res.body.should.have.property('error').eql('Cart not found.');
          done();
        });
    });

    it('it should not DELETE a cart whitout Id field', (done) => {
      chai
        .request(url)
        .delete('/cart/')
        .set({ Authorization: `Bearer ${token}` })
        .end((err, res) => {
          res.should.have.status(404);
          res.body.should.be.a('object');
          res.body.should.have.property('error');
          res.body.should.have.property('error').eql('Not found.');
          done();
        });
    });

    it('it should DELETE a cart given the id', (done) => {
      chai
        .request(url)
        .delete(`/cart/${lastCartId}`)
        .set({ Authorization: `Bearer ${token}` })
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('object');
          res.body.should.have.property('message');
          res.body.should.have
            .property('message')
            .eql('Cart successfully deleted');
          done();
        });
    });
  });
});
