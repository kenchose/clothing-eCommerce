import * as actions from "./actions.types";

export const toggleCartHidden = () => ({
	type: actions.TOGGLE_CART_HIDDEN,
});

export const addItem = (item) => ({
	type: actions.ADD_ITEM,
	payload: item,
});

export const clearItemsFromCart = (itemId) => ({
	type: actions.CLEAR_ITEMS_FROM_CART,
	payload: itemId,
});
