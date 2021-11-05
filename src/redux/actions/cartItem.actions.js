import * as actions from "./actions.types";

const addItem = (item) => ({
	type: actions.ADD_ITEM,
	payload: item,
});

export default addItem;
