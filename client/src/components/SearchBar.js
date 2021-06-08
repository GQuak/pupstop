import React, { useRef } from "react";

function SearchBar() {

  return (
    <div>
      <form className="form-group mt-5">
        <input
          className="form-control"
          
          placeholder="Search for a yard..."
        />
        <button className="btn mt-3 mb-5" type="submit">
          Search
        </button>
      </form>
    </div>
  );
}

export default SearchBar;
