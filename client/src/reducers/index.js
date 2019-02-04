import { combineReducers } from 'redux';
import products from './products';
import cart from './cart';
import auth from './auth';

export default combineReducers({
  //...reducers
  products,
  auth,
  cart
});
