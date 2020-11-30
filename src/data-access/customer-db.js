export default function makeCustomerDb({ makeDb }) {
  async function findById(email) {
    const db = await makeDb();
    const queryStatement = `SELECT first_name, last_name, email, password, billing_address, phone
                                FROM customer WHERE email = $1`;
    const result = (await db.query(queryStatement, [email])).rows[0];
    return result;
  }

  async function insert({ ...customer }) {
    const db = await makeDb();
    const queryStatement = `INSERT INTO
                                customer(first_name, last_name, email, password, billing_address, phone)
                                VALUES($1, $2, $3, $4, $5, $6)
                                RETURNING *`;
    const result = await db.query(
      queryStatement,
      Object.values({ ...customer })
    );
    return result.rows[0];
  }

  async function update({ ...customer }) {
    const db = await makeDb();
    const queryStatement = `UPDATE customer
                                SET first_name = $1, 
                                    last_name = $2, 
                                    password = $4, 
                                    billing_address = $5, 
                                    phone = $6
                                WHERE email = $3
                                RETURNING *`;
    const result = await db.query(
      queryStatement,
      Object.values({ ...customer })
    );
    return result.rows[0];
  }

  async function deleteById(email) {
    const db = await makeDb();
    const queryStatement = `DELETE FROM customer WHERE email = $1`;
    const result = (await db.query(queryStatement, [email])).rows[0];
    return result;
  }

  return Object.freeze({
    findById,
    insert,
    update,
    deleteById,
  });
}