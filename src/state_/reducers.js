
import { combineReducers } from 'redux';

import counterReducer from './authReducer/auth.reducers';

const rootReducer = combineReducers({
  auth: counterReducer,
});

export default rootReducer;