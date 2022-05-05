//  Make sure to use the custom csrfFetch function from frontend/src/store/csrf.js
import { csrfFetch } from "./csrf";

// Create two POJO action creators.
// One that will set the session user in the session slice of state to the action creator's input parameter
// And another that will remove the session user.
// Their types should be extracted as a constant and used by the action creator and the session reducer.
const SET_USER = "session/setUser";
const REMOVE_USER = "session/removeUser";

//////////////////////////////////////////////////////////////////////////////

const setUser = (user) => {
  return {
    type: SET_USER,
    payload: user,
  };
};

const removeUser = () => {
  return {
    type: REMOVE_USER,
  };
};

//////////////////////////////////////////////////////////////////////////////

// You need to call the API to login then set the session user from the response, so add a thunk action for the POST /api/session.
export const login = (user) => async (dispatch) => {
  const { credential, password } = user;
  const response = await csrfFetch("/api/session", {
    // The POST /api/session route expects the request body to have a key of credential with an existing username or email and a key of password
    method: "POST",
    body: JSON.stringify({
      credential,
      password,
    }),
  });
  //  After the response from the AJAX call comes back, parse the JSON body of the response, and dispatch the action for setting the session user to the user in the response's body.
  const data = await response.json();
  dispatch(setUser(data.user));
  return response;
};

// Retain the session user information across a refresh, in order to do so,
// call the GET /api/session, parse the JSON body of the response, and dispatch the
// action for setting the session user to the user in the response's body
export const restoreUser = () => async (dispatch) => {
  const response = await csrfFetch("/api/session");
  const data = await response.json();
  dispatch(setUser(data.user));
  return response;
};

// User Sign up (registering)
export const signup = (user) => async (dispatch) => {
  const { username, password, email } = user;

  const response = await csrfFetch("/api/users", {
    method: "POST",
    body: JSON.stringify({
      username,
      password,
      email,
    }),
  });

  const data = await response.json();
  dispatch(setUser(data.user));
  return response;
};

// user sign out (log out)
export const logout = () => async (dispatch) => {
  const response = await csrfFetch("/api/session", {
    method: "DELETE",
  });
  dispatch(removeUser());
  return response;
};

//////////////////////////////////////////////////////////////////////////////

// By default, there should be no session user in the session slice of state.
const initialState = { user: null };

// add a session reducer that will hold the current session user's information
const sessionReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case SET_USER:
      newState = Object.assign({}, state);
      newState.user = action.payload;
      return newState;
    // return { ...state, user: action.payload };
    case REMOVE_USER:
      newState = Object.assign({}, state);
      newState.user = null;
      return newState;
    default:
      return state;
  }
};

//////////////////////////////////////////////////////////////////////////////

// Export the login thunk action, and export the reducer as the default export.
export default sessionReducer;
