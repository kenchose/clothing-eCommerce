import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { toggleCartHidden } from "../../redux/actions/cart.actions";
import { selectCartItemsCount } from "../../redux/selectors/cart.selectors";

import * as sc from "./CartIcon.styles";

const CartIcon = ({ toggleCartHidden, itemQuantity }) => {
	return (
		<sc.CartIconContainer onClick={toggleCartHidden}>
			<sc.ShoppingIcon />
			<sc.ItemCountContainer>{itemQuantity}</sc.ItemCountContainer>
		</sc.CartIconContainer>
	);
};

const mapStateToProps = createStructuredSelector({
	itemQuantity: selectCartItemsCount,
});

export default connect(mapStateToProps, { toggleCartHidden })(CartIcon);
