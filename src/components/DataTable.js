import React, { Component } from "react";
import DataRow from "./DataRow";
import employees from "../employees.json";
import Search from "./Search";

class DataTable extends Component {
  state = {
    sorted: employees,
    firstName: "",
  };

  handleInputChange = (event) => {
    // Getting the value and name of the input which triggered the change
    let value = event.target.value;
    console.log(value)
    let newList = employees.filter(emp => {
     return emp.name.first.toLowerCase().includes(value.toLowerCase())
     
    })
    console.log(newList)
    // Updating the input's state
    this.setState({
      sorted: newList,
    });
  };

  handleFormSubmit = (event) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    event.preventDefault();
    console.log("clicks");
    let employeeArray = employees.filter((e) => {
      return e.name.first.includes(this.state.firstName);
    });
    //setState
    this.setState({ sorted: employeeArray });

    this.setState({
      firstName: "",
      lastName: "",
    });
  };

  getDate = (date) => {
    const dateSplit = date.split("", 10);
    return dateSplit;
  };

  render() {
    return (
      <>
        <Search
          // firstName={this.state.firstName}
          handleInputChange={this.handleInputChange}
          handleFormSubmit={this.handleFormSubmit}
        />

        <table className="table">
          <thead className="thead-light">
            <tr>
              <th scope="col">Photo</th>
              <th scope="col">Name</th>
              <th scope="col">Phone</th>
              <th scope="col">Email</th>
              <th scope="col">DOB</th>
            </tr>
          </thead>
          <tbody>
            {[...this.state.sorted].map((employee) => (
              <DataRow
                key={employee.login.uuid}
                picture={employee.picture.medium}
                firstName={employee.name.first}
                lastName={employee.name.last}
                phone={employee.phone}
                email={employee.email}
                date={this.getDate(employee.dob.date)}
              />
            ))}
          </tbody>
        </table>
      </>
    );
  }
}

export default DataTable;
