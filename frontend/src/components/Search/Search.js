import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { loadSearchResults } from "../../store/search";

import "./Search.css";

function Search() {
  const history = useHistory();
  const dispatch = useDispatch();
  const [searchParams, setSearchQuery] = useState("");

  const handleSearch = async (e) => {
    e.preventDefault();

    const payload = {
      searchParams,
    };

    dispatch(loadSearchResults(payload));

    setSearchQuery("");

    history.push(`/search/${searchParams}`);
  };

  return (
    <div className="search-bar-container-final">
      <form
        className="search-bar right-container-element"
        onSubmit={handleSearch}
      >
        <button className="search-button" type="submit">
          <i id="search-icon" className="fas fa-search"></i>
        </button>
        <input
          className="search-input"
          type="text"
          value={searchParams}
          placeholder={`Search Wallpapr`}
          onChange={(e) => setSearchQuery(e.target.value)}
        ></input>
      </form>
    </div>
  );
}

export default Search;
