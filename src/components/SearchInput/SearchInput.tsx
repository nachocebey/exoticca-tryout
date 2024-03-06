import { useState } from "react";
import "./index.css";

export default function SearchInput() {
  const [searchInput, setSearchInput] = useState("");

  const handleChange = (inputText: string) => {
    setSearchInput(inputText);
  };

  return (
    <div
      className="search-input--container"
      onClick={(e) => {
        e.stopPropagation();
      }}
    >
      <span className="material-symbols-outlined">search</span>
      <input
        type="text"
        placeholder="Search here"
        onChange={(e) => handleChange(e.target.value)}
        value={searchInput}
      />
      <button type="button">Search</button>
    </div>
  );
}
