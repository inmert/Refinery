import { useState } from "react";

import "./App.css";
import { SearchBar } from "./components/searchBar";
import { SearchResultsList } from "./components/SearchResultsList";

function App() {
  const [results, setResults] = useState([]);

  return (
    <div className="App">
      <h1 className="title">Refinery</h1>

      <div className="search-bar">
        <SearchBar setResults={setResults} placeVal={"Message"} propName={"message"}/>
      </div>

      {results && results.length > 0 && <SearchResultsList results={results} />}


    </div>
  );
}

export default App;
