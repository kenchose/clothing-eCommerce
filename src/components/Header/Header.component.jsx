import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { Link } from "react-router-dom";

import { auth } from "../../firebase/firebase.utils";
import { selectCurrentUser } from "../../redux/users/user.selectors";
import { selectorCartHidden } from "../../redux/cart/cart.selectors";

import CartIcon from "../CartIcon/CartIcon.component";
import CartDropdown from "../CartDropwdown/CartDropwdown.component";

import { ReactComponent as Logo } from "../../assets/crown.svg";
import "./Header.styles.scss";

const Header = ({ currentUser, hidden }) => {
	return (
		<div className="header">
			<Link to="/" className="logo-container">
				<Logo />
			</Link>
			<div className="options">
				<Link to="/shop" className="option">
					SHOP
				</Link>
				<Link to="/contact" className="option">
					CONTACT
				</Link>
				{currentUser ? (
					<div className="option" onClick={() => auth.signOut()}>
						SIGN OUT
					</div>
				) : (
					<Link to="/signin" className="option">
						SIGN IN
					</Link>
				)}
				<CartIcon />
			</div>
			{hidden ? null : <CartDropdown />}
		</div>
	);
};

const mapStateToProps = createStructuredSelector({
	currentUser: selectCurrentUser,
	hidden: selectorCartHidden,
});

export default connect(mapStateToProps)(Header);
