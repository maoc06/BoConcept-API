export default function makeListCreditCardByCustomer({
  creditCardDb,
  customerDb,
}) {
  return async function listCreditCardByCustomer({ email } = {}) {
    const customer = await customerDb.findById(email);
    if (!customer) {
      throw new RangeError('Customer not found.');
    }

    const creditCard = await creditCardDb.findByCustomer(email);

    if (!creditCard) {
      throw new RangeError('Credit card not found.');
    }
    return creditCard;
  };
}
