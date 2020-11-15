function buildMakeProduct({}) {
    return function makeProduct({
        pro_id = null,
        name,
        description,
        collection,
        price
    } = {}) {
        if (!name) {
            throw new Error('Product must hava a name');
        }
        return Object.freeze({
            getId: () => pro_id,
            getName: () => name,
            getDescription: () => description,
            getCollection: () => collection,
            getPrice: () => price,
        })
    }
}

module.exports = buildMakeProduct;