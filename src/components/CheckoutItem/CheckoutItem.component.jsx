import React from "react";
import { connect } from "react-redux";

import {
	clearItemsFromCart,
	removeItem,
	addItem,
} from "../../redux/actions/cart.actions";

import "./CheckoutItem.styles.scss";

const CheckoutItem = ({
	cartItem,
	clearItemsFromCart,
	removeItem,
	addItem,
}) => {
	const { name, quantity, price, imageUrl } = cartItem;
	return (
		<div className="checkout-item">
			<div className="image-container">
				<img src={imageUrl} alt="item" />
			</div>
			<span className="name">{name}</span>
			<span className="quantity">
				<div className="arrow" onClick={() => removeItem(cartItem.id)}>
					&#10094;
				</div>
				<span className="value">{quantity}</span>
				<div className="arrow" onClick={() => addItem(cartItem)}>
					&#10095;
				</div>
			</span>
			<span className="price">${price}</span>
			<div
				className="remove-button"
				onClick={() => clearItemsFromCart(cartItem.id)}>
				&#10005;
			</div>
		</div>
	);
};

export default connect(null, { clearItemsFromCart, removeItem, addItem })(
	CheckoutItem
);
