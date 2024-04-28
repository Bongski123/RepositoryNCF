import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import { FaSearch } from "react-icons/fa";

function SearchBar({ setResults }) {
  const [input, setInput] = useState("");
  const [researches, setDocuments] = useState([]);

  useEffect(() => {
    fetch('http://localhost:9000/api/researches')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((json) => {
        if (Array.isArray(json)) {
          setDocuments(json);
        } else {
          console.error('JSON data is not an array');
        }
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []); // Empty dependency array ensures this effect runs only once on component mount

  // Manual search function
  const performSearch = (value) => {
    if (researches.length > 0 && typeof setResults === 'function') {
      const results = researches.filter(researches =>
        (researches.title && researches.title.toLowerCase().includes(value.toLowerCase())) ||
        (researches.abstract && researches.abstract.toLowerCase().includes(value.toLowerCase())) ||
        (researches.author && researches.author.toLowerCase().includes(value.toLowerCase())) ||
        (researches.category_name && researches.category_name.toLowerCase().includes(value.toLowerCase())) ||
        (researches.course_name && researches.course_name.toLowerCase().includes(value.toLowerCase())) ||
        (researches.file_name && researches.file_name.toLowerCase().includes(value.toLowerCase()))
      );
      setResults(results);
    }
  };

  // Handle input change
  const handleChange = (value) => {
    setInput(value);
    performSearch(value); // Perform search on input change
  };

  // Handle search button click
  const handleSearch = () => {
    performSearch(input); // Perform search when search button is clicked
  };

  return (
    <Container fluid className="search-container">
      <div className="input-wrapper">
        <FaSearch id="search-icon" />
        <input
          placeholder="title, author, Keyword, etc.."
          value={input}
          onChange={(e) => handleChange(e.target.value)}
        />
      </div>
    </Container>
  );
}

export { SearchBar };
