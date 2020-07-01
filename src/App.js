import React from 'react';
import './App.css';
import Header from "./components/Header";
import DataTable from "./components/DataTable";
import employees from "./employees.json";
function App() {
  return (
    <div className="App">
      <Header />
      <DataTable employees={employees}/>
      
    </div>
  );
}

export default App;
