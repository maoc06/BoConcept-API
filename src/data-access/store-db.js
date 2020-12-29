export default function makeStoreDb({ makeDb }) {
  async function findAll() {
    const db = await makeDb();
    const queryStatement = 'SELECT * FROM store';
    const result = (await db.query(queryStatement)).rows;
    return result;
  }

  async function findById(storeId) {
    const db = await makeDb();
    const queryStatement = `SELECT * FROM store WHERE store_id = $1`;
    const result = (await db.query(queryStatement, [storeId])).rows[0];
    return result;
  }

  async function insert({ ...store }) {
    const db = await makeDb();
    const queryStatement = `INSERT INTO
                                store(title, description, latitude, longitude, country, city) 
                                VALUES($1, $2, $3, $4, $5, $6) RETURNING *`;
    const result = await db.query(queryStatement, Object.values({ ...store }));
    return result.rows[0];
  }

  async function update({ ...store }) {
    const db = await makeDb();
    const queryStatement = `UPDATE store
                                SET title = $2,
                                    description = $3,
                                    latitude = $4,
                                    longitude = $5,
                                    country = $6,
                                    city = $7
                                WHERE store_id = $1 
                                RETURNING *`;
    const result = await db.query(queryStatement, Object.values({ ...store }));
    return result.rows[0];
  }

  async function deleteById(storeId) {
    const db = await makeDb();
    const queryStatement = `DELETE FROM store WHERE store_id = $1`;
    const result = (await db.query(queryStatement, [storeId])).rows[0];
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
