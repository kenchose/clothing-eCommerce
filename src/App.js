import React from "react";
import { Route } from "react-router-dom";
import "./App.css";

import HomePage from "./pages/Home/Home.component.jsx";
import ShopPage from "./pages/Shop/Shop.component.jsx";

function App() {
	return (
		<div>
			<Route exact path="/" component={HomePage} />
			<Route exact path="/shop" component={ShopPage} />
		</div>
	);
}

export default App;
