import { orderUseCases } from '../../use-cases';

import makeGenerateOrder from './generate-order';

const { processOrder } = orderUseCases;

const generateOrder = makeGenerateOrder({ processOrder });

export default {
  generateOrder,
};
