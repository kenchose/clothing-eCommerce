import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { auth } from "../../firebase/firebase.utils";
import { selectCurrentUser } from "../../redux/selectors/user.selectors";
import { selectCartHidden } from "../../redux/selectors/cart.selectors";

import CartIcon from "../CartIcon/CartIcon.component";
import CartDropdown from "../CartDropwdown/CartDropdown.component";

import { ReactComponent as Logo } from "../../assets/crown.svg";

import * as sc from "./Header.styles";

const Header = ({ currentUser, hidden }) => {
	return (
		<sc.HeaderContainer>
			<sc.LogoContainer to="/">
				<Logo />
			</sc.LogoContainer>
			<sc.OptionsContainer>
				<sc.OptionLink to="/shop">SHOP</sc.OptionLink>
				<sc.OptionLink to="/contact">CONTACT</sc.OptionLink>
				{currentUser ? (
					<sc.OptionLink as="div" onClick={() => auth.signOut()}>
						SIGN OUT
					</sc.OptionLink>
				) : (
					<sc.OptionLink to="/signin">SIGN IN</sc.OptionLink>
				)}
				<CartIcon />
			</sc.OptionsContainer>
			{hidden ? null : <CartDropdown />}
		</sc.HeaderContainer>
	);
};

const mapStateToProps = createStructuredSelector({
	currentUser: selectCurrentUser,
	hidden: selectCartHidden,
});

export default connect(mapStateToProps)(Header);
