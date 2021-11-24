import React from "react";
import { connect } from "react-redux";

import { selectCollection } from "../../redux/selectors/shop.selectors";

import CollectionItem from "../../components/CollectionItem/CollectionItem.components";

import "./Collection.styles.scss";

const Collection = ({ collection }) => {
	const { title, items } = collection;

	const collectionItems = items.map((item) => {
		return <CollectionItem key={item.id} item={item} />;
	});

	return (
		<div className="collection-page">
			<h2 className="title">{title}</h2>
			<div className="items">{collectionItems}</div>
		</div>
	);
};

const mapStateToProps = (state, ownProps) => ({
	collection: selectCollection(ownProps.match.params.urlParams)(state),
});

export default connect(mapStateToProps)(Collection);
