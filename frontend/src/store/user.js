// import { csrfFetch } from "./csrf";

const LOAD = "users/LOAD";

// Action creator for getting all users.

const get = (users) => ({
  type: LOAD,
  users,
});

// Thunk for getting all users.

export const getUsers = () => async (dispatch) => {
  const response = await fetch("/api/users");

  if (response.ok) {
    // array of users.
    const users = await response.json();
    // console.log(users, "Thunk");
    dispatch(get(users));
  }
};

const initialState = {};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD:
      const allUsersState = {};
      action.users.allUsers.forEach((user) => {
        allUsersState[user.id] = user;
      });
      return {
        ...state,
        ...allUsersState,
      };
    default:
      return state;
  }
};

export default userReducer;
