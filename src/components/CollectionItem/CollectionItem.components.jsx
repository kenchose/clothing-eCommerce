import React from "react";

import CustomButton from "../CustomButton/CustomButton.component";

import "./CollectionItem.styles.scss";

const CollectionItem = ({ id, name, imageUrl, price }) => {
	return (
		<div className="collection-item">
			<div
				className="image"
				style={{ backgroundImage: `url(${imageUrl})` }}></div>
			<div className="collection-footer">
				<span className="name">{name}</span>
				<span className="price">{price}</span>
			</div>
			<CustomButton inverted>Add to cart</CustomButton>
		</div>
	);
};

export default CollectionItem;
