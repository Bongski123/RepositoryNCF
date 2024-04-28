// SearchResultList.js

import React from "react";
import Container from "react-bootstrap/Container";
import { SearchResult } from "./SearchResult";

function SearchResultList({ results }) {
  console.log("Results:", results); // Log results to check its contents

  return (
    <Container fluid className="search-results-container">
      <div className="results-list">
        {/* Iterate over the results array and render SearchResult components */}
        {results && results.length > 0 ? (
          results.map((result, id) => (
            <SearchResult key={id} result={result} />
          ))
        ) : (
          <div>No results found</div>
        )}
      </div>
    </Container>
  );
}

export { SearchResultList };
