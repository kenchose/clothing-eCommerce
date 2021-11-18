export const addItemToCart = (cartItems, cartItemToAdd) => {
	const existingCartItem = cartItems.find((cartItem) => {
		return cartItem.id === cartItemToAdd.id;
	});

	if (existingCartItem) {
		existingCartItem.quantity++;
		return [...cartItems];
	}

	return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};

export const clearItemsFromCart = (cartItems, cartItemsToRemove) => {
	return cartItems.filter((cartItem) => {
		return cartItem.id !== cartItemsToRemove;
	});
};
