import React from "react";
import { connect } from "react-redux";

import CustomButton from "../CustomButton/CustomButton.component";
import CartItem from "../CartItem/CartItem.component";

import "./CartDropdown.styles.scss";

const CartDropdown = ({ cartItems }) => {
	const cartItem = cartItems.map((cartItem) => {
		return <CartItem key={cartItem.id} item={cartItem} />;
	});

	return (
		<div className="cart-dropdown">
			<div className="cart-items">{cartItem}</div>
			<CustomButton>GO TO CHECKOUT</CustomButton>
		</div>
	);
};

const mapStateToProps = ({ cart: { cartItems } }) => ({
	cartItems,
});

export default connect(mapStateToProps)(CartDropdown);