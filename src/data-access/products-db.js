export default function makeProductDb({ makeDb }) {
    async function findAll() {
        const db = await makeDb();
        const queryStatement = 'SELECT * FROM product';
        const result = (await db.query(queryStatement)).rows;
        return result;
    }

    async function findById(proId) {
        const db = await makeDb();
        const queryStatement = `SELECT * FROM product WHERE pro_id = $1`;
        const result = (await db.query(queryStatement, [proId])).rows[0];
        return result;
    }

    async function insert({ ...product }) {
        const db = await makeDb();
        const queryStatement = `INSERT INTO
                                product(pro_id, name, description, collection, price) 
                                VALUES($1, $2, $3, $4, $5) RETURNING *`;
        const result = await db.query(
            queryStatement,
            Object.values({ ...product })
        );
        return result.rows[0];
    }

    async function update({ ...product }) {
        const db = await makeDb();
        const queryStatement = `UPDATE product
                                SET name = $2,
                                    description = $3,
                                    collection = $4,
                                    price = $5
                                WHERE pro_id = $1 
                                RETURNING *`;
        const result = await db.query(
            queryStatement,
            Object.values({ ...product })
        );
        return result.rows[0];
    }

    async function deleteById(proId) {
        const db = await makeDb();
        const queryStatement = `DELETE FROM product WHERE pro_id = $1`;
        const result = (await db.query(queryStatement, [proId])).rows[0];
        return result;
    }

    return Object.freeze({
        findAll,
        findById,
        insert,
        update,
        deleteById,
    });
}
