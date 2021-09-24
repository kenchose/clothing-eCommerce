import React from "react";
import { Route } from "react-router-dom";
import "./App.css";

import HomePage from "./pages/homepage/HomePage.component";
import Shop from "./pages/shop/Shop.component.jsx";

function App() {
	return (
		<div>
			<Route exact path="/" component={HomePage} />
			<Route exact path="/shop" component={Shop} />
		</div>
	);
}

export default App;
