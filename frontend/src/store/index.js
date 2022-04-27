// prettier-ignore
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from "redux-thunk";

// Import the reducer in session.js into the file with the root reducer, frontend/src/store/index.js.
import sessionReducer from "./session";

// Set a key of session in the rootReducer's combineReducer object argument to the session reducer.
const rootReducer = combineReducers({
  session: sessionReducer,
});

let enhancer;

if (process.env.NODE_ENV === "production") {
  enhancer = applyMiddleware(thunk);
} else {
  const logger = require("redux-logger").default;
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  enhancer = composeEnhancers(applyMiddleware(thunk, logger));
}

const configureStore = (preloadedState) => {
  return createStore(rootReducer, preloadedState, enhancer);
};

export default configureStore;
