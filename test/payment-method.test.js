const chai = require('chai');
const chaiHttp = require('chai-http');
const { loginWithDefaultUser } = require('./common.test');

chai.should();
chai.use(chaiHttp);

const url = 'http://localhost:3000/api';
let token;
let lastPayId;

describe('Payment Method', () => {
  before(async () => {
    const res = await loginWithDefaultUser();
    token = res.body.token;
  });

  describe('/GET payment method', () => {
    it('it should GET all payment methods', (done) => {
      chai
        .request(url)
        .get('/paymethod')
        .set({ Authorization: `Bearer ${token}` })
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('object');
          res.body.should.have.property('message');
          res.body.should.have.property('message').eql('List Payment Method');
          res.body.should.have.property('data');
          done();
        });
    });

    it('it should GET a payment method by id', (done) => {
      chai
        .request(url)
        .get('/paymethod/3')
        .set({ Authorization: `Bearer ${token}` })
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('object');
          res.body.should.have.property('message');
          res.body.should.have.property('message').eql('List Payment Method');
          res.body.should.have.property('data');
          res.body.should.have.property('data').should.be.a('object');
          done();
        });
    });

    it('it should not GET a payment method because not exists', (done) => {
      chai
        .request(url)
        .get('/paymethod/9999')
        .set({ Authorization: `Bearer ${token}` })
        .end((err, res) => {
          res.should.have.status(400);
          res.body.should.be.a('object');
          res.body.should.have.property('error');
          res.body.should.have
            .property('error')
            .eql('Payment method not found');
          done();
        });
    });
  });

  describe('/POST payment method', () => {
    it('it should not POST a payment method without name', (done) => {
      const paymentMethod = {};
      chai
        .request(url)
        .post('/paymethod')
        .set({ Authorization: `Bearer ${token}` })
        .send(paymentMethod)
        .end((err, res) => {
          res.should.have.status(400);
          res.body.should.be.a('object');
          res.body.should.have.property('error');
          res.body.should.have
            .property('error')
            .eql('Payment method must have a name');
          done();
        });
    });

    it('it should POST a payment method', (done) => {
      const paymentMethod = {
        name: 'Test payment method',
      };
      chai
        .request(url)
        .post('/paymethod')
        .set({ Authorization: `Bearer ${token}` })
        .send(paymentMethod)
        .end((err, res) => {
          res.should.have.status(201);
          res.body.should.be.a('object');
          res.body.should.have.property('message');
          res.body.should.have
            .property('message')
            .eql('Payment method successfully added');
          res.body.should.have.property('data');
          res.body.should.have.property('data').should.be.a('object');
          lastPayId = res.body.data.pay_id;
          done();
        });
    });
  });

  describe('/PUT payment method', () => {
    it('it should not UPDATE a payment method because not exists', (done) => {
      const paymentMethod = {
        pay_id: 9999,
        name: 'Test payment method updated',
      };
      chai
        .request(url)
        .put('/paymethod')
        .set({ Authorization: `Bearer ${token}` })
        .send(paymentMethod)
        .end((err, res) => {
          res.should.have.status(400);
          res.body.should.be.a('object');
          res.body.should.have.property('error');
          res.body.should.have
            .property('error')
            .eql('Payment method not found.');
          done();
        });
    });

    it('it should not UPDATE a payment method whitout Id field', (done) => {
      const paymentMethod = {
        name: 'Test payment method updated',
      };
      chai
        .request(url)
        .put('/paymethod')
        .set({ Authorization: `Bearer ${token}` })
        .send(paymentMethod)
        .end((err, res) => {
          res.should.have.status(400);
          res.body.should.be.a('object');
          res.body.should.have.property('error');
          res.body.should.have
            .property('error')
            .eql('Payment method not found.');
          done();
        });
    });

    it('it should UPDATE a payment method', (done) => {
      const paymentMethod = {
        pay_id: lastPayId,
        name: 'Test payment method updated',
      };
      chai
        .request(url)
        .put('/paymethod')
        .set({ Authorization: `Bearer ${token}` })
        .send(paymentMethod)
        .end((err, res) => {
          res.should.have.status(201);
          res.body.should.be.a('object');
          res.body.should.have.property('message');
          res.body.should.have
            .property('message')
            .eql('Payment method successfully updated');
          res.body.should.have.property('data');
          res.body.should.have.property('data').should.be.a('object');
          done();
        });
    });
  });

  describe('/DELETE payment method', () => {
    it('it should not DELETE a payment method because not exists', (done) => {
      chai
        .request(url)
        .delete(`/paymethod/${8888}`)
        .set({ Authorization: `Bearer ${token}` })
        .end((err, res) => {
          res.should.have.status(400);
          res.body.should.be.a('object');
          res.body.should.have.property('error');
          res.body.should.have
            .property('error')
            .eql('Payment method not found.');
          done();
        });
    });

    it('it should not DELETE a payment method whitout Id field', (done) => {
      chai
        .request(url)
        .delete('/paymethod/')
        .set({ Authorization: `Bearer ${token}` })
        .end((err, res) => {
          res.should.have.status(404);
          res.body.should.be.a('object');
          res.body.should.have.property('error');
          res.body.should.have.property('error').eql('Not found.');
          done();
        });
    });

    it('it should DELETE a payment method given the id', (done) => {
      chai
        .request(url)
        .delete(`/paymethod/${lastPayId}`)
        .set({ Authorization: `Bearer ${token}` })
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('object');
          res.body.should.have.property('message');
          res.body.should.have
            .property('message')
            .eql('Payment method successfully deleted');
          done();
        });
    });
  });
});
