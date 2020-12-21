export default function makeProductDb({ makeDb }) {
  async function findProductImages(proId) {
    const db = await makeDb();
    const queryStatement = `SELECT * FROM product_image WHERE pro_id = $1`;
    const result = (await db.query(queryStatement, [proId])).rows;
    return result;
  }

  async function findAll() {
    const db = await makeDb();
    const queryStatement = 'SELECT * FROM product';
    const result = (await db.query(queryStatement)).rows;
    // result.map(async (item) => {
    //   console.group('=>', item.name);
    //   const images = await findProductImages(item.pro_id);
    //   console.log(images);
    //   console.groupEnd();
    // });
    return result;
  }

  async function findById(proId) {
    const db = await makeDb();
    const queryStatement = `SELECT * FROM product WHERE pro_id = $1`;
    const result = (await db.query(queryStatement, [proId])).rows[0];
    const images = await findProductImages(proId);
    result.images = images;
    return result;
  }

  async function findByQuery(query) {
    const db = await makeDb();
    const queryStatement = `SELECT * 
                            FROM product
                            WHERE name ILIKE '%' || $1 || '%'
                            OR description ILIKE '%' || $1 || '%'`;
    const result = (await db.query(queryStatement, [query])).rows;
    return result;
  }

  async function findByCategory(catId) {
    const db = await makeDb();
    const queryStatement = `SELECT * 
                            FROM product NATURAL JOIN pro_cat
                            WHERE cat_id = $1`;
    const result = (await db.query(queryStatement, [catId])).rows;
    return result;
  }

  async function insert({ ...product }) {
    const db = await makeDb();
    const queryStatement = `INSERT INTO
                                product(pro_id, name, description, collection, price, enable) 
                                VALUES($1, $2, $3, $4, $5, $6) RETURNING *`;
    const result = await db.query(
      queryStatement,
      Object.values({ ...product })
    );
    return result.rows[0];
  }

  async function update({ ...product }) {
    const db = await makeDb();
    const queryStatement = `UPDATE product
                                SET name = $2,
                                    description = $3,
                                    collection = $4,
                                    price = $5,
                                    enable = $6
                                WHERE pro_id = $1 
                                RETURNING *`;
    const result = await db.query(
      queryStatement,
      Object.values({ ...product })
    );
    return result.rows[0];
  }

  async function deleteById(proId) {
    const db = await makeDb();
    const queryStatement = `DELETE FROM product WHERE pro_id = $1`;
    const result = (await db.query(queryStatement, [proId])).rows[0];
    return result;
  }

  return Object.freeze({
    findAll,
    findById,
    findByQuery,
    findByCategory,
    insert,
    update,
    deleteById,
  });
}
