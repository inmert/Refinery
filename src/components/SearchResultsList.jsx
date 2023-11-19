import "./SearchResultsList.css";
import { SearchResult } from "./SearchResult";

export const SearchResultsList = ({ results }) => {
  return (
    <div className="results-list">
      {results.map((result, id) => {
        return <SearchResult result={result.level
           + " " 
           + result.message
           + " " 
           + result.resourceId
           + " " 
           + result.timestamp
           + " " 
           + result.traceId
           + " " 
           + result.spanId
           + " " 
           + result.commit
           + " " 
           + result.parentResourceId } key={id} />;
      })}
    </div>
  );
};
