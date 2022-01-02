import React from "react";
import { connect } from "react-redux";

import {
	clearItemsFromCart,
	removeItem,
	addItem,
} from "../../redux/actions/cart.actions";

import * as sc from "./CheckoutItem.styles";

const CheckoutItem = ({ cartItem, clearItem, removeItem, addItem }) => {
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
			<sc.RemoveButtonContainer onClick={() => clearItem(cartItem.id)}>
				&#10005;
			</sc.RemoveButtonContainer>
		</sc.CheckoutItemContainer>
	);
};

const mapDispatchToProps = (dispatch) => ({
	clearItem: (item) => dispatch(clearItemsFromCart(item)),
	addItem: (item) => dispatch(addItem(item)),
	removeItem: (item) => dispatch(removeItem(item)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
