import { makeCategory } from '../../models';

export default function makeUpdateCategory({ categoryDb }) {
  return async function updateCategory(categoryInfo) {
    const category = makeCategory(categoryInfo);

    const existing = await categoryDb.findById(category.getCategoryId());

    if (!existing) {
      throw new RangeError('Category not found.');
    }

    return categoryDb.update({
      cat_id: category.getCategoryId(),
      name: category.getCategoryName(),
    });
  };
}
