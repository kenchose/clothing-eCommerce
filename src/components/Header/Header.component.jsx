import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { auth } from "../../firebase/firebase.utils";
import { selectCurrentUser } from "../../redux/selectors/user.selectors";
import { selectCartHidden } from "../../redux/selectors/cart.selectors";

import CartIcon from "../CartIcon/CartIcon.component";
import CartDropdown from "../CartDropwdown/CartDropdown.component";

import { ReactComponent as Logo } from "../../assets/crown.svg";

import {
	HeaderContainer,
	LogoContainer,
	OptionsContainer,
	OptionDiv,
	OptionLink,
} from "./Header.styles";

// import "./Header.styles.scss";

const Header = ({ currentUser, hidden }) => {
	return (
		<HeaderContainer>
			<LogoContainer to="/">
				<Logo />
			</LogoContainer>
			<OptionsContainer>
				<OptionLink to="/shop">SHOP</OptionLink>
				<OptionLink to="/contact">CONTACT</OptionLink>
				{currentUser ? (
					<OptionDiv onClick={() => auth.signOut()}>SIGN OUT</OptionDiv>
				) : (
					<OptionLink to="/signin">SIGN IN</OptionLink>
				)}
				<CartIcon />
			</OptionsContainer>
			{hidden ? null : <CartDropdown />}
		</HeaderContainer>
	);
};

const mapStateToProps = createStructuredSelector({
	currentUser: selectCurrentUser,
	hidden: selectCartHidden,
});

export default connect(mapStateToProps)(Header);
