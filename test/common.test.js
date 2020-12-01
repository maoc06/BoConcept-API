const chai = require('chai');
const chaiHttp = require('chai-http');

chai.should();
chai.use(chaiHttp);

const url = 'http://localhost:3000/api';

const defaultAdminUser = {
  first_name: 'Test First Name',
  last_name: 'Test Last Name',
  email: 'adim@test.com',
  password: 'testPassword',
  rol_id: 1,
  billing_address: 'Test Address',
  phone: '1234567',
};

const defaultAdminCredentials = {
  email: defaultAdminUser.email,
  password: defaultAdminUser.password,
};

const getAdminUser = () => {
  return defaultAdminUser;
};

const loginWithDefaultAdminUser = async () => {
  return chai.request(url).post('/auth/signin').send(defaultAdminCredentials);
};

module.exports = {
  getAdminUser,
  loginWithDefaultAdminUser,
};
