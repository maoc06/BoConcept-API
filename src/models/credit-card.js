/* eslint-disable no-empty-pattern */
/* eslint-disable camelcase */
export default function buildMakeCreditCard({}) {
  return function makeCreditCard({
    cardholders_name,
    card_number,
    expiry_month,
    expiry_year,
    cvv,
    credit_card_owner,
  } = {}) {
    if (!cardholders_name) {
      throw new Error('Credit card must have a cardholder name');
    }
    if (!card_number) {
      throw new Error('Credit card must have a card number');
    }
    if (!expiry_month) {
      throw new Error('Credit card must have a expiry month');
    }
    if (!expiry_year) {
      throw new Error('Credit card must have a expiry year');
    }
    if (!cvv) {
      throw new Error('Credit card must have a cvv');
    }
    if (!credit_card_owner) {
      throw new Error('Credit card must have a owner');
    }

    return Object.freeze({
      getCardholderName: () => cardholders_name,
      getCreditCardNumber: () => card_number,
      getExpiryMonth: () => expiry_month,
      getExpiryYear: () => expiry_year,
      getCvv: () => cvv,
      getCreditCardOwner: () => credit_card_owner,
    });
  };
}
