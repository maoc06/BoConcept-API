const chai = require('chai');
const chaiHttp = require('chai-http');

chai.should();
chai.use(chaiHttp);

const url = 'http://localhost:3000/api';

const defaultCustomer = {
  first_name: 'Test First Name',
  last_name: 'Test Last Name',
  email: 'test@email.com',
  password: 'testPassword',
  billing_address: 'Test Address',
  phone: '1234567',
};

const defaultCredentials = {
  email: defaultCustomer.email,
  password: defaultCustomer.password,
};

const getDefaultCustomer = () => {
  return defaultCustomer;
};

const loginWithDefaultUser = async () => {
  return chai.request(url).post('/auth/signin').send(defaultCredentials);
};

// const cleanDefaultUser = async (token) => {
//   return chai
//     .request(url)
//     .delete(`/customer/${defaultCredentials.email}`)
//     .set({ Authorization: `Bearer ${token}` });
// };

module.exports = {
  getDefaultCustomer,
  loginWithDefaultUser,
};
