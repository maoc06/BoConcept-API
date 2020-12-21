export default function makeListCreditCard({ creditCardDb }) {
  return async function listCreditCard({ creditCardNumber } = {}) {
    if (creditCardNumber) {
      const creditCard = await creditCardDb.findById(creditCardNumber);

      if (!creditCard) {
        throw new RangeError('Credit card not found.');
      }
      return creditCard;
    }
    const creditCard = await creditCardDb.findAll();
    return creditCard;
  };
}
