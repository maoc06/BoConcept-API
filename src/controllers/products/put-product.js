export default function makePutProduct({ updateProduct }) {
    return async function putProduct(httpRequest) {
        try {
            const {...productInfo } = httpRequest.body;
            const product = await updateProduct({...productInfo });
            return {
                headers: {
                    'Content-Type': 'application/json'
                },
                statusCode: 201,
                body: {
                    message: "product updated",
                    data: product
                }
            }
        } catch (e) {
            console.log(e);
            return {
                headers: {
                    'Content-Type': 'application/json'
                },
                statusCode: 400,
                body: {
                    error: e.message
                }
            }
        }
    }
}