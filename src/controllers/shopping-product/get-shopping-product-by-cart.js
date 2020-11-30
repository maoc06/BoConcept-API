export default function makeGetShoppingProductByCart({
  listByCartShoppingProduct,
}) {
  return async function getShoppingProductByCart(httpRequest) {
    const headers = {
      'Content-Type': 'application/json',
    };

    try {
      const shoppingProducts = await listByCartShoppingProduct({
        carId: httpRequest.params.carId,
      });
      return {
        headers,
        statusCode: 200,
        body: {
          message: 'List shopping products by cart',
          data: shoppingProducts,
        },
      };
    } catch (e) {
      return {
        headers,
        statusCode: 400,
        body: {
          error: e.message,
        },
      };
    }
  };
}
