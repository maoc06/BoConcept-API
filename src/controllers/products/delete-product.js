export default function makeDeleteProduct({ removeProduct }) {
    return async function deleteProduct(httpRequest) {
        const headers = {
            'Content-Type': 'application/json',
        };

        try {
            await removeProduct({ proId: httpRequest.params.id });
            return {
                headers,
                statusCode: 200,
                body: {
                    message: 'Product successfully deleted',
                    data: {},
                },
            };
        } catch (e) {
            console.log(e);
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
