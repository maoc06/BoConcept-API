export default function makeGetFavoriteByCustomer({ listFavoriteByCustomer }) {
  return async function getFavoriteByCustomer(httpRequest) {
    const headers = {
      'Content-Type': 'application/json',
    };

    try {
      const favorite = await listFavoriteByCustomer({
        email: httpRequest.params.email,
      });
      return {
        headers,
        statusCode: 200,
        body: {
          message: 'List favorite by customer',
          data: favorite,
        },
      };
    } catch (e) {
      console.log('Fav Error', e);
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
