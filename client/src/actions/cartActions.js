import {
  ADD_TO_CART,
  REMOVE_FROM_CART
} from './constants/cart.constants';
import _ from 'underscore';

/**
 * To add item into cart
 */
export function addToCart(item) {
	return { type: ADD_TO_CART, item };
}

/**
 * To remove item from cart
 */
export function removeFromCart(id) {
	return { type: REMOVE_FROM_CART, id };
}

/**
 * To check whether item is in cart or not
 */
export function isInCart(state, props) {
	// var cartItems = JSON.parse(localStorage.getItem('cart'));
	// return _.some(cartItems, function (item) {
	// 	return item.id == props.id;
	// });
}

/**
 * It store information of cart items with quantity and total price
 */
export function getCart(state, props) {
	// var cartItems = JSON.parse(localStorage.getItem('cart'));
	// var total = 0.00;
	// _.each(cartItems, function (item) {
	// 	total += item.price;
	// });
	// return {
	// 	total: total.toFixed(2),
	// 	items: cartItems ? cartItems.length : 0
	// };
}


