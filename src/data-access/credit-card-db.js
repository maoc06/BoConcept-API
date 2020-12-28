export default function makeCreditCardDb({ makeDb }) {
  async function findAll() {
    const db = await makeDb();
    const queryStatement = 'SELECT * FROM credit_card';
    const result = (await db.query(queryStatement)).rows;
    return result;
  }

  async function findById(creditCardNumber) {
    const db = await makeDb();
    const queryStatement = `SELECT * 
                            FROM credit_card NATURAL JOIN payment_method
                            WHERE card_number = $1`;
    const result = (await db.query(queryStatement, [creditCardNumber])).rows[0];
    return result;
  }

  async function findByCustomer(email) {
    const db = await makeDb();
    const queryStatement = `SELECT * 
                            FROM credit_card NATURAL JOIN payment_method
                            WHERE credit_card_owner = $1`;
    const result = (await db.query(queryStatement, [email])).rows;
    return result;
  }

  async function insert({ ...creditCard }) {
    const db = await makeDb();
    const queryStatement = `INSERT INTO
                                credit_card(cardholders_name,
                                            card_number, 
                                            expiry_month, 
                                            expiry_year, 
                                            cvv, 
                                            credit_card_owner,
                                            pay_id) 
                                VALUES($1, $2, $3, $4, $5, $6, $7) RETURNING *`;
    const result = await db.query(
      queryStatement,
      Object.values({ ...creditCard })
    );
    return result.rows[0];
  }

  async function update({ ...creditCard }) {
    const db = await makeDb();
    const queryStatement = `UPDATE credit_card
                                SET cardholders_name = $2,
                                    expiry_month = $3, 
                                    expiry_year = $4, 
                                    cvv = $5, 
                                    credit_card_owner = $6,
                                    pay_id = $7
                                WHERE card_number = $1 
                                RETURNING *`;
    const result = await db.query(
      queryStatement,
      Object.values({ ...creditCard })
    );
    return result.rows[0];
  }

  async function deleteById(creditCardNumber) {
    const db = await makeDb();
    const queryStatement = `DELETE FROM credit_card WHERE card_number = $1`;
    const result = (await db.query(queryStatement, [creditCardNumber])).rows[0];
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
