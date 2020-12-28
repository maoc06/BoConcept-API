import { makeCreditCard } from '../../models';

export default function makeUpdateCreditCard({ creditCardDb }) {
  return async function updateCreditCard(creditCardInfo) {
    const creditCard = makeCreditCard(creditCardInfo);

    const existing = await creditCardDb.findById(
      creditCard.getCreditCardNumber()
    );

    if (!existing) {
      throw new RangeError('Credit card not found.');
    }

    return creditCardDb.update({
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
