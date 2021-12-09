import React from "react";
import { connect } from "react-redux";

import { selectCollection } from "../../redux/selectors/shop.selectors";

import CollectionItem from "../../components/CollectionItem/CollectionItem.components";

import * as sc from "./Collection.styles";

const Collection = ({ collection }) => {
	const { title, items } = collection;

	const collectionItems = items.map((item) => {
		return <CollectionItem key={item.id} item={item} />;
	});

	return (
		<sc.CollectionPageContainer>
			<sc.TitleContainer>{title}</sc.TitleContainer>
			<sc.ItemsContainer>{collectionItems}</sc.ItemsContainer>
		</sc.CollectionPageContainer>
	);
};

const mapStateToProps = (state, ownProps) => ({
	collection: selectCollection(ownProps.match.params.category)(state),
});

export default connect(mapStateToProps)(Collection);
