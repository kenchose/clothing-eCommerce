import React from "react";
import { connect } from "react-redux";

import { addItem } from "../../redux/actions/cart.actions";

import * as sc from "./CollectionItem.styles";

const CollectionItem = ({ item, addItem }) => {
	const { name, imageUrl, price } = item;
	return (
		<sc.CollectionItemContainer>
			<sc.BackgroundImage className="image" imageUrl={imageUrl} />
			<sc.CollectionFooterContainer>
				<sc.NameContainer>{name}</sc.NameContainer>
				<sc.PriceContainer>${price}</sc.PriceContainer>
			</sc.CollectionFooterContainer>
			<sc.AddButton
				className="custom-button"
				onClick={() => addItem(item)}
				inverted>
				Add to cart
			</sc.AddButton>
		</sc.CollectionItemContainer>
	);
};

export default connect(null, { addItem })(CollectionItem);
