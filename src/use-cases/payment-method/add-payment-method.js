import { makePaymentMethod } from '../../models';

export default function makeAddPaymentMethod({ paymentMethodDb }) {
  return async function addPaymentMethod(paymentMethodInfo) {
    console.log('--> ', paymentMethodInfo);

    const paymentMethod = makePaymentMethod(paymentMethodInfo);

    return paymentMethodDb.insert({
      name: paymentMethod.getPayName(),
      enable: paymentMethod.getEnable(),
      image_url: paymentMethod.getImageUrl(),
    });
  };
}
