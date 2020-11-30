const chai = require('chai');
const chaiHttp = require('chai-http');
const { getDefaultCustomer } = require('./common.test');

chai.should();
chai.use(chaiHttp);

const url = 'http://localhost:3000/api';

describe('Auth', () => {
  describe('Sign-Up', () => {
    it('it should POST a customer', (done) => {
      chai
        .request(url)
        .post('/auth/signup')
        .send(getDefaultCustomer())
        .end((err, res) => {
          res.should.have.status(201);
          res.should.be.a('object');
          res.body.should.have.property('message');
          res.body.should.have
            .property('message')
            .eql('Customer successfully register');
          res.body.should.have.property('data');
          res.body.should.have.property('data').should.be.a('object');
          done();
        });
    });

    it('it should not POST a customer because already exists', (done) => {
      chai
        .request(url)
        .post('/auth/signup')
        .send(getDefaultCustomer())
        .end((err, res) => {
          res.should.have.status(400);
          res.should.be.a('object');
          res.body.should.have.property('error');
          res.body.should.have
            .property('error')
            .eql('auth/user-already-exists');
          done();
        });
    });
  });

  describe('Sign-In', () => {
    it('it should not AUTH because user not found', (done) => {
      chai
        .request(url)
        .post('/auth/signin')
        .send({ email: 'user@not.found.com', password: 'password' })
        .end((err, res) => {
          res.should.have.status(403);
          res.should.be.a('object');
          res.body.should.have.property('error');
          res.body.should.have.property('error').eql('auth/user-not-found');
          done();
        });
    });

    it('it should not AUTH with right user but wrong password', (done) => {
      chai
        .request(url)
        .post('/auth/signin')
        .send({ email: getDefaultCustomer().email, password: 'wrongPassword' })
        .end((err, res) => {
          res.should.have.status(403);
          res.should.be.a('object');
          res.body.should.have.property('error').eql('auth/invalid-password');
          done();
        });
    });

    it('it should AUTH -> should retrieve the token', (done) => {
      chai
        .request(url)
        .post('/auth/signin')
        .send(getDefaultCustomer())
        .end((err, res) => {
          res.should.have.status(200);
          res.should.be.a('object');
          res.body.should.have.property('token');
          res.body.should.have.property('token').lengthOf.above(0);
          done();
        });
    });
  });
});
