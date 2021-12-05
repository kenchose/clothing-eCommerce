import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeButton = ({ price }) => {
	const priceForStripe = price * 100;
	const publishableKey = "pk_test_ra7JoAurvINp073bUblnyhVr00Lkha4Nru";
	const onToken = (token) => {
		alert("Payment successful");
	};

	return (
		<StripeCheckout
			label="Pay Now"
			name="Royal Clothing Ltd."
			billingAddress
			shippingAddress
			image="https://svgshare.com/i/CUz.svg"
			description={`Your total it $${price}`}
			amount={priceForStripe}
			panelLabel="Pay Now"
			token={onToken}
			stripeKey={publishableKey}
		/>
	);
};

export default StripeButton;
