import { findImages } from '../utils/find-images';

export default function makeFavoriteDb({ makeDb }) {
  async function findProductImages(proId) {
    const db = await makeDb();
    const queryStatement = `SELECT 
                            product_image_id, path 
                            FROM product_image 
                            WHERE pro_id = $1`;
    const result = (await db.query(queryStatement, [proId])).rows;
    return result;
  }

  async function findByCustomer(email) {
    const db = await makeDb();
    const queryStatement = `SELECT * 
                          FROM favorite NATURAL JOIN product
                          WHERE customer_owner = $1`;
    let result = (await db.query(queryStatement, [email])).rows;

    result = await findImages(result, findProductImages, false);

    return result;
  }

  async function findBySuperKey({ ...favorite }) {
    const db = await makeDb();
    const queryStatement = `SELECT * FROM favorite 
                            WHERE customer_owner = $1
                            AND pro_id = $2`;
    const result = (
      await db.query(queryStatement, Object.values({ ...favorite }))
    ).rows[0];
    return result;
  }

  async function insert({ ...favorite }) {
    const db = await makeDb();
    const queryStatement = `INSERT INTO
                                favorite(customer_owner, pro_id) 
                                VALUES($1, $2) RETURNING *`;
    const result = await db.query(
      queryStatement,
      Object.values({ ...favorite })
    );
    return result.rows[0];
  }

  async function deleteBySuperKey({ ...favorite }) {
    const db = await makeDb();
    const queryStatement = `DELETE FROM favorite 
                            WHERE customer_owner = $1
                            AND pro_id = $2`;
    const result = (
      await db.query(queryStatement, Object.values({ ...favorite }))
    ).rows[0];
    return result;
  }

  return Object.freeze({
    findByCustomer,
    findBySuperKey,
    insert,
    deleteBySuperKey,
  });
}
