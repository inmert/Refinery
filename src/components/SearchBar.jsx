// Inside SearchBar.js
import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import "./SearchBar.css";
import { SearchResultsList } from "./SearchResultsList";

export const SearchBar = ({ setResults, placeVal, propName }) => {
  const [input, setInput] = useState("");
  const [perPage, setPerPage] = useState(10); // Initial number of results per page
  const [tableResults, setTableResults] = useState([]);


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
        setResults(results.slice(0, perPage));
        setTableResults(results);
      });
  };

  const handleChange = (value) => {
    setInput(value);
    fetchData(value, propName);
  };

  const handlePerPageChange = (value) => {
    setPerPage(value);
    setResults(tableResults.slice(0, value));
  };

  return (
    <div>
      <div className="input-wrapper">
        <FaSearch id="search-icon" size={20} />
        <input value={input} placeholder={placeVal} onChange={(e) => handleChange(e.target.value)} />
      </div>
      <div className="results-per-page">
        <label>Results per page:</label>
        <input type="number" min="1" value={perPage} onChange={(e) => handlePerPageChange(e.target.value)} />
      </div>
    </div>
  );
};