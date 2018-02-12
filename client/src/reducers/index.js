import { combineReducers } from 'redux';
import products from './products';
import auth from './auth';

export default combineReducers({
  //...reducers
  products,
  auth
});
