import makeListCategory from './list-category';
import makeAddCategory from './add-category';
import makeUpdateCategory from './update-category';
import makeRemoveCategory from './remove-category';

import { categoryDb } from '../../data-access';

const listCategory = makeListCategory({ categoryDb });
const addCategory = makeAddCategory({ categoryDb });
const updateCategory = makeUpdateCategory({ categoryDb });
const removeCategory = makeRemoveCategory({ categoryDb });

export default { listCategory, addCategory, updateCategory, removeCategory };
