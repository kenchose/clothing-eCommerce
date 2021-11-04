import { createStore, compose } from "redux";

import rootReducer from "./reducers";
// import rootReducer from "./root-reducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers());

export default store;
