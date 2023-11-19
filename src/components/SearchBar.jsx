import React, { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import "./SearchBar.css";
import { SearchResultsList } from "./SearchResultsList";

export const SearchBar = ({ setResults, placeVal, propName }) => {
  const [input, setInput] = useState("");
  const [perPage, setPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [tableResults, setTableResults] = useState([]);
  const [showOptions, setShowOptions] = useState(false);

  useEffect(() => {
    if (tableResults.length > 0) {
      setShowOptions(true);
    } else {
      setShowOptions(false);
    }
  }, [tableResults]);

  const fetchData = (value, property) => {
    fetch("https://raw.githubusercontent.com/inmert/inmert.github.io/master/input.json")
      .then((response) => response.json())
      .then((json) => {
        const results = json.filter((item) => {
          return (
            value &&
            item &&
            item[property] &&
            item[property].toLowerCase().includes(value.toLowerCase())
          );
        });
        const startIndex = (currentPage - 1) * perPage;
        const endIndex = startIndex + perPage;
        setResults(results.slice(0, perPage));
        setTableResults(results);
      });
  };

  const handleChange = (value) => {
    setInput(value);
    setCurrentPage(1); // Reset to the first page when a new search is performed
    fetchData(value, propName);
  };

  const handlePerPageChange = (value) => {
    setPerPage(value);
    setCurrentPage(1); // Reset to the first page when the results per page is changed
    setResults(tableResults.slice(0, value));
  };

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
    const startIndex = (newPage - 1) * perPage;
    const endIndex = startIndex + perPage;
    setResults(tableResults.slice(startIndex, endIndex));
  };

  return (
    <div>
      <div className="input-wrapper">
        <FaSearch id="search-icon" size={20} />
        <input value={input} placeholder={placeVal} onChange={(e) => handleChange(e.target.value)} />
      </div>
      {showOptions && (
        <div className="results-per-page">
          <label>Results per page:</label>
          <input type="number" min="1" value={perPage} onChange={(e) => handlePerPageChange(e.target.value)} />
        </div>
      )}
      {showOptions && (
        <div className="pagination">
          <button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>
            Previous
          </button>
          <span className="span-title">Page {currentPage}</span>
          <button onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage * perPage >= tableResults.length}>
            Next
          </button>
        </div>
      )}
    </div>
  );
};