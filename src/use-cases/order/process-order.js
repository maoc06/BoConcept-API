import { makeOrder } from '../../models';

export default function makeProcessOrder({
  cartDb,
  customerDb,
  creditCardDb,
  addressDb,
  shippingMethodDb,
  shoppingProductDb,
  maskCardNumber,
  sendOrderMail,
}) {
  return async function processOrder(orderInfo) {
    const order = makeOrder(orderInfo);

    const cartExisting = await cartDb.findById(order.getCartId());
    if (!cartExisting) {
      throw new RangeError('Cart not found.');
    }

    const customerExisting = await customerDb.findById(order.getEmail());
    if (!customerExisting) {
      throw new RangeError('Customer not found.');
    }

    const ccExisting = await creditCardDb.findById(order.getCardNumber());
    if (!ccExisting) {
      throw new RangeError('Payment method not found.');
    }

    const addressExisting = await addressDb.findById(order.getBillingAddress());
    if (!addressExisting) {
      throw new RangeError('Address not found.');
    }

    const shippingMethodExisting = await shippingMethodDb.findById(
      order.getShippingMethod()
    );
    if (!shippingMethodExisting) {
      throw new RangeError('Shipping method not found.');
    }

    // generate order
    cartDb.update({
      car_id: order.getCartId(),
      email: order.getEmail(),
      card_number: order.getCardNumber(),
      billing_addres_id: order.getBillingAddress(),
      shipping_method_id: order.getShippingMethod(),
      payment_date: order.getPaymentDate(),
      enable: order.getEnable(),
    });

    const shoppingProducts = await shoppingProductDb.findByCarId(
      order.getCartId()
    );

    sendOrderMail({
      emailToSend: order.getEmail(),
      firstName: customerExisting.first_name,
      lastName: customerExisting.last_name,
      orderNumber: order.getOrderNumber(),
      date: order.getPaymentDate(),
      products: shoppingProducts,
      ccNumber: maskCardNumber(ccExisting.card_number),
      ccType: ccExisting.name,
      ccImage: ccExisting.image_url,
      address: addressExisting.billing_address,
      city: addressExisting.city,
      zipCode: addressExisting.zip_code,
      shippingMethod: shippingMethodExisting.name,
      subtotal: order.getSubtotal(),
      shippingCost: order.getShippingCost(),
    });

    // generate new cart
    return cartDb.insert({
      email: order.getEmail(),
      shipping_method_id: 1,
      enable: 1,
    });
  };
}
