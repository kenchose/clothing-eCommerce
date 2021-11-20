import { createStore, compose } from "redux";
import { persistStore } from "redux-persist";

import rootReducer from "./reducers";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(rootReducer, composeEnhancers());
export const persistor = persistStore(store);
