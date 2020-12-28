import makeSendWelcomeMail from './welcome-mail';
import makeSendOrderMail from './order-mail';

const sendWelcomeMail = makeSendWelcomeMail();
const sendOrderMail = makeSendOrderMail();

export default { sendWelcomeMail, sendOrderMail };
