import bcrypt from 'bcryptjs';
import { makeCustomer } from '../../models';

export default function makeAddCustomer({ customerDb }) {
  return async function addCustomer(customerInfo) {
    const existing = await customerDb.findById(customerInfo.email);
    if (existing) {
      throw new Error('auth/user-already-exists');
    }

    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(customerInfo.password, salt);
    // eslint-disable-next-line no-param-reassign
    customerInfo.password = hashPassword;

    const customer = makeCustomer(customerInfo);

    return customerDb.insert({
      first_name: customer.getFirstName(),
      last_name: customer.getLastName(),
      email: customer.getEmail(),
      rol_id: customer.getRol(),
      password: customer.getPassword(),
      billing_address: customer.getBillingAddress(),
      phone: customer.getPhone(),
    });
  };
}
