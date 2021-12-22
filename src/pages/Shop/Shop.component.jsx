import React from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";

import { updateCollections } from "../../redux/actions/shop.actions";

import CollectionsOverview from "../../components/CollectionsOverview/CollectionsOverview.component";
import Collection from "../Collection/Collection.component";
import WithSpinner from "../../components/WithSpinner/WithSpinner.component";

import {
	firestore,
	convertCollectionsSnapshotToMap,
} from "../../firebase/firebase.utils";

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionsPageWithSpinner = WithSpinner(Collection);
class ShopPage extends React.Component {
	state = {
		loading: true,
	};

	unsubscribeFromSnapshot = null;

	componentDidMount() {
		const { updateCollections } = this.props;
		const collectionRef = firestore.collection("collections");

		this.unsubscribeFromSnapshot = collectionRef.onSnapshot(
			async (snapshot) => {
				const collectionsMaps = convertCollectionsSnapshotToMap(snapshot);
				updateCollections(collectionsMaps);
				this.setState({ loading: false });
			}
		);
	}

	componentWillUnmount() {
		this.unsubscribeFromSnapshot();
	}

	render() {
		const { match } = this.props;
		const { loading } = this.state;

		return (
			<div className="shop-page">
				<Route
					exact
					path={`${match.path}`}
					render={(props) => (
						<CollectionsOverviewWithSpinner isLoading={loading} {...props} />
					)}
				/>
				<Route
					path={`${match.path}/:category`}
					render={(props) => (
						<CollectionsPageWithSpinner isLoading={loading} {...props} />
					)}
				/>
			</div>
		);
	}
}

export default connect(null, { updateCollections })(ShopPage);
