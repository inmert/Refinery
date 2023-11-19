import { useState } from "react";
import { FaSearch } from "react-icons/fa";

import "./SearchBar.css";

export const SearchBar = ({ setResults, placeVal, inpType, retType }) => {
  const [input, setInput] = useState("");

  const fetchData = (value) => {
    fetch("https://raw.githubusercontent.com/inmert/inmert.github.io/master/input.json")
      .then((response) => response.json())
      .then((json) => {
        const results = json.filter((item) => {
          return (
            value &&
            item &&
            item.retType &&
            item.retType.toLowerCase().includes(value)
          );
        });
        setResults(results);
      });
  };

  const handleChange = (value) => {er
    setInput(value);
    fetchData(value);
  };

  return (
    <div className="input-wrapper">
      <FaSearch id="search-icon" size={20} />
      <input
        type={inpType}
        value={input}
        placeholder={placeVal}
        onChange={(e) => handleChange(e.target.value)}
      />
    </div>
  );
};
