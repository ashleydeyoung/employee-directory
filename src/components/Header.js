import React from "react";


function Header(props) {
  return (
    <div className="jumbotron">
      <h1 className="display-4">Employee Directory</h1>
      <p className="lead">
        Use the search box below to find employees by name
      </p>
    </div>
  );
}

export default Header;
