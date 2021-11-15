import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { withRouter } from "react-router-dom";

import CustomButton from "../CustomButton/CustomButton.component";
import CartItem from "../CartItem/CartItem.component";
import { selectorCartItem } from "../../redux/cart/cart.selectors";

import "./CartDropdown.styles.scss";

const CartDropdown = ({ cartItems, history }) => {
	const cartItem = cartItems.length ? (
		cartItems.map((cartItem) => {
			return <CartItem key={cartItem.id} item={cartItem} />;
		})
	) : (
		<span className="empty-message">Your cart is empty</span>
	);

	return (
		<div className="cart-dropdown">
			<div className="cart-items">{cartItem}</div>
			<CustomButton onClick={() => history.push("/checkout")}>
				GO TO CHECKOUT
			</CustomButton>
		</div>
	);
};

const mapStateToProps = createStructuredSelector({
	cartItems: selectorCartItem,
});

export default withRouter(connect(mapStateToProps)(CartDropdown));
