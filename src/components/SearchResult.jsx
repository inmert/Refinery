import React from "react";

export const SearchResult = ({ result, index }) => {
  const {
    level,
    message,
    resourceId,
    timestamp,
    traceId,
    spanId,
    commit,
    metadata,
  } = result;

  return (
    <tr>
      <td>{index}</td>
      <td>{level}</td>
      <td>{message}</td>
      <td>{resourceId}</td>
      <td>{timestamp}</td>
      <td>{traceId}</td>
      <td>{spanId}</td>
      <td>{commit}</td>
      <td>{metadata.parentResourceId}</td>
    </tr>
  );
};
