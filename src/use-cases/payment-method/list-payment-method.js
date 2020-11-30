export default function makeListPaymentMethod({ paymentMethodDb }) {
  return async function listPaymentMethod({ payId } = {}) {
    if (payId) {
      const paymentMethod = await paymentMethodDb.findById(payId);
      if (!paymentMethod) {
        throw new Error('Payment method not found');
      }
      return paymentMethod;
    }
    const paymentMethod = await paymentMethodDb.findAll();
    return paymentMethod;
  };
}
