import { makePaymentMethod } from '../../models';

export default function makeUpdatePaymentMethod({ paymentMethodDb }) {
  return async function updatePaymentMethod(paymentMethodInfo) {
    const paymentMethod = makePaymentMethod(paymentMethodInfo);

    const existing = await paymentMethodDb.findById(paymentMethod.getPayId());

    if (!existing) {
      throw new RangeError('Payment method not found.');
    }

    return paymentMethodDb.update({
      pay_id: paymentMethod.getPayId(),
      name: paymentMethod.getPayName(),
      enable: paymentMethod.getEnable(),
    });
  };
}
