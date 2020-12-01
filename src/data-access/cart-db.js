export default function makeCart({ makeDb }) {
  async function findAll() {
    const db = await makeDb();
    const queryStatement = 'SELECT * FROM cart';
    const result = (await db.query(queryStatement)).rows;
    return result;
  }

  async function findById(cartId) {
    const db = await makeDb();
    const queryStatement = `SELECT * FROM cart WHERE car_id = $1`;
    const result = (await db.query(queryStatement, [cartId])).rows[0];
    return result;
  }

  async function findCartByCustomerEmail(email) {
    const db = await makeDb();
    const queryStatement = `SELECT * FROM cart WHERE email = $1`;
    const result = (await db.query(queryStatement, [email])).rows[0];
    return result;
  }

  async function insert({ ...cart }) {
    const db = await makeDb();
    const queryStatement = `INSERT INTO
                                cart(email, pay_id, quantity) 
                                VALUES($1, $2, $3) RETURNING *`;
    const result = await db.query(queryStatement, Object.values({ ...cart }));
    return result.rows[0];
  }

  async function update({ ...cart }) {
    const db = await makeDb();
    const queryStatement = `UPDATE cart
                                SET email = $2,
                                    pay_id = $3,
                                    quantity = $4
                                WHERE car_id = $1 
                                RETURNING *`;
    const result = await db.query(queryStatement, Object.values({ ...cart }));
    return result.rows[0];
  }

  async function deleteById(cartId) {
    const db = await makeDb();
    const queryStatement = `DELETE FROM cart WHERE car_id = $1`;
    const result = (await db.query(queryStatement, [cartId])).rows[0];
    return result;
  }

  return Object.freeze({
    findAll,
    findById,
    findCartByCustomerEmail,
    insert,
    update,
    deleteById,
  });
}
