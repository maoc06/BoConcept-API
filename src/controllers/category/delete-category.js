export default function makeDeleteCategory({ removeCategory }) {
  return async function deleteCategory(httpRequest) {
    const headers = {
      'Content-Type': 'application/json',
    };

    try {
      await removeCategory({ catId: httpRequest.params.id });
      return {
        headers,
        statusCode: 200,
        body: {
          message: 'Category successfully deleted',
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
