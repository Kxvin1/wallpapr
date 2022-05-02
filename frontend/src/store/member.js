import { csrfFetch } from "./csrf";

const LOAD_MEMBER_PROFILE = "member/loadMemberProfile";

const LOAD_MEMBER_IMAGES = "member/loadMemberImages";
const EDIT_MEMBER_IMAGE = "member/editMemberImage";
const DELETE_MEMBER_IMAGE = "member/deleteMemberImage";

//////////////////////////////////////////////////////////////////////////////

// load profile
const loadMemberProf = (profile) => {
  return {
    type: LOAD_MEMBER_PROFILE,
    profile,
  };
};

// load member images
const loadMemberImages = (images) => {
  return {
    type: LOAD_MEMBER_IMAGES,
    images,
  };
};

// edit member image
const editMemberImage = (image) => {
  return {
    type: EDIT_MEMBER_IMAGE,
    image,
  };
};

// delete member image
const deleteMemberImage = (image) => {
  return {
    type: DELETE_MEMBER_IMAGE,
    image,
  };
};

//////////////////////////////////////////////////////////////////////////////

export const loadMemberProfileThunk = (memberId) => async (dispatch) => {
  const res = await csrfFetch(`/api/profiles/${memberId}`);

  if (res.ok) {
    const member = await res.json();
    dispatch(loadMemberProf(member));
  }
};

export const loadMemberImagesThunk = (memberId) => async (dispatch) => {
  const res = await csrfFetch(`/api/members/${memberId}/images`);

  if (res.ok) {
    const memberImages = await res.json();
    dispatch(loadMemberImages(memberImages));
  }
};

export const editMemberImageThunk = (imageData) => async (dispatch) => {
  const res = await csrfFetch(`/api/images/${imageData.id}`, {
    method: "PUT",
    body: JSON.stringify(imageData),
  });

  if (res.ok) {
    const imageEdit = await res.json();
    dispatch(editMemberImage(imageEdit));
    return imageEdit;
  }
};

export const deleteMemberImageThunk = (imageData) => async (dispatch) => {
  const res = await csrfFetch(`/api/images/${imageData.id}`, {
    method: "DELETE",
  });

  if (res.ok) {
    dispatch(deleteMemberImage(imageData.id));
    return;
  }
};

//////////////////////////////////////////////////////////////////////////////

const initialState = {};

const memberReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_MEMBER_IMAGES: {
      const newState = {};
      action.images.forEach((image) => {
        newState[image.id] = image;
      });
      return {
        ...state,
        ...newState,
      };
    }

    case DELETE_MEMBER_IMAGE: {
      const newState = { ...state };
      delete newState[action.image];
      return newState;
    }

    default:
      return state;
  }
};

export default memberReducer;
