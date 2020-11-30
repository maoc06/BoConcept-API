export default function makeCategoryDb({ makeDb }) {
  async function findAll() {
    const db = await makeDb();
    const queryStatement = 'SELECT * FROM category';
    const result = (await db.query(queryStatement)).rows;
    return result;
  }

  async function findById(catId) {
    const db = await makeDb();
    const queryStatement = `SELECT * FROM category WHERE cat_id = $1`;
    const result = (await db.query(queryStatement, [catId])).rows[0];
    return result;
  }

  async function insert({ ...category }) {
    const db = await makeDb();
    const queryStatement = `INSERT INTO
                                category(name) 
                                VALUES($1) RETURNING *`;
    const result = await db.query(
      queryStatement,
      Object.values({ ...category })
    );
    return result.rows[0];
  }

  async function update({ ...category }) {
    const db = await makeDb();
    const queryStatement = `UPDATE category
                                SET name = $2
                                WHERE cat_id = $1 
                                RETURNING *`;
    const result = await db.query(
      queryStatement,
      Object.values({ ...category })
    );
    return result.rows[0];
  }

  async function deleteById(catId) {
    const db = await makeDb();
    const queryStatement = `DELETE FROM category WHERE cat_id = $1`;
    const result = (await db.query(queryStatement, [catId])).rows[0];
    return result;
  }

  return Object.freeze({
    findAll,
    findById,
    insert,
    update,
    deleteById,
  });
}
