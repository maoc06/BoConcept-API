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

  async function findCartCustomerByEnable(email) {
    const db = await makeDb();
    const queryStatement = `SELECT * FROM cart WHERE email = $1 AND enable = 1`;
    const result = (await db.query(queryStatement, [email])).rows[0];
    return result;
  }

  async function insert({ ...cart }) {
    const db = await makeDb();
    const queryStatement = `INSERT INTO
                                cart(email, 
                                    card_number, 
                                    billing_address_id, 
                                    shipping_method_id, 
                                    payment_date, 
                                    enable) 
                                VALUES($1, null, null, $2, null, $3) RETURNING *`;
    const result = await db.query(queryStatement, Object.values({ ...cart }));
    return result.rows[0];
  }

  async function update({ ...cart }) {
    const db = await makeDb();
    const queryStatement = `UPDATE cart
                                SET email = $2,
                                    card_number = $3,
                                    billing_address_id = $4,
                                    shipping_method_id = $5,
                                    payment_date = $6,
                                    enable = $7
                                WHERE car_id = $1 
                                RETURNING *`;
    const result = await db.query(queryStatement, Object.values({ ...cart }));
    return result.rows[0];
  }

  async function updateCreditCard({ ...creditCardInfo }) {
    const db = await makeDb();
    const queryStatement = `UPDATE cart 
                            SET card_number = $2 
                            WHERE car_id = $1`;
    const result = await db.query(
      queryStatement,
      Object.values({ ...creditCardInfo })
    );
    return result.rows[0];
  }

  async function updateBillingAddress({ ...addressInfo }) {
    const db = await makeDb();
    const queryStatement = `UPDATE cart 
                            SET billing_address_id = $2 
                            WHERE car_id = $1`;
    const result = await db.query(
      queryStatement,
      Object.values({ ...addressInfo })
    );
    return result.rows[0];
  }

  async function updateShippingMethod({ ...shippingMethodInfo }) {
    const db = await makeDb();
    const queryStatement = `UPDATE cart 
                            SET shipping_method_id = $2 
                            WHERE car_id = $1`;
    const result = await db.query(
      queryStatement,
      Object.values({ ...shippingMethodInfo })
    );
    return result.rows[0];
  }

  async function updatePaymentDate({ ...cartId }) {
    const db = await makeDb();
    const queryStatement = `UPDATE cart 
                            SET payment_date = current_date
                            WHERE car_id = $1`;
    const result = await db.query(queryStatement, Object.values({ ...cartId }));
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
    findCartCustomerByEnable,
    insert,
    update,
    updateCreditCard,
    updateBillingAddress,
    updateShippingMethod,
    updatePaymentDate,
    deleteById,
  });
}
