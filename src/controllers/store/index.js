import { storeUseCases } from '../../use-cases';

import makeGetStore from './get-store';
import makePostStore from './post-store';
import makePutStore from './put-store';
import makeDeleteStore from './delete-store';

const { listStore, addStore, updateStore, removeStore } = storeUseCases;

const getStore = makeGetStore({ listStore });
const postStore = makePostStore({ addStore });
const putStore = makePutStore({ updateStore });
const deleteStore = makeDeleteStore({ removeStore });

export default {
  getStore,
  postStore,
  putStore,
  deleteStore,
};
