import { useState } from "react";

import "./App.css";
import { SearchBar } from "./components/searchBar";
import { SearchResultsList } from "./components/SearchResultsList";

function App() {
  const [results, setResults] = useState([]);

  return (
    <div className="App">
      <h1 className="title">Refinery</h1>

      <div className="search-bar-container">
        <SearchBar setResults={setResults} placeVal={"Message"} retType={"message"} />
      </div>

      <div className="flex-container">
        <div className="search-bar-mini">
          <SearchBar setResults={setResults} placeVal={"Level"} retType={"level"} />
        </div>
        <div className="search-bar-mini">
          <SearchBar setResults={setResults} placeVal={"ResourceID"} retType={"resourceId"} />
        </div>
        <div className="search-bar-mini">
          <SearchBar setResults={setResults} placeVal={"SpanID"} retType={"spanId"} />
        </div>
        <div className="search-bar-mini">
          <SearchBar setResults={setResults} placeVal={"TraceID"} retType={"traceId"} />
        </div>
        <div className="search-bar-mini">
          <SearchBar setResults={setResults} placeVal={"Commit"} retType={"commit"}/>
        </div>
        <div className="search-bar-mini">
          <SearchBar setResults={setResults} placeVal={"Parent"} retType={"parentResourceId"} />
        </div>
      </div>

      <div className="flex-container">
        
        <div className="search-bar-mini">
          <SearchBar setResults={setResults} placeVal={"TimeStamp"} inpType={"time"} retType={"level"} />
        </div>
        <div className="search-bar-mini">
          <SearchBar setResults={setResults} placeVal={"Duration"} inpType={"date"} retType={"level"} />
        </div>
      </div>

      {results && results.length > 0 && <SearchResultsList results={results} />}


    </div>
  );
}

export default App;
