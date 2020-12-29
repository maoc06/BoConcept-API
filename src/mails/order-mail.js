import { email } from '../../config/mailer';

export default function makeSendOrderMail() {
  return async function sendOrderMail(mailInfo, orderNumber, emailToSend) {
    email
      .send({
        template: 'order',
        message: {
          from: '"BoConcept 🪑" <boconceptmaja@gmail.com>',
          to: emailToSend,
        },
        locals: mailInfo,
      })
      .then(() => console.log(`Order No. ${orderNumber} email has been send`));
  };
}
