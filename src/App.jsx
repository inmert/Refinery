import { useState } from "react";

import "./App.css";
import { SearchBar } from "./components/SearchBar";
import { SearchResultsList } from "./components/SearchResultsList";

function App() {
  const [results, setResults] = useState([]);

  return (
    <div className="App">
      <h1 className="title">Refinery</h1>

      <div className="search-bar">
        <SearchBar setResults={setResults} placeVal={"Message"} propName={"message"} />
      </div>
      <div className="flex-container">
        <div className="search-bar-mini">
          <SearchBar setResults={setResults} placeVal={"Level"} propName={"level"} />
        </div>
        <div className="search-bar-mini">
          <SearchBar setResults={setResults} placeVal={"Resource ID"} propName={"resourceId"} />
        </div>
        <div className="search-bar-mini">
          <SearchBar setResults={setResults} placeVal={"Trace Id"} propName={"traceId"} />
        </div>
        <div className="search-bar-mini">
          <SearchBar setResults={setResults} placeVal={"Span Id"} propName={"spanId"} />
        </div>
        <div className="search-bar-mini">
          <SearchBar setResults={setResults} placeVal={"Commit"} propName={"commit"} />
        </div>
        <div className="search-bar-mini">
          <SearchBar setResults={setResults} placeVal={"timestamp"} propName={"timestamp"} />
        </div>
        
      </div>

      {results && results.length > 0 && <SearchResultsList results={results} />}

    </div>
  );
}

export default App;
