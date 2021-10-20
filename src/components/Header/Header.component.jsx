import React from "react";
import { Link } from "react-router-dom";
import "./Header.styles.scss";
import { ReactComponent as Logo } from "../../assets/crown.svg";

const Header = () => {
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
				<Link to="/signin" className="signin">
					SIGN IN
				</Link>
			</div>
		</div>
	);
};

export default Header;
