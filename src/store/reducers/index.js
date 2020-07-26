import { combineReducers } from 'redux';

import register from './register';
import auth from './auth';
import task from './task';

export default combineReducers({
  register,
  auth,
  task
});