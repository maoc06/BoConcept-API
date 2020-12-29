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
                                  country,
                                  city, 
                                  zip_code,
                                  phone,
                                  customer_owner,
                                  is_default) 
                                VALUES($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *`;
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
                                    country = $4,
                                    city = $5,
                                    zip_code = $6,
                                    phone = $7,
                                    customer_owner = $8,
                                    is_default = $9
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
