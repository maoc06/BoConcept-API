import { findImages } from '../utils/find-images';

export default function makeShoppingProduct({ makeDb }) {
  async function findProductImages(proId) {
    const db = await makeDb();
    const queryStatement = `SELECT 
                            product_image_id, path 
                            FROM product_image 
                            WHERE pro_id = $1`;
    const result = (await db.query(queryStatement, [proId])).rows;
    return result;
  }

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

  async function findByProductInCart({ ...shoppingProduct }) {
    const db = await makeDb();
    const queryStatement = `SELECT * 
                            FROM shopping_product 
                            WHERE car_id = $1
                            AND pro_id = $2`;
    const result = (
      await db.query(queryStatement, Object.values({ ...shoppingProduct }))
    ).rows[0];
    return result;
  }

  async function findByCarId(carId) {
    const db = await makeDb();
    const queryStatement = `SELECT shpr_id, pro_id, name, price, quantity 
                            FROM shopping_product NATURAL JOIN product
                            WHERE car_id IN (
                              SELECT car_id
                              FROM cart
                              WHERE car_id = $1
                            )`;
    const result = (await db.query(queryStatement, [carId])).rows;
    return result;
  }

  async function findByEnableCarId(email) {
    const db = await makeDb();
    const queryStatement = `SELECT shpr_id, pro_id, name, price, quantity 
                            FROM shopping_product NATURAL JOIN product
                            WHERE car_id IN (
                              SELECT car_id
                              FROM cart
                              WHERE email = $1
                              AND enable = 1
                            )`;
    let result = (await db.query(queryStatement, [email])).rows;

    result = await findImages(result, findProductImages, false);

    return result;
  }

  async function insert({ ...shoppingProduct }) {
    const db = await makeDb();
    const queryStatement = `INSERT INTO
                                shopping_product(pro_id, car_id, quantity) 
                                VALUES($1, $2, $3) RETURNING *`;
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
                                    quantity = $4
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
    findByProductInCart,
    findByCarId,
    findByEnableCarId,
    insert,
    update,
    deleteById,
  });
}
