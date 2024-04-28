// ResultListPage.js

import React from "react";
import Container from "react-bootstrap/Container";
import { SearchResultList } from "./SearchResultList"; // Import the SearchResultList component

function ResultListPage({ results }) {
  return (
    <Container fluid className="result-list-container">
      <h1>Search Results</h1>
      <SearchResultList results={results} /> {/* Pass the results as props to SearchResultList */}
    </Container>
  );
}

export default ResultListPage;
