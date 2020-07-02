import React from "react";


function Search (props) {
    return (
        <div className="searchbox">
          <div className="input-group">
              <div className="input-group-prepend">
                <span className="input-group-text" onClick={(event) => props.handleFormSubmit(event)} id="">
                  Search
                </span>
              </div>
              <input
              className="form-control mr-sm-2"
              
              onChange={props.handleInputChange}
              name = "firstName"
              type="text"
              placeholder="Employee name"
              aria-label="Search"
            />
            </div>
        </div>
      );
}

export default Search;