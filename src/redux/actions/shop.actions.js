import * as actions from "./actions.types";

export const updateCollections = (collectionsMap) => ({
	type: actions.UPDATE_COLLECTIONS,
	payload: collectionsMap,
});
