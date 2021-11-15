import { createSelector } from "reselect";

const selectCart = (state) => state.cart;

export const selectorCartItem = createSelector(
	[selectCart],
	(cart) => cart.cartItems
);

export const selectorCartHidden = createSelector(
	[selectCart],
	(cart) => cart.hidden
);

export const selectCartItemCount = createSelector(
	[selectorCartItem],
	(cartItems) =>
		cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0)
);

export const selectorCartTotal = createSelector(
	[selectorCartItem],
	(cartItems) =>
		cartItems.reduce(
			(total, cartItem) => total + cartItem.quantity * cartItem.price,
			0
		)
);
