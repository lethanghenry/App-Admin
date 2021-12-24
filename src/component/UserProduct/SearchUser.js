import React from "react";
import { useState } from "react";

export default function Search({ searchNameUser }) {
  const [text, setText] = useState("");

  const handleSearch = (event) => {
    return setText(event.target.value);
  };

  const searchName = () => {
    return searchNameUser(text);
  };

  return (
    <div>
      <div className="card">
        <div className="card-header">
          <h3>Search</h3>
        </div>
        <div className="card-body">
          <div class="form-group">
            <label>Name</label>
            <input type="text" class="form-control" onChange={handleSearch} />
          </div>
          <div className="form-group text-center mt-3">
            <button className="btn btn-primary" onClick={searchName}>
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
