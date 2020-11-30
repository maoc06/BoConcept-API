/* eslint-disable no-empty-pattern */
/* eslint-disable camelcase */
export default function buildMakeCategory({}) {
  return function makeCategory({ cat_id, name } = {}) {
    if (!name) {
      throw new Error('Category must have a name');
    }
    return Object.freeze({
      getCategoryId: () => cat_id,
      getCategoryName: () => name,
    });
  };
}
