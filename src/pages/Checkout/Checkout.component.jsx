import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import CheckoutItem from "../../components/CheckoutItem/CheckoutItem.component";
import StripeButton from "../../components/StripeButton/StripeButton.component";

import {
	selectCartItems,
	selectCartTotal,
} from "../../redux/selectors/cart.selectors";

import "./Checkout.styles.scss";

const Checkout = ({ total, cartItems }) => {
	const itemsInCart = cartItems.map((item) => {
		return <CheckoutItem key={item.id} cartItem={item} />;
	});

	return (
		<div className="checkout-page">
			<div className="checkout-header">
				<div className="header-block">
					<span>Product</span>
				</div>
				<div className="header-block">
					<span>Description</span>
				</div>
				<div className="header-block">
					<span>Quantity</span>
				</div>
				<div className="header-block">
					<span>Price</span>
				</div>
				<div className="header-block">
					<span>Remove</span>
				</div>
			</div>
			{itemsInCart}
			<div className="total">
				<span>TOTAL: ${total}</span>
			</div>
			<div className="test-warning">
				*Please use the following test credit card*
				<br />
				4242 4242 4242 4242 4242 - Exp: Future date CVV: 123
			</div>
			<StripeButton price={total} />
		</div>
	);
};

const mapStateToProps = createStructuredSelector({
	cartItems: selectCartItems,
	total: selectCartTotal,
});

export default connect(mapStateToProps)(Checkout);
