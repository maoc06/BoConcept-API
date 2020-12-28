import { email } from '../../config/mailer';

export default function makeSendOrderMail() {
  return async function sendOrderMail({
    emailToSend,
    firstName,
    lastName,
    orderNumber,
    date,
    products,
    ccNumber,
    ccType,
    ccImage,
    address,
    city,
    zipCode,
    shippingMethod,
    subtotal,
    shippingCost,
  } = {}) {
    email
      .send({
        template: 'order',
        message: {
          from: '"BoConcept 🪑" <boconceptmaja@gmail.com>',
          to: emailToSend,
        },
        locals: {
          firstName,
          lastName,
          orderNumber,
          date,
          products,
          ccNumber,
          ccType,
          ccImage,
          address,
          city,
          zipCode,
          shippingMethod,
          subtotal,
          shippingCost,
        },
      })
      .then(() => console.log(`Order No. ${orderNumber} email has been send`));
  };
}
