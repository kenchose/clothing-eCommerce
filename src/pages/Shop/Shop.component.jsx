import React from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";

import { updateCollections } from "../../redux/actions/shop.actions";

import CollectionsOverview from "../../components/CollectionsOverview/CollectionsOverview.component";
import Collection from "../Collection/Collection.component";

import {
	firestore,
	convertCollectionsSnapshotToMap,
} from "../../firebase/firebase.utils";
class ShopPage extends React.Component {
	unsubscribeFromSnapshot = null;

	componentDidMount() {
		const { updateCollections } = this.props;
		const collectionRef = firestore.collection("collections");

		this.unsubscribeFromSnapshot = collectionRef.onSnapshot(
			async (snapshot) => {
				const collectionsMaps = convertCollectionsSnapshotToMap(snapshot);
				updateCollections(collectionsMaps);
			}
		);
	}

	componentWillUnmount() {
		this.unsubscribeFromSnapshot();
	}

	render() {
		const { match } = this.props;
		return (
			<div className="shop-page">
				<Route exact path={`${match.path}`} component={CollectionsOverview} />
				<Route path={`${match.path}/:category`} component={Collection} />
			</div>
		);
	}
}

export default connect(null, { updateCollections })(ShopPage);
