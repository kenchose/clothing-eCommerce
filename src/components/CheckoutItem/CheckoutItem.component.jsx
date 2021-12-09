import React from "react";
import { connect } from "react-redux";

import {
	clearItemsFromCart,
	removeItem,
	addItem,
} from "../../redux/actions/cart.actions";

import * as sc from "./CheckoutItem.styles";

const CheckoutItem = ({
	cartItem,
	clearItemsFromCart,
	removeItem,
	addItem,
}) => {
	const { name, quantity, price, imageUrl } = cartItem;
	return (
		<sc.CheckoutItemContainer>
			<sc.ImageContainer>
				<img src={imageUrl} alt="item" />
			</sc.ImageContainer>
			<sc.TextContainer>{name}</sc.TextContainer>
			<sc.QuantityContainer>
				<div className="arrow" onClick={() => removeItem(cartItem.id)}>
					&#10094;
				</div>
				<span className="value">{quantity}</span>
				<div className="arrow" onClick={() => addItem(cartItem)}>
					&#10095;
				</div>
			</sc.QuantityContainer>
			<sc.TextContainer>${price}</sc.TextContainer>
			<sc.RemoveButtonContainer onClick={() => clearItemsFromCart(cartItem.id)}>
				&#10005;
			</sc.RemoveButtonContainer>
		</sc.CheckoutItemContainer>
	);
};

export default connect(null, { clearItemsFromCart, removeItem, addItem })(
	CheckoutItem
);
