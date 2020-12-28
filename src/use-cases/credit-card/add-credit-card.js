import { makeCreditCard } from '../../models';

export default function makeAddCreditCard({ creditCardDb }) {
  return async function addCreditCard(creditCardInfo) {
    const creditCard = makeCreditCard(creditCardInfo);

    const existing = await creditCardDb.findById(
      creditCard.getCreditCardNumber()
    );
    if (existing) {
      throw new Error('Credit card already exists');
    }

    return creditCardDb.insert({
      cardholders_name: creditCard.getCardholderName(),
      card_number: creditCard.getCreditCardNumber(),
      expiry_month: creditCard.getExpiryMonth(),
      expiry_year: creditCard.getExpiryYear(),
      cvv: creditCard.getCvv(),
      credit_card_owner: creditCard.getCreditCardOwner(),
      pay_id: creditCard.getPayId(),
    });
  };
}
