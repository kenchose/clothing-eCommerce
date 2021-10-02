import React from "react";

import "./CollectionPreview.styles.scss";
import CollectionItem from "../CollectionItem/CollectionItem.components";

const CollectionPreview = ({ title, items }) => {
	const itemPreview = () => {
		return items
			.slice(0, 4)
			.map(({ id, ...otherItemProps }) => (
				<CollectionItem key={id} {...otherItemProps}></CollectionItem>
			));

		// OR  //

		// return (
		// 	items
		// 		.filter((item, idx) => idx < 4) // filter items to only 4 elements idx being second paramter (optional)
		// 		// .map((item) => <div key={item.id}>{item.name}</div>); // map the 4 elements that were filtered
		// 		.map(({ id, ...otherItemProps }) => (
		// 			<CollectionItem key={id} {...otherItemProps}></CollectionItem>
		// 		))
		// );
	};

	return (
		<div className="collection-preview">
			<h1 className="title">{title.toUpperCase()}</h1>
			<div className="preview">{itemPreview()}</div>
			<CollectionItem />
		</div>
	);
};

export default CollectionPreview;
