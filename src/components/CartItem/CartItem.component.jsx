import React from "react";

import * as sc from "./CartItem.styles";

const CartItem = ({ item: { name, price, quantity, imageUrl } }) => {
	return (
		<sc.CartItemContainer>
			<sc.CartItemImage src={imageUrl} alt="item" />
			<sc.ItemDetailsContainer>
				<span className="name">{name}</span>
				<span className="price">
					{quantity} X ${price}
				</span>
			</sc.ItemDetailsContainer>
		</sc.CartItemContainer>
	);
};

export default CartItem;
