import makeAuthCredentials from './auth-crendentials';
import makeHandleToken from '../../utils/handle-token';

import { customerDb } from '../../data-access';

const handleToken = makeHandleToken();
const authCredentials = makeAuthCredentials({ customerDb, handleToken });

export default { authCredentials };
