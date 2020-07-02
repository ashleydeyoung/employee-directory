import React from "react";
// import Search from "./Search.js";

function Header(props) {
  return (
    <div className="jumbotron">
      <h1 className="display-4">Employee Directory</h1>
      <p className="lead">
        Use the search box below to find employees by name
      </p>
      {/* <Search 
                handleInputChange={props.handleInputChange}
                handleFormSubmit={props.handleFormSubmit}/> */}
    </div>
  );
}

export default Header;
