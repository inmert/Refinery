import React from "react";
import "./SearchResultsList.css";
import { SearchResult } from "./SearchResult";

export const SearchResultsList = ({ results }) => {
  return (
    <div className="container">
      <table className="results-table">
        <thead>
          <tr>
            <th>Serial Number</th>
            <th>Level</th>
            <th>Message</th>
            <th>Resource ID</th>
            <th>Timestamp</th>
            <th>Trace ID</th>
            <th>Span ID</th>
            <th>Commit</th>
          </tr>
        </thead>
        <tbody>
          {results.map(({ level, message, resourceId, timestamp, traceId, spanId, commit, uniqueId }, index) => (
            <tr key={uniqueId}>
              <td>{index + 1}</td>
              <td>
                <SearchResult
                  result={{
                    level,
                    message,
                    resourceId,
                    timestamp,
                    traceId,
                    spanId,
                    commit,
                  }}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
