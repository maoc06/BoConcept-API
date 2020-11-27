/* eslint-disable camelcase */
// eslint-disable-next-line no-empty-pattern
export default function buildMakeProduct({}) {
    return function makeProduct({
        pro_id,
        name,
        description,
        collection,
        price,
    } = {}) {
        if (!pro_id) {
            throw new Error('Product must hava a ID');
        }
        if (!name) {
            throw new Error('Product must hava a name');
        }
        if (!description) {
            throw new Error('Product must hava a description');
        }
        if (!collection) {
            throw new Error('Product must hava a collection');
        }
        if (!price) {
            throw new Error('Product must hava a price');
        }
        return Object.freeze({
            getId: () => pro_id,
            getName: () => name,
            getDescription: () => description,
            getCollection: () => collection,
            getPrice: () => price,
        });
    };
}
