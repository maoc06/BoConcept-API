import { makeOrder } from '../../models';

export default function makeProcessOrder({
  cartDb,
  customerDb,
  creditCardDb,
  addressDb,
  shippingMethodDb,
  shoppingProductDb,
  storeDb,
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
      throw new RangeError('Credit card not found.');
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

    const storeExisting = await storeDb.findById(order.getStoreId());
    if (!storeExisting) {
      throw new RangeError('Store not found.');
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

    sendOrderMail(
      {
        orderNumber: order.getOrderNumber(),
        firstName: customerExisting.first_name,
        lastName: customerExisting.last_name,
        date: order.getPaymentDate(),
        products: shoppingProducts,
        ccNumber: maskCardNumber(ccExisting.card_number),
        ccType: ccExisting.name,
        ccImage: ccExisting.image_url,
        address: addressExisting.billing_address,
        country: addressExisting.country,
        city: addressExisting.city,
        zipCode: addressExisting.zip_code,
        phone: addressExisting.phone,
        shippingMethod: shippingMethodExisting.name,
        store: storeExisting.title,
        storeDescription: storeExisting.description,
        storeCity: storeExisting.city,
        storeCountry: storeExisting.country,
        subtotal: order.getSubtotal(),
        shippingCost: order.getShippingCost(),
      },
      order.getOrderNumber(),
      order.getEmail()
    );

    // generate new cart
    return cartDb.insert({
      email: order.getEmail(),
      shipping_method_id: 1,
      enable: 1,
    });
  };
}
