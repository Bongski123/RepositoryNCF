import React, { useState } from "react";
import { SearchBar } from "../SearchBar";
import { SearchResultList } from "../SearchResultList";


export const Home = () => {
     const [searchResults, setSearchResults] = useState([]);
     return (
          <div className="page">
              <div className="search-bar-container">
              <SearchBar setResults={setSearchResults} />
              {searchResults && searchResults.length > 0 && <SearchResultList results={searchResults} />}
            </div>
          </div>
     )
}