export default function makePaymentMethodDb({ makeDb }) {
  async function findAll() {
    const db = await makeDb();
    const queryStatement = 'SELECT * FROM payment_method';
    const result = (await db.query(queryStatement)).rows;
    return result;
  }

  async function findById(payId) {
    const db = await makeDb();
    const queryStatement = `SELECT * FROM payment_method WHERE pay_id = $1`;
    const result = (await db.query(queryStatement, [payId])).rows[0];
    return result;
  }

  async function insert({ ...paymentMethod }) {
    const db = await makeDb();
    const queryStatement = `INSERT INTO
                                payment_method(name, enable, image_url) 
                                VALUES($1, $2, $3) RETURNING *`;
    const result = await db.query(
      queryStatement,
      Object.values({ ...paymentMethod })
    );
    return result.rows[0];
  }

  async function update({ ...paymentMethod }) {
    const db = await makeDb();
    const queryStatement = `UPDATE payment_method
                                SET name = $2,
                                    image_url = $3,
                                    enable = $4
                                WHERE pay_id = $1 
                                RETURNING *`;
    const result = await db.query(
      queryStatement,
      Object.values({ ...paymentMethod })
    );
    return result.rows[0];
  }

  async function deleteById(payId) {
    const db = await makeDb();
    const queryStatement = `DELETE FROM payment_method WHERE pay_id = $1`;
    const result = (await db.query(queryStatement, [payId])).rows[0];
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
