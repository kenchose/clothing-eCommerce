import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import {
	selectCartItemCount,
	selectorCartTotal,
} from "../../redux/cart/cart.selectors";

import "./CheckoutPage.styles.scss";

const Checkout = ({ total, cartItems }) => {
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
			{cartItems}
			<div className="total">
				<span>TOTAL: ${total}</span>
			</div>
		</div>
	);
};

const mapStateToProps = createStructuredSelector({
	cartItems: selectCartItemCount,
	total: selectorCartTotal,
});

export default connect(mapStateToProps)(Checkout);
