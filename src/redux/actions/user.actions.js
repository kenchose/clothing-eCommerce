import * as actions from "./actions.types";

// user action
const setCurrentUser = (user) => ({
	type: actions.SET_CURRENT_USER,
	payload: user,
});

export default setCurrentUser;
