const chai = require('chai');
const chaiHttp = require('chai-http');
const { loginWithDefaultAdminUser } = require('./common.test');

chai.should();
chai.use(chaiHttp);

const url = 'http://localhost:3000/api';
let token;
let lastCatId;

describe('Category', () => {
  before(async () => {
    const res = await loginWithDefaultAdminUser();
    token = res.body.token;
  });

  describe('/GET category', () => {
    it('it should GET all categories', (done) => {
      chai
        .request(url)
        .get('/category')
        .set({ Authorization: `Bearer ${token}` })
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('object');
          res.body.should.have.property('message');
          res.body.should.have.property('message').eql('List Category');
          res.body.should.have.property('data');
          done();
        });
    });

    it('it should GET a category by id', (done) => {
      chai
        .request(url)
        .get('/category/1')
        .set({ Authorization: `Bearer ${token}` })
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('object');
          res.body.should.have.property('message');
          res.body.should.have.property('message').eql('List Category');
          res.body.should.have.property('data');
          res.body.should.have.property('data').should.be.a('object');
          done();
        });
    });

    it('it should not GET a category because not exists', (done) => {
      chai
        .request(url)
        .get('/category/9999')
        .set({ Authorization: `Bearer ${token}` })
        .end((err, res) => {
          res.should.have.status(400);
          res.body.should.be.a('object');
          res.body.should.have.property('error');
          res.body.should.have.property('error').eql('Category not found');
          done();
        });
    });
  });

  describe('/POST category', () => {
    it('it should not POST a category without name', (done) => {
      const category = {};
      chai
        .request(url)
        .post('/category')
        .set({ Authorization: `Bearer ${token}` })
        .send(category)
        .end((err, res) => {
          res.should.have.status(400);
          res.body.should.be.a('object');
          res.body.should.have.property('error');
          res.body.should.have
            .property('error')
            .eql('Category must have a name');
          done();
        });
    });

    it('it should POST a category', (done) => {
      const category = {
        name: 'Test Category',
      };
      chai
        .request(url)
        .post('/category')
        .set({ Authorization: `Bearer ${token}` })
        .send(category)
        .end((err, res) => {
          res.should.have.status(201);
          res.body.should.be.a('object');
          res.body.should.have.property('message');
          res.body.should.have
            .property('message')
            .eql('Category successfully added');
          res.body.should.have.property('data');
          res.body.should.have.property('data').should.be.a('object');
          lastCatId = res.body.data.cat_id;
          done();
        });
    });
  });

  describe('/PUT category', () => {
    it('it should not UPDATE a category because not exists', (done) => {
      const category = {
        cat_id: 9999,
        name: 'Test category updated',
      };
      chai
        .request(url)
        .put('/category')
        .set({ Authorization: `Bearer ${token}` })
        .send(category)
        .end((err, res) => {
          res.should.have.status(400);
          res.body.should.be.a('object');
          res.body.should.have.property('error');
          res.body.should.have.property('error').eql('Category not found.');
          done();
        });
    });

    it('it should not UPDATE a category whitout Id field', (done) => {
      const category = {
        name: 'Test category updated',
      };
      chai
        .request(url)
        .put('/category')
        .set({ Authorization: `Bearer ${token}` })
        .send(category)
        .end((err, res) => {
          res.should.have.status(400);
          res.body.should.be.a('object');
          res.body.should.have.property('error');
          res.body.should.have.property('error').eql('Category not found.');
          done();
        });
    });

    it('it should UPDATE a category', (done) => {
      const category = {
        cat_id: lastCatId,
        name: 'Test category updated',
      };
      chai
        .request(url)
        .put('/category')
        .set({ Authorization: `Bearer ${token}` })
        .send(category)
        .end((err, res) => {
          res.should.have.status(201);
          res.body.should.be.a('object');
          res.body.should.have.property('message');
          res.body.should.have
            .property('message')
            .eql('Category successfully updated');
          res.body.should.have.property('data');
          res.body.should.have.property('data').should.be.a('object');
          done();
        });
    });
  });

  describe('/DELETE category', () => {
    it('it should not DELETE a category because not exists', (done) => {
      chai
        .request(url)
        .delete(`/category/${8888}`)
        .set({ Authorization: `Bearer ${token}` })
        .end((err, res) => {
          res.should.have.status(400);
          res.body.should.be.a('object');
          res.body.should.have.property('error');
          res.body.should.have.property('error').eql('Category not found.');
          done();
        });
    });

    it('it should not DELETE a category whitout Id field', (done) => {
      chai
        .request(url)
        .delete('/category/')
        .set({ Authorization: `Bearer ${token}` })
        .end((err, res) => {
          res.should.have.status(404);
          res.body.should.be.a('object');
          res.body.should.have.property('error');
          res.body.should.have.property('error').eql('Not found.');
          done();
        });
    });

    it('it should DELETE a category given the id', (done) => {
      chai
        .request(url)
        .delete(`/category/${lastCatId}`)
        .set({ Authorization: `Bearer ${token}` })
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('object');
          res.body.should.have.property('message');
          res.body.should.have
            .property('message')
            .eql('Category successfully deleted');
          done();
        });
    });
  });
});
