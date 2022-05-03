import { csrfFetch } from "./csrf";

// member stuff
const LOAD_MEMBER_PROFILE = "member/loadMemberProfile";
const LOAD_MEMBER_IMAGES = "member/loadMemberImages";
const EDIT_MEMBER_IMAGE = "member/editMemberImage";
const DELETE_MEMBER_IMAGE = "member/deleteMemberImage";

// comment stuff
const ADD_COMMENT = "member/addComment";
const LOAD_COMMENTS = "member/loadComments";
const DELETE_COMMENT = "member/deleteComment";

// do I need something to load the newest image?

//////////////////////////////////////////////////////////////////////////////

// ! member stuff

// load profile
const loadMemberProf = (profile) => {
  return {
    type: LOAD_MEMBER_PROFILE,
    profile,
  };
};

// load member images
// const loadMemberImages = (images) => {
//   return {
//     type: LOAD_MEMBER_IMAGES,
//     images,
//   };
// };

// edit member image
// const editMemberImage = (image) => {
//   return {
//     type: EDIT_MEMBER_IMAGE,
//     image,
//   };
// };

// delete member image
// const deleteMemberImage = (image) => {
//   return {
//     type: DELETE_MEMBER_IMAGE,
//     image,
//   };
// };

// ! comment stuff

const addComment = (comment) => {
  return {
    type: ADD_COMMENT,
    comment,
  };
};

const loadComments = (comments) => {
  return {
    type: LOAD_COMMENTS,
    comments,
  };
};

const deleteComment = (commentId) => {
  return {
    type: DELETE_COMMENT,
    commentId,
  };
};

//////////////////////////////////////////////////////////////////////////////

// ! member stuff

export const loadMemberProfileThunk = (memberId) => async (dispatch) => {
  const res = await csrfFetch(`/api/profiles/${memberId}`);

  if (res.ok) {
    const member = await res.json();
    dispatch(loadMemberProf(member));
  }
};

// export const loadMemberImagesThunk = (memberId) => async (dispatch) => {
//   const res = await fetch(`/api/members/${memberId}/images`);

//   if (res.ok) {
//     const memberImages = await res.json();
//     dispatch(loadMemberImages(memberImages));
//   }
// };

// export const editMemberImageThunk = (imageData) => async (dispatch) => {
//   const res = await csrfFetch(`/api/images/${imageData.id}`, {
//     method: "PUT",
//     body: JSON.stringify(imageData),
//   });

//   if (res.ok) {
//     const imageEdit = await res.json();
//     dispatch(editMemberImage(imageEdit));
//     return imageEdit;
//   }
// };

// export const deleteMemberImageThunk = (imageData) => async (dispatch) => {
//   const res = await csrfFetch(`/api/images/${imageData.id}`, {
//     method: "DELETE",
//   });

//   if (res.ok) {
//     dispatch(deleteMemberImage(imageData.id));
//     return;
//   }
// };

// ! comment stuff

export const addMemberCommentThunk = (commentData) => async (dispatch) => {
  const res = await csrfFetch(`/api/comments`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(commentData),
  });

  if (res.ok) {
    const comment = await res.json();
    // console.log("memberthunk comment", comment);
    dispatch(addComment(comment));
    return comment;
  }
};

export const loadMemberCommentsThunk = (memberId) => async (dispatch) => {
  const res = await csrfFetch(`/api/comments/${memberId}`);

  if (res.ok) {
    const comments = await res.json();
    dispatch(loadComments(comments));
  }
};

export const deleteMemberCommentThunk = (commentData) => async (dispatch) => {
  const res = await csrfFetch(`/api/comments/${commentData.id}`, {
    method: "DELETE",
  });

  if (res.ok) {
    dispatch(deleteComment(commentData.id));
    return;
  }
};

//////////////////////////////////////////////////////////////////////////////

const initialState = {};

// profile page reducer

const memberReducer = (state = initialState, action) => {
  switch (action.type) {
    // ! member images cases (on any page that isn't the main page)
    // case LOAD_MEMBER_IMAGES: {
    //   const newState = {};
    //   action.images.forEach((image) => {
    //     newState[image.id] = image;
    //   });
    //   return {
    //     ...state,
    //     ...newState,
    //   };
    // }

    // ? need to add: do I need something to load the newest image when it's uploaded from the uploads page?

    // ? need to add: EDIT_MEMBER_IMAGE

    // works on uploads page
    // case DELETE_MEMBER_IMAGE: {
    //   const newState = { ...state };
    //   delete newState[action.image];
    //   return newState;
    // }

    // ! member comments cases (note: took this from imageReducer)

    // works (kinda)
    case LOAD_COMMENTS: {
      const newState = {};
      // console.log("comments", action.comments);
      action.comments.forEach((comment) => {
        newState[comment.id] = comment;
      });

      return {
        // ...state, ==> commenting this out removes all the empty comments
        ...newState,
      };
    }

    // works
    case ADD_COMMENT: {
      console.log("action.comment", action.comment);
      const newState = {
        ...state,
        [action.comment.id]: action.comment,
      };
      return newState;
    }

    // ! not yet tested (no delete button)
    case DELETE_COMMENT: {
      const newState = { ...state };
      delete newState[action.commentId];
      return newState;
    }

    default:
      return state;
  }
};

export default memberReducer;
