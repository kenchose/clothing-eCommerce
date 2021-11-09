import React from "react";
import { connect } from "react-redux";

import { toggleCartHidden } from "../../redux/actions/cart.actions";
import { selectCartItemCount } from "../../redux/cart/cart.selectors";

import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import "./CartIcon.styles.scss";

const CartIcon = ({ toggleCartHidden, itemQuantity }) => {
	return (
		<div className="cart-icon" onClick={toggleCartHidden}>
			<ShoppingIcon className="shopping-icon" />
			<span className="item-count">{itemQuantity}</span>
		</div>
	);
};

const mapStateToProps = (state) => ({
	itemQuantity: selectCartItemCount(state),
});

export default connect(mapStateToProps, { toggleCartHidden })(CartIcon);
