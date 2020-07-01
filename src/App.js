import React from "react";
import "./App.css";
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";
import DataTable from "./components/DataTable";

function App() {
  return (
    <div className="App">
      <Wrapper>
        <Header />
        <DataTable />
      </Wrapper>
    </div>
  );
}

export default App;
