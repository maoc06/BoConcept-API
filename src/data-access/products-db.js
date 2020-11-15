function makeProductDb({ makeDb }) {
    return Object.freeze({
        findAll,
        findById
    });

    async function findAll() {
        const db = await makeDb();
        const queryStatement = 'SELECT * FROM product';
        const result = (await db.query(queryStatement)).rows;
        return result;
    }

    async function findById(proId) {
        const db = await makeDb();
        const queryStatement = `SELECT * FROM product WHERE pro_id=${proId}`;
        const result = (await db.query(queryStatement)).rows;
        return result;
    }
}

module.exports = makeProductDb;