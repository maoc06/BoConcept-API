export default function makeShoppingProduct({ makeDb }) {
  async function findAll() {
    const db = await makeDb();
    const queryStatement = 'SELECT * FROM shopping_product';
    const result = (await db.query(queryStatement)).rows;
    return result;
  }

  async function findById(shprId) {
    const db = await makeDb();
    const queryStatement = `SELECT * FROM shopping_product WHERE shpr_id = $1`;
    const result = (await db.query(queryStatement, [shprId])).rows[0];
    return result;
  }

  async function findByCarId(carId) {
    const db = await makeDb();
    const queryStatement = `SELECT * FROM shopping_product WHERE car_id = $1`;
    const result = (await db.query(queryStatement, [carId])).rows[0];
    return result;
  }

  async function insert({ ...shoppingProduct }) {
    const db = await makeDb();
    const queryStatement = `INSERT INTO
                                shopping_product(pro_id, car_id, total, quantity) 
                                VALUES($1, $2, $3, $4) RETURNING *`;
    const result = await db.query(
      queryStatement,
      Object.values({ ...shoppingProduct })
    );
    return result.rows[0];
  }

  async function update({ ...shoppingProduct }) {
    const db = await makeDb();
    const queryStatement = `UPDATE shopping_product
                                SET pro_id = $2,
                                    car_id = $3,
                                    total = $4,
                                    quantity = $5
                                WHERE shpr_id = $1 
                                RETURNING *`;
    const result = await db.query(
      queryStatement,
      Object.values({ ...shoppingProduct })
    );
    return result.rows[0];
  }

  async function deleteById(shprId) {
    const db = await makeDb();
    const queryStatement = `DELETE FROM shopping_product WHERE shpr_id = $1`;
    const result = (await db.query(queryStatement, [shprId])).rows[0];
    return result;
  }

  return Object.freeze({
    findAll,
    findById,
    findByCarId,
    insert,
    update,
    deleteById,
  });
}
