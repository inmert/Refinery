import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import "./SearchBar.css";


export const SearchBar = ({ setResults, placeVal, inpType, propName }) => {

  const [input, setInput] = useState("");


  const fetchData = (value, property) => {
    fetch("https://raw.githubusercontent.com/inmert/inmert.github.io/master/input.json")
      .then((response) => response.json())
      .then((json) => {
        const results = json.filter((item) => {
          return (
            value &&
            item &&
            item[property] && // Use the dynamically provided property
            item[property].toLowerCase().includes(value.toLowerCase()) // Modify this line accordingly
          );
        });
        setResults(results);
      });
  };


  const handleChange = (value) => {
    setInput(value);
    fetchData(value, propName); // Pass the desired property name
  };
  

  return (
    <div className="input-wrapper">
      <FaSearch id="search-icon" size={20} />
      <input type={inpType} value={input} placeholder={placeVal} onChange={(e) => handleChange(e.target.value)}/>
    </div>
  );
};