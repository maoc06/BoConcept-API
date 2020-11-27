export default function makeGetProducts({ listProducts }) {
    return async function getProducts(httpRequest) {
        const headers = {
            'Content-Type': 'application/json',
        };

        try {
            const products = await listProducts({
                proId: httpRequest.params.id,
            });
            return {
                headers,
                statusCode: 200,
                body: {
                    message: 'list products',
                    data: products,
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
