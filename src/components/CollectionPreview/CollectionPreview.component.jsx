import React from "react";

import "./CollectionPreview.styles.scss";
import CollectionItem from "../CollectionItem/CollectionItem.components";

const CollectionPreview = ({ title, items }) => {
	const itemPreview = () => {
		return items
			.slice(0, 4)
			.map(({ id, ...otherItemProps }) => (
				<CollectionItem key={id} {...otherItemProps} />
			));
	};

	return (
		<div className="collection-preview">
			<h1 className="title">{title.toUpperCase()}</h1>
			<div className="preview">{itemPreview()}</div>
		</div>
	);
};

export default CollectionPreview;
