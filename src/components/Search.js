import React from "react";


const Search = () => {
    return (
        <div className="searchbox">
          <div className="input-group">
              <div className="input-group-prepend">
                <span className="input-group-text" id="">
                  Search
                </span>
              </div>
              <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Employee name"
              aria-label="Search"
            />
            </div>
        </div>
      );
}

export default Search;