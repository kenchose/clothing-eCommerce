import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { withRouter } from "react-router-dom";

import { selectCartItems } from "../../redux/selectors/cart.selectors";
import { toggleCartHidden } from "../../redux/actions/cart.actions";

import CustomButton from "../CustomButton/CustomButton.component";
import CartItem from "../CartItem/CartItem.component";

import "./CartDropdown.styles.scss";

const CartDropdown = ({ cartItems, history, toggleCartHidden }) => {
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
			<CustomButton
				onClick={() => {
					history.push("/checkout");
					toggleCartHidden();
				}}>
				GO TO CHECKOUT
			</CustomButton>
		</div>
	);
};

const mapStateToProps = createStructuredSelector({
	cartItems: selectCartItems,
});

export default withRouter(
	connect(mapStateToProps, { toggleCartHidden })(CartDropdown)
);
