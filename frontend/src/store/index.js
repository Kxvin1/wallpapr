// prettier-ignore
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from "redux-thunk";
import sessionReducer from "./session";
import imageReducer from "./images";
import profileReducer from "./profile";
import memberReducer from "./member";
import userReducer from "./user";
import searchReducer from "./search";

// Set a key of session in the rootReducer's combineReducer object argument to the session reducer.
const rootReducer = combineReducers({
  session: sessionReducer,
  image: imageReducer,
  profile: profileReducer,
  member: memberReducer,
  user: userReducer,
  search: searchReducer,
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
