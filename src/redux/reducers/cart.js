import * as actions from "../actions/actions.types";

const INITIAL_STATE = {
	hidden: true,
};

const toggleCartHidden = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case actions.TOGGLE_CART_HIDDEN:
			return {
				...state,
				hidden: !state.hidden,
			};
		default:
			return state;
	}
};

export default toggleCartHidden;
