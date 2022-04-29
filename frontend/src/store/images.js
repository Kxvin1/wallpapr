import { csrfFetch } from "./csrf";

const CREATE_IMAGE = "images/createImage";
const LOAD_IMAGES = "images/loadImages";
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

// post image -- needs testing
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
// export const decrementFavCount = (imageData, userId) => async (dispatch) => {
//   const res = await csrfFetch(`/api/images/${imageData.id}/favorites`, {
//     method: "PUT",
//     body: JSON.stringify(imageData),
//   });

//   if (res.ok) {
//     const image = await res.json();
//     dispatch(unfavorite(image, userId));
//     return image;
//   } else {
//     console.log("error in decrementFavCount store/image.js");
//   }
// };

// // -- needs testing
// export const incrementFavCount = (imageData, userId) => async (dispatch) => {
//   const res = await csrfFetch(`/api/images/${imageData.id}/favorites`, {
//     method: "PUT",
//     body: JSON.stringify(imageData),
//   });

//   if (res.ok) {
//     const image = await res.json();
//     dispatch(favorite(image, userId));
//     return image;
//   } else {
//     console.log("error in incrementFavCount store/image.js");
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

const initialState = {
  // order: [],
  // favoritesPage: {},
};

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
        // order: [...action.images],
      };
    }
    // case CREATE_IMAGE: {
    //   const newState = {
    //     ...state,
    //     [action.image.id]: action.image,
    //     order: [action.image, ...state.order],
    //   };
    //   return newState;
    // }
    // case FAVORITE_IMAGE: {
    //   const favoritedCount = Number(state[action.image.id].favoritedCount);
    //   const orderedImageIndex = state.order.findIndex(
    //     (image) => image.id === action.image.id
    //   );
    //   const newCount = favoritedCount + 1;
    //   const newState = {
    //     ...state,
    //     [action.image.id]: {
    //       ...state[action.image.id],
    //       favoritedCount: newCount,
    //       Favorites: [
    //         ...state[action.image.id].Favorites,
    //         { userId: action.userId, imageId: action.image.id },
    //       ],
    //     },
    //   };
    //   newState.order[orderedImageIndex].favoritedCount = newCount;
    //   return newState;
    // }
    // case UNFAVORITE_IMAGE: {
    //   const prevFavoritedCount = Number(state[action.image.id].favoritedCount);
    //   const favoriteIndex = state[action.image.id].Favorites.findIndex(
    //     (favorite) => favorite.userId === action.userId
    //   );
    //   const newCount = prevFavoritedCount - 1;
    //   const newState = {
    //     ...state,
    //     [action.imageId]: {
    //       ...state[action.image.id],
    //       favoritedCount: newCount,
    //       Favorites: [...state[action.image.id].Favorites],
    //     },
    //   };
    //   newState[action.image.id].Favorites.splice(favoriteIndex, 1);
    //   return newState;
    // }

    default:
      return state;
  }
};

export default imageReducer;
