export default function makeDeleteFavorite({ removeFavorite }) {
  return async function deleteFavorite(httpRequest) {
    const headers = {
      'Content-Type': 'application/json',
    };

    try {
      await removeFavorite({
        customer_owner: httpRequest.params.owner,
        pro_id: httpRequest.params.proId,
      });
      return {
        headers,
        statusCode: 200,
        body: {
          message: 'Favorite successfully deleted',
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
