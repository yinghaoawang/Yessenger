import { combineReducers } from 'redux';

import Login from './auth/login/reducer';
import Register from './auth/register/reducer';

export default combineReducers({
  Login,
  Register
});