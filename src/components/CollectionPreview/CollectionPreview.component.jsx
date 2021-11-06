import React from "react";

import "./CollectionPreview.styles.scss";
import CollectionItem from "../CollectionItem/CollectionItem.components";

const CollectionPreview = ({ title, items }) => {
	const itemPreview = items
		.slice(0, 4)
		.map((item) => <CollectionItem key={item.id} item={item} />);

	return (
		<div className="collection-preview">
			<h1 className="title">{title.toUpperCase()}</h1>
			<div className="preview">{itemPreview}</div>
		</div>
	);
};

export default CollectionPreview;
