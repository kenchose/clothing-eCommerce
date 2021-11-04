import * as actions from "./action.types";

// user action
const setCurrentUser = (user) => ({
	type: actions.SET_CURRENT_USER,
	payload: user,
});

export default setCurrentUser;
