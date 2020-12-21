export default function makeAddressDb({ makeDb }) {
  async function findAll() {
    const db = await makeDb();
    const queryStatement = 'SELECT * FROM address';
    const result = (await db.query(queryStatement)).rows;
    return result;
  }

  async function findById(addressId) {
    const db = await makeDb();
    const queryStatement = `SELECT * FROM address WHERE address_id = $1`;
    const result = (await db.query(queryStatement, [addressId])).rows[0];
    return result;
  }

  async function findByCustomer(email) {
    const db = await makeDb();
    const queryStatement = `SELECT * FROM address WHERE customer_owner = $1`;
    const result = (await db.query(queryStatement, [email])).rows;
    return result;
  }

  async function insert({ ...address }) {
    const db = await makeDb();
    const queryStatement = `INSERT INTO
                                address(
                                  name, 
                                  billing_address, 
                                  city, 
                                  zip_code, 
                                  customer_owner,
                                  is_default) 
                                VALUES($1, $2, $3, $4, $5, $6) RETURNING *`;
    const result = await db.query(
      queryStatement,
      Object.values({ ...address })
    );
    return result.rows[0];
  }

  async function update({ ...address }) {
    const db = await makeDb();
    const queryStatement = `UPDATE address
                                SET name = $2,
                                    billing_address = $3,
                                    city = $4,
                                    zip_code = $5,
                                    customer_owner = $6,
                                    is_default = $7
                                WHERE address_id = $1 
                                RETURNING *`;
    const result = await db.query(
      queryStatement,
      Object.values({ ...address })
    );
    return result.rows[0];
  }

  async function deleteById(addressId) {
    const db = await makeDb();
    const queryStatement = `DELETE FROM address WHERE address_id = $1`;
    const result = (await db.query(queryStatement, [addressId])).rows[0];
    return result;
  }

  return Object.freeze({
    findAll,
    findById,
    findByCustomer,
    insert,
    update,
    deleteById,
  });
}
