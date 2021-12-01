import React from "react";
import { Route } from "react-router-dom";

import CollectionsOverview from "../../components/CollectionsOverview/CollectionsOverview.component";
import Collection from "../Collection/Collection.component";

const ShopPage = ({ match }) => {
	return (
		<div className="shop-page">
			<Route exact path={`${match.path}`} component={CollectionsOverview} />
			<Route path={`${match.path}/:urlParams`} component={Collection} />
		</div>
	);
};

export default ShopPage;
