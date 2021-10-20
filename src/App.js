import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";

import HomePage from "./pages/Home/Home.component";
import ShopPage from "./pages/Shop/Shop.component";
import Header from "./components/Header/Header.component";
import SignInAndOut from "./pages/SignInAndOut/SignInAndOut";

const App = () => {
	return (
		<div>
			<Header />
			<Switch>
				<Route exact path="/" component={HomePage} />
				<Route exact path="/shop" component={ShopPage} />
				<Route exact path="/signin" component={SignInAndOut} />
			</Switch>
		</div>
	);
};

export default App;
