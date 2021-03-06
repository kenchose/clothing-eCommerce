import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectCollectionsForPreview } from "../../redux/selectors/shop.selectors";

import CollectionPreview from "../CollectionPreview/CollectionPreview.component";

import { CollectionsOverviewContainer } from "./CollectionsOverview.styles";

const CollectionsOverview = ({ collections }) => {
	return (
		<CollectionsOverviewContainer>
			{collections.map(({ id, ...otherCollectionProps }) => {
				return <CollectionPreview key={id} {...otherCollectionProps} />;
			})}
		</CollectionsOverviewContainer>
	);
};

const mapStateToProps = createStructuredSelector({
	collections: selectCollectionsForPreview,
});

export default connect(mapStateToProps)(CollectionsOverview);
