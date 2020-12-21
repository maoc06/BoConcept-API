export default function makeDeleteAddress({ removeAddress }) {
  return async function deleteAddress(httpRequest) {
    const headers = {
      'Content-Type': 'application/json',
    };

    try {
      await removeAddress({
        addressId: httpRequest.params.addressId,
      });
      return {
        headers,
        statusCode: 200,
        body: {
          message: 'Address successfully deleted',
          data: {},
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
