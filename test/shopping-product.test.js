const chai = require('chai');
const chaiHttp = require('chai-http');
const { loginWithDefaultUser } = require('./common.test');

chai.should();

chai.use(chaiHttp);
const url = 'http://localhost:3000/api';
let lastShprId;
let token;

describe('Shopping Product', () => {
  before(async () => {
    const res = await loginWithDefaultUser();
    token = res.body.token;
  });

  describe('/GET shopping product', () => {
    it('it should GET all the shopping products', (done) => {
      chai
        .request(url)
        .get('/shopping-product')
        .set({ Authorization: `Bearer ${token}` })
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('object');
          res.body.should.have.property('message');
          res.body.should.have.property('data');
          done();
        });
    });

    it('it should GET a shopping product by shpr_id', (done) => {
      chai
        .request(url)
        .get('/shopping-product/1')
        .set({ Authorization: `Bearer ${token}` })
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('object');
          res.body.should.have.property('message');
          res.body.should.have.property('data');
          done();
        });
    });

    it('it should GET a shopping product by car_id', (done) => {
      chai
        .request(url)
        .get('/shopping-product/by-cart/1')
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

  describe('/POST shopping product', () => {
    it('it should not POST a shopping product without pro_id field', (done) => {
      const shoppingProduct = {
        car_id: 1,
        quantity: 2,
        total: 15000,
      };
      chai
        .request(url)
        .post('/shopping-product')
        .set({ Authorization: `Bearer ${token}` })
        .send(shoppingProduct)
        .end((err, res) => {
          res.should.have.status(400);
          res.body.should.be.a('object');
          res.body.should.have.property('error');
          res.body.should.have
            .property('error')
            .eql('Shopping product must have a product id');
          done();
        });
    });

    it('it should not POST a shopping product because pro_id not existing', (done) => {
      const shoppingProduct = {
        pro_id: 'proIdNotExisting',
        car_id: 1,
        total: 15000,
        quantity: 2,
      };
      chai
        .request(url)
        .post('/shopping-product')
        .set({ Authorization: `Bearer ${token}` })
        .send(shoppingProduct)
        .end((err, res) => {
          res.should.have.status(400);
          res.body.should.be.a('object');
          res.body.should.have.property('error');
          res.body.should.have.property('error').eql('Product not existing');
          done();
        });
    });

    it('it should not POST a shopping product because pro_id not existing', (done) => {
      const shoppingProduct = {
        pro_id: '3900075OXW63072',
        car_id: 1999999,
        total: 15000,
        quantity: 2,
      };
      chai
        .request(url)
        .post('/shopping-product')
        .set({ Authorization: `Bearer ${token}` })
        .send(shoppingProduct)
        .end((err, res) => {
          res.should.have.status(400);
          res.body.should.be.a('object');
          res.body.should.have.property('error');
          res.body.should.have.property('error').eql('Cart not existing');
          done();
        });
    });

    it('it should POST a shopping product', (done) => {
      const shoppingProduct = {
        pro_id: '3900075OXW63072',
        car_id: 1,
        total: 15000,
        quantity: 2,
      };
      chai
        .request(url)
        .post('/shopping-product')
        .set({ Authorization: `Bearer ${token}` })
        .send(shoppingProduct)
        .end((err, res) => {
          res.should.have.status(201);
          res.body.should.be.a('object');
          res.body.should.have.property('message');
          res.body.should.have
            .property('message')
            .eql('Shopping product successfully added');
          res.body.should.have.property('data');
          res.body.should.have.property('data').should.be.a('object');
          lastShprId = res.body.data.shpr_id;
          done();
        });
    });
  });

  describe('/PUT shopping product', () => {
    it('it should not UPDATE a shopping product because not exists', (done) => {
      const shoppingProduct = {
        shpr_id: 8888,
        pro_id: '3900075OXW63072',
        car_id: 1,
        quantity: 2,
        total: 15000,
      };
      chai
        .request(url)
        .put('/shopping-product')
        .set({ Authorization: `Bearer ${token}` })
        .send(shoppingProduct)
        .end((err, res) => {
          res.should.have.status(400);
          res.body.should.be.a('object');
          res.body.should.have.property('error');
          res.body.should.have
            .property('error')
            .eql('Shopping product not found.');
          done();
        });
    });

    it('it should not UPDATE a shopping product whitout Id field', (done) => {
      const shoppingProduct = {
        pro_id: '3900075OXW63072',
        car_id: 1,
        quantity: 2,
        total: 15000,
      };
      chai
        .request(url)
        .put('/shopping-product')
        .set({ Authorization: `Bearer ${token}` })
        .send(shoppingProduct)
        .end((err, res) => {
          res.should.have.status(400);
          res.body.should.be.a('object');
          res.body.should.have.property('error');
          res.body.should.have
            .property('error')
            .eql('Shopping product not found.');
          done();
        });
    });

    it('it should UPDATE a shopping product', (done) => {
      const shoppingProduct = {
        shpr_id: lastShprId,
        pro_id: '3900075OXW63072',
        car_id: 1,
        quantity: 2,
        total: 15000,
      };
      chai
        .request(url)
        .put('/shopping-product')
        .set({ Authorization: `Bearer ${token}` })
        .send(shoppingProduct)
        .end((err, res) => {
          res.should.have.status(201);
          res.body.should.be.a('object');
          res.body.should.have.property('message');
          res.body.should.have
            .property('message')
            .eql('Shopping product successfully updated');
          res.body.should.have.property('data');
          res.body.should.have.property('data').should.be.a('object');
          done();
        });
    });
  });

  describe('/DELETE shopping product', () => {
    it('it should not DELETE a shopping product because not exists', (done) => {
      chai
        .request(url)
        .delete(`/shopping-product/${88888}`)
        .set({ Authorization: `Bearer ${token}` })
        .end((err, res) => {
          res.should.have.status(400);
          res.body.should.be.a('object');
          res.body.should.have.property('error');
          res.body.should.have
            .property('error')
            .eql('Shopping product not found.');
          done();
        });
    });

    it('it should not DELETE a shopping product whitout Id field', (done) => {
      chai
        .request(url)
        .delete('/shopping-product/')
        .set({ Authorization: `Bearer ${token}` })
        .end((err, res) => {
          res.should.have.status(404);
          res.body.should.be.a('object');
          res.body.should.have.property('error');
          res.body.should.have.property('error').eql('Not found.');
          done();
        });
    });

    it('it should DELETE a shopping product given the id', (done) => {
      chai
        .request(url)
        .delete(`/shopping-product/${lastShprId}`)
        .set({ Authorization: `Bearer ${token}` })
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('object');
          res.body.should.have.property('message');
          res.body.should.have
            .property('message')
            .eql('Shopping product successfully deleted');
          done();
        });
    });
  });
});
