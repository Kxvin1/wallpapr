import { csrfFetch } from "./csrf";

const LOAD_SEARCH = "search/loadSearch";

const loadSearch = (results) => ({
  type: LOAD_SEARCH,
  images: results,
});

export const loadSearchResults = (data) => async (dispatch) => {
  const response = await csrfFetch(`/api/search/${data.searchParams}`);

  if (response.ok) {
    const searchResults = await response.json();
    dispatch(loadSearch(searchResults));
  }
};

const initialState = {};

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_SEARCH: {
      const loadImages = {};
      action.images.forEach((image) => {
        loadImages[image.id] = image;
      });
      return {
        ...loadImages,
      };
    }

    default:
      return state;
  }
};

export default searchReducer;
