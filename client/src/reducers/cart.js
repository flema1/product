import {
  ADD_TO_CART,
  REMOVE_FROM_CART
} from '../actions/constants/cart.constants';
//import _ from 'underscore';
import _ from 'underscore';

const INITIAL_STATE = { items: [] };

export default (cart = INITIAL_STATE, action)=> {
    switch (action.type) {
        case ADD_TO_CART:
            var cartState = JSON.parse(localStorage.getItem('cart'));
            cartState = cartState ? cartState : [];
            localStorage.setItem('cart', JSON.stringify([...cartState, action.item]));
            return {
                items: JSON.parse(localStorage.getItem('cart'))
            };
        case REMOVE_FROM_CART:
            var cartData = JSON.parse(localStorage.getItem('cart'));
            cart = _.filter(cartData, function (item) {
                return item.id !== action.id
            });
            localStorage.setItem('cart', JSON.stringify(cart));
            return {
                items : cart
            };
        default:
            return cart;
    }
}