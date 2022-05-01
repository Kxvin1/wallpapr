import { csrfFetch } from "./csrf";

const LOAD_USER_PROFILE = "profile/loadUserProfile";
const EDIT_USER_PROFILE = "profile/editUserProfile";

const loadUserProf = (profile) => {
  return {
    type: LOAD_USER_PROFILE,
    profile,
  };
};

const editUserProf = (profile) => {
  return {
    type: EDIT_USER_PROFILE,
    profile,
  };
};

// load user profile
export const getUserProfile = (userId) => async (dispatch) => {
  const res = await csrfFetch(`api/profiles/${userId}`);

  if (res.ok) {
    const profile = await res.json();
    dispatch(loadUserProf(profile));
  }
};

// edit user profile
export const editUserProfile = (userData) => async (dispatch) => {
  const res = await csrfFetch(`/api/profiles/${userData.id}`, {
    method: "PUT",
    body: JSON.stringify(userData),
  });

  if (res.ok) {
    const updatedProfile = await res.json();
    dispatch(editUserProf(updatedProfile));
    return updatedProfile;
  }
};

const initialState = [];

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_USER_PROFILE: {
      const userProfile = [action.profile];
      return userProfile;
    }
    case EDIT_USER_PROFILE: {
      const newState = [action.profile];
      return newState;
    }
    default:
      return state;
  }
};

export default profileReducer;
