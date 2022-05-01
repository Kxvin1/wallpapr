import { csrfFetch } from "./csrf";

const CREATE_IMAGE = "images/createImage";
const LOAD_IMAGES = "images/loadImages";
const UPDATE_IMAGE = "images/updateImage";
const DELETE_IMAGE = "images/deleteImage";

// const FAVORITE_IMAGE = "images/favoriteImage";
// const UNFAVORITE_IMAGE = "images/unfavoriteImage";

const create = (image) => {
  return {
    type: CREATE_IMAGE,
    image,
  };
};

const load = (images) => {
  return {
    type: LOAD_IMAGES,
    images,
  };
};

const update = (image) => {
  return {
    type: UPDATE_IMAGE,
    image,
  };
};

const deleteImage = (imageId, memberId) => {
  return {
    type: DELETE_IMAGE,
    imageId,
    memberId,
  };
};

// // -- needs testing
// const favorite = (image, userId) => {
//   return {
//     type: FAVORITE_IMAGE,
//     image,
//     userId,
//   };
// };

// // -- needs testing
// const unfavorite = (image, userId) => {
//   return {
//     type: UNFAVORITE_IMAGE,
//     image,
//     userId,
//   };
// };

// load images -- works
export const getImages = () => async (dispatch) => {
  const res = await fetch("/api/images");

  if (res.ok) {
    const images = await res.json();
    // console.log("store/images.js", images);
    dispatch(load(images.images));
  }
};

// post image -- works
export const postImage = (imageData) => async (dispatch) => {
  const res = await csrfFetch("/api/images", {
    method: "POST",
    body: JSON.stringify(imageData),
  });

  if (res.ok) {
    const image = await res.json();
    dispatch(create(image));
    return image;
  }
};

// update image -- update the image URL -- untested
// code here
// this update only works on home page (wont work on profile)
// implement edit/delete in the members.js reducer
export const updateImageThunk = (imageData) => async (dispatch) => {
  const res = await csrfFetch(`/api/images/${imageData.id}`, {
    method: "PUT",
    body: JSON.stringify(imageData),
  });

  if (res.ok) {
    const updatedImage = await res.json();
    dispatch(update(updatedImage));
    return updatedImage;
  }
};

// delete image -- delete the image altogether -- untested
// this delete only works on home page (wont work on profile)
export const deleteImageThunk = (imageData, memberId) => async (dispatch) => {
  const res = await csrfFetch(`/api/images/${imageData.id}`, {
    method: "DELETE",
  });

  // if (res.ok) {
  //   const { id: deleteImageId } = await res.json();
  //   dispatch(deleteImage(deleteImageId, memberId));
  //   return deleteImageId;
  // }

  if (res.ok) {
    dispatch(deleteImage(imageData.id));
  }
};

// add to favorites -- needs testing
// export const addToFavorites = (imageData) => async (dispatch) => {
//   const res = await csrfFetch(`/api/images/${imageData.imageId}/favorites`, {
//     method: "POST",
//     body: JSON.stringify(imageData),
//   });

//   if (res.ok) {
//     return;
//   }
// };

// // -- needs testing
// export const deleteFromFavorites = (imageData) => async (dispatch) => {
//   const res = await csrfFetch(`/api/images/${imageData.imageId}/favorites`, {
//     method: "DELETE",
//     body: JSON.stringify(imageData),
//   });

//   if (res.ok) {
//     return;
//   } else {
//     console.log("error in deleteFromFavorites store/image.js");
//   }
// };

// // -- needs testing
// const LOAD_FAVORITES = "favorites/loadFavorites";

// // -- needs testing
// const loadFavorites = (favoriteImages) => {
//   return {
//     type: LOAD_FAVORITES,
//     favoriteImages,
//   };
// };

// // -- needs testing
// export const getFavoriteImages = (id) => async (dispatch) => {
//   const res = await csrfFetch(`/api/favorites/${id}`);

//   if (res.ok) {
//     const favoriteImages = await res.json();
//     dispatch(loadFavorites(favoriteImages));
//   } else {
//     console.log("error in getFavoriteImages store/image.js");
//   }
// };

const initialState = {};

const imageReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_IMAGES: {
      const newState = {};
      action.images.forEach((image) => {
        newState[image.id] = image;
      });
      return {
        ...state,
        ...newState,
      };
    }
    case CREATE_IMAGE: {
      const newState = {
        ...state,
        [action.image.id]: action.image,
      };
      return newState;
    }
    // works but need to component to implement delete. will add this functionality in the user's profile (they can only delete from their profile)
    case DELETE_IMAGE: {
      const newState = { ...state };
      delete newState[action.imageId];
      return newState;
    }

    default:
      return state;
  }
};

export default imageReducer;
