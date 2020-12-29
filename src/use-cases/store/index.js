import makeListStore from './list-store';
import makeAddStore from './add-store';
import makeUpdateStore from './update-store';
import makeRemoveStore from './remove-store';

import { storeDb } from '../../data-access';

const listStore = makeListStore({ storeDb });
const addStore = makeAddStore({ storeDb });
const updateStore = makeUpdateStore({ storeDb });
const removeStore = makeRemoveStore({ storeDb });

export default { listStore, addStore, updateStore, removeStore };
