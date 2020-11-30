const chai = require('chai');
const chaiHttp = require('chai-http');
const { loginWithDefaultUser, getDefaultCustomer } = require('./common.test');

chai.should();
chai.use(chaiHttp);

const url = 'http://localhost:3000/api';
let token;

describe('Customers', () => {
  before(async () => {
    const res = await loginWithDefaultUser();
    token = res.body.token;
  });

  describe('/GET customer', () => {
    it('it should GET a customer by email', (done) => {
      chai
        .request(url)
        .get(`/customer/${getDefaultCustomer().email}`)
        .set({ Authorization: `Bearer ${token}` })
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('object');
          res.body.should.have.property('message');
          res.body.should.have.property('message').eql('Retrieve Customer');
          res.body.should.have.property('data');
          done();
        });
    });

    it('it should not GET a customer because not found', (done) => {
      const email = 'other@email.com';
      chai
        .request(url)
        .get(`/customer/${email}`)
        .set({ Authorization: `Bearer ${token}` })
        .end((err, res) => {
          res.should.have.status(400);
          res.body.should.be.a('object');
          res.body.should.have.property('error');
          res.body.should.have.property('error').eql('Customer not found');
          done();
        });
    });
  });

  describe('/PUT customer', () => {
    it('it should UPDATE a customer', (done) => {
      const customer = getDefaultCustomer();
      customer.billing_address = 'new address';
      chai
        .request(url)
        .put('/customer')
        .set({ Authorization: `Bearer ${token}` })
        .send(customer)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.have.property('message');
          res.body.should.have
            .property('message')
            .eql('Customer successfully updated');
          res.body.should.have.property('data');
          res.body.should.have.property('data').should.be.a('object');
          done();
        });
    });
    it('it should not UPDATE a customer without email field', (done) => {
      const customer = {
        first_name: 'Test First Name',
        last_name: 'Test Last Name',
        password: 'testPassword',
      };
      chai
        .request(url)
        .put('/customer')
        .set({ Authorization: `Bearer ${token}` })
        .send(customer)
        .end((err, res) => {
          res.should.have.status(400);
          res.body.should.have.property('error');
          res.body.should.have.property('error').eql('User must have a email');
          done();
        });
    });
  });

  describe('/DELETE customer', () => {
    it('it should not DELETE a customer without email param', (done) => {
      chai
        .request(url)
        .delete(`/customer/`)
        .set({ Authorization: `Bearer ${token}` })
        .end((err, res) => {
          res.should.have.status(404);
          res.body.should.be.a('object');
          res.body.should.have.property('error');
          res.body.should.have.property('error').eql('Not found.');
          done();
        });
    });

    it('it should not DELETE a customer because not exists', (done) => {
      chai
        .request(url)
        .delete(`/customer/emailNotExists`)
        .set({ Authorization: `Bearer ${token}` })
        .end((err, res) => {
          res.should.have.status(400);
          res.body.should.be.a('object');
          res.body.should.have.property('error');
          res.body.should.have.property('error').eql('Customer not found.');
          done();
        });
    });

    it('it should DELETE a customer', (done) => {
      chai
        .request(url)
        .delete(`/customer/${getDefaultCustomer().email}`)
        .set({ Authorization: `Bearer ${token}` })
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('object');
          res.body.should.have.property('message');
          res.body.should.have
            .property('message')
            .eql('Customer successfully deleted');
          res.body.should.have.property('data');
          res.body.should.have.property('data').should.be.a('object');
          done();
        });
    });
  });
});
