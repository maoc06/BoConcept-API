export default function makeProductImageDb({ makeDb }) {
  async function findAll() {
    const db = await makeDb();
    const queryStatement = 'SELECT * FROM product_image';
    const result = (await db.query(queryStatement)).rows;
    return result;
  }

  async function findById(productImageId) {
    const db = await makeDb();
    const queryStatement = `SELECT * FROM product_image WHERE product_image_id = $1`;
    const result = (await db.query(queryStatement, [productImageId])).rows[0];
    return result;
  }

  async function findByProduct(proId) {
    const db = await makeDb();
    const queryStatement = `SELECT * FROM product_image WHERE pro_id = $1`;
    const result = (await db.query(queryStatement, [proId])).rows;
    return result;
  }

  async function insert({ ...image }) {
    const db = await makeDb();
    const queryStatement = `INSERT INTO
                                product_image(path, pro_id) 
                                VALUES($1, $2) RETURNING *`;
    const result = await db.query(queryStatement, Object.values({ ...image }));
    return result.rows[0];
  }

  async function update({ ...image }) {
    const db = await makeDb();
    const queryStatement = `UPDATE product_image
                                SET path = $2,
                                    pro_id = $3
                                WHERE product_image_id = $1 
                                RETURNING *`;
    const result = await db.query(queryStatement, Object.values({ ...image }));
    return result.rows[0];
  }

  async function deleteById(productImageId) {
    const db = await makeDb();
    const queryStatement = `DELETE FROM product_image WHERE product_image_id = $1`;
    const result = (await db.query(queryStatement, [productImageId])).rows[0];
    return result;
  }

  return Object.freeze({
    findAll,
    findById,
    findByProduct,
    insert,
    update,
    deleteById,
  });
}
