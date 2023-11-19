// SearchBar.js
import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { fetchData, filterData } from "./dataService"; 
import "./SearchBar.css";

export const SearchBar = ({ setResults, placeVal, propName }) => {
  const [input, setInput] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState(""); // New state for end date
  const [tableResults, setTableResults] = useState([]);
  const [showOptions, setShowOptions] = useState(false);

  const handleChange = async (value) => {
    setInput(value);
  
    try {
      const data = await fetchData();
  
      let results;
      if (propName === "timestamp") {
        // If propName is "timestamp", filter based on startDate and endDate
        results = filterData(data, { start: startDate, end: endDate }, propName);
      } else {
        // For other properties, filter based on the regular input
        results = filterData(data, value, propName);
      }
  
      setTableResults(results);
      setResults(results);
    } catch (error) {
      // Handle error
    }
  };

  const handleStartDateChange = (date) => {
    setStartDate(date);
  };

  const handleEndDateChange = (date) => {
    setEndDate(date);
  };

  return (
    <div>
      <div className="input-wrapper">
        <FaSearch id="search-icon" size={20} />
        <input
          value={input}
          placeholder={placeVal}
          onChange={(e) => handleChange(e.target.value)}
        />
      </div>
      {propName === "timestamp" && (
        <div className="date-input-wrapper">
          <label>Start Date:</label>
          <input
            type="date"
            value={startDate}
            onChange={(e) => handleStartDateChange(e.target.value)}
          />
          <label>End Date:</label>
          <input
            type="date"
            value={endDate}
            onChange={(e) => handleEndDateChange(e.target.value)}
          />
        </div>
      )}
      {showOptions && (
        <div>
          {tableResults.map((result) => (
            <div key={result.id}>{/* Render results */}</div>
          ))}
        </div>
      )}
    </div>
  );
};
