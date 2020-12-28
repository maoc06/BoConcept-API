import Email from 'email-templates';
import path from 'path';

import { config } from '.';

const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    user: config.mailUser,
    pass: config.mailPassword,
  },
});

transporter.verify((error) => {
  if (error) {
    console.log(error);
  } else {
    console.log('Server is ready to take messages');
  }
});

export const email = new Email({
  transport: transporter,
  send: true,
  preview: false,
  juice: true,
  juiceResources: {
    preserveImportant: true,
    webResources: {
      relativeTo: path.join(__dirname, '..', '/emails/assets'),
      images: true,
    },
  },
});
