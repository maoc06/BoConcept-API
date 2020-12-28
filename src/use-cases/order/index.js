import makeProcessOrder from './process-order';
import makeMaskCardNumber from '../../utils/mask-card-number';
import {
  cartDb,
  customerDb,
  addressDb,
  shippingMethodDb,
  creditCardDb,
  shoppingProductDb,
} from '../../data-access';
import mail from '../../mails';

const { sendOrderMail } = mail;
const maskCardNumber = makeMaskCardNumber();

const processOrder = makeProcessOrder({
  cartDb,
  customerDb,
  creditCardDb,
  addressDb,
  shippingMethodDb,
  shoppingProductDb,
  sendOrderMail,
  maskCardNumber,
});

export default {
  processOrder,
};
