// import Email from 'email-templates';
import path from 'path';

import { email } from '../../config/mailer';

export default function makeSendWelcomeMail() {
  return async function sendWelcomeMail({ emailToSend, fullName } = {}) {
    // const email = new Email({
    //   transport: transporter,
    //   send: true,
    //   preview: false,
    //   juice: true,
    //   juiceResources: {
    //     preserveImportant: true,
    //     webResources: {
    //       relativeTo: path.join(__dirname, '../..', '/emails/assets'),
    //       images: true,
    //     },
    //   },
    // });

    email
      .send({
        template: 'welcome',
        message: {
          from: '"BoConcept 🪑" <boconceptmaja@gmail.com>',
          to: emailToSend,
          attachments: [
            {
              filename: 'welcome.png',
              path: path.join(
                __dirname,
                '../../',
                '/emails/assets/images/1540501.png'
              ),
              cid: 'welcomeImage',
            },
          ],
        },
        locals: {
          fullName,
        },
      })
      .then(() => console.log('Welcome email has been send to', fullName));
  };
}
