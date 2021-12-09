import React from "react";

import CollectionItem from "../CollectionItem/CollectionItem.components";

import * as sc from "./CollectionPreview.styles";

const CollectionPreview = ({ title, items }) => {
	const itemPreview = items
		.slice(0, 4)
		.map((item) => <CollectionItem key={item.id} item={item} />);

	return (
		<sc.CollectionPreviewContainer>
			<sc.TitleContainer>{title.toUpperCase()}</sc.TitleContainer>
			<sc.PreviewContainer>{itemPreview}</sc.PreviewContainer>
		</sc.CollectionPreviewContainer>
	);
};

export default CollectionPreview;
