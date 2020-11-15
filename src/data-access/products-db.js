function makeProductDb({ makeDb }) {
    return Object.freeze({
        findAll
    });

    async function findAll() {
        const db = await makeDb();
        const queryStatement = 'SELECT * FROM product';
        const result = (await db.query(queryStatement)).rows;
        return result;
    }
}

module.exports = makeProductDb;