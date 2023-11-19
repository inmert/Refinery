import React from "react";
import "./SearchResult.css";

export const SearchResult = ({ result }) => {
  // Assuming result is an object with properties
  const renderTableCells = () => {
    return Object.values(result).map((value, index) => (
      <td key={index}>{value}</td>
    ));
  };

  return (
    <tr className="search-result" onClick={(e) => alert(`You selected ${result}!`)}>
      {renderTableCells()}
    </tr>
  );
};
