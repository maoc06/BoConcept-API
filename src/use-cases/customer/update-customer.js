import { makeCustomer } from '../../models';

export default function makeUpdateCustomer({ customerDb }) {
  return async function updateCustomer(customerInfo) {
    const customer = makeCustomer(customerInfo);

    const existing = await customerDb.findById(customer.getEmail());

    if (!existing) {
      throw new RangeError('Customer not found.');
    }

    return customerDb.update({
      first_name: customer.getFirstName(),
      last_name: customer.getLastName(),
      email: customer.getEmail(),
      password: customer.getPassword(),
      rol_id: customer.getRol(),
      enable: customer.getEnable(),
    });
  };
}
