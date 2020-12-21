export default function makeUpdateCartCreditCard({ cartDb, creditCardDb }) {
  return async function updateCartCreditCard({ cartId, creditCardNumber }) {
    let existing = await cartDb.findById(cartId);

    if (!existing) {
      throw new RangeError('Cart not found.');
    }

    existing = await creditCardDb.findById(creditCardNumber);

    if (!existing) {
      throw new RangeError('Credit card not found.');
    }

    return cartDb.updateCreditCard({
      car_id: cartId,
      card_number: creditCardNumber,
    });
  };
}
