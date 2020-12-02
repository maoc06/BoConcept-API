import { makeCategory } from '../../models';

export default function makeAddCategory({ categoryDb }) {
  return async function addCategory(categoryInfo) {
    const category = makeCategory(categoryInfo);
    return categoryDb.insert({
      name: category.getCategoryName(),
      enable: category.getEnable(),
    });
  };
}
