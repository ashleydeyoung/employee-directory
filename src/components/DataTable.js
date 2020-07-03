import React from "react";
import DataRow from "./DataRow";
import employees from "../employees.json";
import Search from "./Search";

class DataTable extends React.Component {
  state = {
    employees,
    firstName: "",
    sort: "",
    
  };
  //filters cahnge
  handleInputChange = (event) => {
    // Getting the value and name of the input which triggered the change
    let value = event.target.value;
    // console.log(value)
    let newList = employees.filter((emp) => {
      return emp.name.first.toLowerCase().includes(value.toLowerCase());
    });
  
    // Updating the input's state
    this.setState({
      employees: newList,
    });
  };

  handleFormSubmit = (event) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    event.preventDefault();
    console.log("clicks");
    let employeeSearch = employees.filter((e) => {
      if (e.name.first.toLowerCase().substr(0, this.state.firstName.length) === this.state.firstName.toLowerCase().substr(0, this.state.firstName.length)){

        return true;
      } else {
        return false
      }
    
    });
    //setState
    this.setState({ employees: employeeSearch });
  };

 
  //sorts name
  handleNameClick=  () => {

    let newArray = this.state.employees

    if (this.state.sort === "ascending") {
      let sortArray = newArray.sort((a,b) => (a.name.first > b.name.first) ? 1: -1)
      this.setState({employees: sortArray,
        sort: "descending"})
    } else {
      let sortArray = newArray.sort((a,b) => (a.name.first > b.name.first) ? -1 : 1)
      
      this.setState({employees: sortArray,
      sort: "ascending"})
    }
  }

  //gets date format from DOB in DB
  getDate = (date) => {
    const dateSplit = date.split("", 10);
    return dateSplit;
  };

  render() {
    const employees = this.state.employees;
    return (
      <>
        <Search
          handleInputChange={this.handleInputChange}
          handleFormSubmit={this.handleFormSubmit}
        />

        <table className="table table-striped m-2">
          <thead className="thead-light">
            <tr>
              <th scope="col">Photo</th>
              <th scope="col" onClick={this.handleNameClick}>
                Name
              </th>
              <th scope="col">Phone</th>
              <th scope="col">Email</th>
              <th scope="col">DOB</th>
            </tr>
          </thead>
          <tbody>
            {[...employees].map((employee) => (
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

