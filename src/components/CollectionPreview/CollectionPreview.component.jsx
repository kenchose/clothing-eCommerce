import React from "react";
import { withRouter } from "react-router-dom";

import CollectionItem from "../CollectionItem/CollectionItem.components";

import * as sc from "./CollectionPreview.styles";

const CollectionPreview = ({ title, items, history, match, routeName }) => {
	const itemPreview = items
		.slice(0, 4)
		.map((item) => <CollectionItem key={item.id} item={item} />);

	return (
		<sc.CollectionPreviewContainer>
			<sc.TitleContainer
				onClick={() => history.push(`${match.path}/${routeName}`)}>
				{title.toUpperCase()}
			</sc.TitleContainer>
			<sc.PreviewContainer>{itemPreview}</sc.PreviewContainer>
		</sc.CollectionPreviewContainer>
	);
};

export default withRouter(CollectionPreview);
