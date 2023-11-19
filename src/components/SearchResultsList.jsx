
import React from "react";
import "./SearchResultsList.css";
import { SearchResult } from "./SearchResult";

export const SearchResultsList = ({ results }) => {
  return (
    <table className="results-table">
      <thead>
        <tr>
          <th>Index</th>
          <th>Level</th>
          <th>Message</th>
          <th>Resource ID</th>
          <th>Timestamp</th>
          <th>Trace ID</th>
          <th>Span ID</th>
          <th>Commit</th>
          <th>Parent Resource ID</th>
        </tr>

      </thead>
      <tbody>
        {results.map((result, index) => (
          <SearchResult key={index} result={result} index={index + 1} />
        ))}
      </tbody>
    </table>
  );
};
