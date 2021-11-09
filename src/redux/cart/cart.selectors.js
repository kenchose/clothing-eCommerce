import { createSelector } from "reselect";

const selectCart = (state) => state.cart;

export const selectorCartItem = createSelector(
	[selectCart],
	(cart) => cart.cartItems
);

export const selectCartItemCount = createSelector(
	[selectorCartItem],
	(cartItems) =>
		cartItems.reduce((total, currentValue) => total + currentValue.quantity, 0)
);
