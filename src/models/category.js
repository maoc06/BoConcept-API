/* eslint-disable no-empty-pattern */
/* eslint-disable camelcase */
export default function buildMakeCategory({}) {
  return function makeCategory({ cat_id, name, enable = 1 } = {}) {
    if (!name) {
      throw new Error('Category must have a name');
    }
    if (!enable) {
      throw new Error('The cart must have a status (enabled/disabled)');
    }
    return Object.freeze({
      getCategoryId: () => cat_id,
      getCategoryName: () => name,
      getEnable: () => enable,
    });
  };
}
