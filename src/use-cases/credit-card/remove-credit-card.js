export default function makeRemoveCreditCard({ creditCardDb }) {
  return async function removeCreditCard({ creditCardNumber } = {}) {
    if (!creditCardNumber) {
      throw new Error('You must supply a credit card number');
    }

    const existing = await creditCardDb.findById(creditCardNumber);

    if (!existing) {
      throw new RangeError('Credit card not found.');
    }

    const creditCard = await creditCardDb.deleteById(creditCardNumber);
    return creditCard;
  };
}
