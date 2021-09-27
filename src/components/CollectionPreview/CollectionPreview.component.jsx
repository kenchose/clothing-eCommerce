import React from "react";

import "./CollectionPreview.styles.scss";

const CollectionPreview = ({ title, items }) => {
	const itemPreview = () => {
		return items
			.filter((item, idx) => idx < 4)
			.map((item) => <div key={item.id}>{item.name}</div>);
	};

	return (
		<div className="collection-preview">
			<h1 className="title">{title.toUpperCase()}</h1>
			<div className="preview">{itemPreview()}</div>
		</div>
	);
};

export default CollectionPreview;
