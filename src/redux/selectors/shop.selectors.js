import { createSelector } from "reselect";

const selectShop = (state) => state.shop;

export const selectCollections = createSelector(
	[selectShop],
	(shop) => shop.collections
);

export const selectCollectionsForPreview = createSelector(
	[selectCollections],
	(collections) => Object.values(collections)
);

export const selectCollection = (category) => {
	return createSelector(
		[selectCollections],
		(collections) => collections[category]
	);
};
