import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { withRouter } from "react-router-dom";

import { selectCartItems } from "../../redux/selectors/cart.selectors";
import { toggleCartHidden } from "../../redux/actions/cart.actions";

import CartItem from "../CartItem/CartItem.component";

import * as sc from "./CartDropdown.styles";

const CartDropdown = ({ cartItems, history, toggleCartHidden }) => {
	const cartItem = cartItems.length ? (
		cartItems.map((cartItem) => {
			return <CartItem key={cartItem.id} item={cartItem} />;
		})
	) : (
		<sc.EmptyMessageContainer>Your cart is empty</sc.EmptyMessageContainer>
	);

	return (
		<sc.CartDropdownContainer>
			<sc.CartItemsContainer>{cartItem}</sc.CartItemsContainer>
			<sc.CartDropdownButton
				onClick={() => {
					history.push("/checkout");
					toggleCartHidden();
				}}>
				GO TO CHECKOUT
			</sc.CartDropdownButton>
		</sc.CartDropdownContainer>
	);
};

const mapStateToProps = createStructuredSelector({
	cartItems: selectCartItems,
});

export default withRouter(
	connect(mapStateToProps, { toggleCartHidden })(CartDropdown)
);
