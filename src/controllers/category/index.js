import { categoryUseCases } from '../../use-cases';

import makeGetCategory from './get-category';
import makePostCategory from './post-category';
import makePutCategory from './put-category';
import makeDeleteCategory from './delete-category';

const {
  listCategory,
  addCategory,
  updateCategory,
  removeCategory,
} = categoryUseCases;

const getCategory = makeGetCategory({ listCategory });
const postCategory = makePostCategory({ addCategory });
const putCategory = makePutCategory({ updateCategory });
const deleteCategory = makeDeleteCategory({ removeCategory });

export default {
  getCategory,
  postCategory,
  putCategory,
  deleteCategory,
};
