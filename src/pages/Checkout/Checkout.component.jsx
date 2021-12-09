import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import CheckoutItem from "../../components/CheckoutItem/CheckoutItem.component";
import StripeButton from "../../components/StripeButton/StripeButton.component";

import {
	selectCartItems,
	selectCartTotal,
} from "../../redux/selectors/cart.selectors";

import * as sc from "./Checkout.styles";

const Checkout = ({ total, cartItems }) => {
	const itemsInCart = cartItems.map((item) => {
		return <CheckoutItem key={item.id} cartItem={item} />;
	});

	return (
		<sc.CheckoutPageContainer>
			<sc.CheckoutHeaderContainer>
				<sc.HeaderBlockContainer>
					<span>Product</span>
				</sc.HeaderBlockContainer>
				<sc.HeaderBlockContainer>
					<span>Description</span>
				</sc.HeaderBlockContainer>
				<sc.HeaderBlockContainer>
					<span>Quantity</span>
				</sc.HeaderBlockContainer>
				<sc.HeaderBlockContainer>
					<span>Price</span>
				</sc.HeaderBlockContainer>
				<sc.HeaderBlockContainer>
					<span>Remove</span>
				</sc.HeaderBlockContainer>
			</sc.CheckoutHeaderContainer>
			{itemsInCart}
			<sc.TotalContainer>
				<span>TOTAL: ${total}</span>
			</sc.TotalContainer>
			<sc.TestWarningContainer>
				*Please use the following test credit card*
				<br />
				4242 4242 4242 4242 4242 - Exp: Future date CVV: 123
			</sc.TestWarningContainer>
			<StripeButton price={total} />
		</sc.CheckoutPageContainer>
	);
};

const mapStateToProps = createStructuredSelector({
	cartItems: selectCartItems,
	total: selectCartTotal,
});

export default connect(mapStateToProps)(Checkout);
