import React, { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import { fetchData, filterData } from "./dataService"; // Adjust the path based on your file structure
import "./SearchBar.css";

export const SearchBar = ({ setResults, placeVal, propName }) => {
  const [input, setInput] = useState("");
  const [tableResults, setTableResults] = useState([]);
  const [showOptions, setShowOptions] = useState(false);

  useEffect(() => {
    if (tableResults.length > 0) {
      setShowOptions(true);
    } else {
      setShowOptions(false);
    }
  }, [tableResults]);

  const handleChange = async (value) => {
    setInput(value);

    try {
      const data = await fetchData();
      const results = filterData(data, value, propName);

      setTableResults(results);
      setResults(results);
    } catch (error) {
      // Handle error (e.g., show an error message to the user)
    }
  };

  return (
    <div>
      <div className="input-wrapper">
        <FaSearch id="search-icon" size={20} />
        <input value={input} placeholder={placeVal} onChange={(e) => handleChange(e.target.value)} />
      </div>
      {showOptions && (
        <div>
          {tableResults.map((result) => (
            <div key={result.id}></div>
          ))}
        </div>
      )}
    </div>
  );
};
