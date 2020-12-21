export default function makeShippingMethod({ makeDb }) {
  async function findAll() {
    const db = await makeDb();
    const queryStatement = 'SELECT * FROM shipping_method';
    const result = (await db.query(queryStatement)).rows;
    return result;
  }

  async function findById(shippingMethodId) {
    const db = await makeDb();
    const queryStatement = `SELECT * FROM shipping_method WHERE shipping_method_id = $1`;
    const result = (await db.query(queryStatement, [shippingMethodId])).rows[0];
    return result;
  }

  async function insert({ ...shoppingProduct }) {
    const db = await makeDb();
    const queryStatement = `INSERT INTO
                                shipping_method(name) 
                                VALUES($1) RETURNING *`;
    const result = await db.query(
      queryStatement,
      Object.values({ ...shoppingProduct })
    );
    return result.rows[0];
  }

  async function update({ ...shoppingProduct }) {
    const db = await makeDb();
    const queryStatement = `UPDATE shipping_method
                                SET name = $2
                                WHERE shipping_method_id = $1 
                                RETURNING *`;
    const result = await db.query(
      queryStatement,
      Object.values({ ...shoppingProduct })
    );
    return result.rows[0];
  }

  async function deleteById(shippingMethodId) {
    const db = await makeDb();
    const queryStatement = `DELETE FROM shipping_method WHERE shipping_method_id = $1`;
    const result = (await db.query(queryStatement, [shippingMethodId])).rows[0];
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
