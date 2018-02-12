import axios from 'axios';
import {
  REQUEST_PRODUCTS,
  RECEIVE_PRODUCTS
} from './constants/products.constants';

export const requestProducts = (dispatch) =>
  dispatch =>
  dispatch({
    type: REQUEST_PRODUCTS,
  })

export const receiveProducts = (data, dispatch) =>
  dispatch =>
  dispatch({
    type: RECEIVE_PRODUCTS,
    payload: data
  })

export const fetchProducts = (dispatch) =>
  dispatch => {
    dispatch(requestProducts())
    axios.get('/products/all')
      .then(res => {
        dispatch(receiveProducts(res.data))
      })
  }


