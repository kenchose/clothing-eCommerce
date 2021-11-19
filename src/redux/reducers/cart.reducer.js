import * as actions from "../actions/actions.types";
import {
	addItemToCart,
	clearItemsFromCart,
	removeItemFromCart,
} from "../cart/cart.utils";

const INITIAL_STATE = {
	hidden: true,
	cartItems: [],
};

const cartReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case actions.TOGGLE_CART_HIDDEN:
			return {
				...state,
				hidden: !state.hidden,
			};
		case actions.ADD_ITEM:
			return {
				...state,
				cartItems: addItemToCart(state.cartItems, action.payload),
			};
		case actions.REMOVE_ITEM:
			return {
				...state,
				cartItems: removeItemFromCart(state.cartItems, action.payload),
			};
		case actions.CLEAR_ITEMS_FROM_CART:
			return {
				...state,
				cartItems: clearItemsFromCart(state.cartItems, action.payload),
			};
		default:
			return state;
	}
};

export default cartReducer;
