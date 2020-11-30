export default function makeRemovePaymentMethod({ paymentMethodDb }) {
  return async function removePaymentMethod({ payId } = {}) {
    if (!payId) {
      throw new Error('You must supply a payment method id');
    }

    const existing = await paymentMethodDb.findById(payId);
    if (!existing) {
      throw new RangeError('Payment method not found.');
    }
    const paymentMethod = await paymentMethodDb.deleteById(payId);
    return paymentMethod;
  };
}
