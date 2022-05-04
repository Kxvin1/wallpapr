import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import ImageInfo from "../ImageInfo/index";
import OwnerOfImageInfo from "../OwnerOfImageInfo/index";

import "./Search.css";

function Search() {
  const sessionUser = useSelector((state) => state.session.user);
  const { searchParams } = useParams();

  const searchObject = useSelector((state) => state.search);
  const results = Object.values(searchObject);

  return (
    <div>
      {results.length ? (
        <>
          <div className="search-title"></div>
          <h2 id="search-title">Search results for "{`${searchParams}`}"</h2>
          <div className="image-user-main-container">
            {results?.map((image) => {
              let tagString;
              if (image.tags) {
                tagString = image.tags;
                tagString = tagString.map((tag) => `#${tag}`);
                tagString = tagString.join(", ");
              }

              if (image.userId === sessionUser.id) {
                return (
                  <OwnerOfImageInfo
                    key={image.id}
                    image={image}
                    tagString={tagString}
                  />
                );
              }

              return (
                <ImageInfo key={image.id} image={image} tagString={tagString} />
              );
            })}
          </div>
        </>
      ) : (
        <>
          <div className="no-search-results-title-container">
            <h2 id="no-results-title">No results for "{`${searchParams}`}"</h2>
          </div>
        </>
      )}
    </div>
  );
}

export default Search;
