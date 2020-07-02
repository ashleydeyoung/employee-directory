import React from "react";
import DataRow from "./DataRow";
import employees from "../employees.json";
import Search from "./Search";

class DataTable extends React.Component {
  state = {
    employees,
    firstName: "",
    
  };

  handleInputChange = (event) => {
    // Getting the value and name of the input which triggered the change
    let value = event.target.value;
    // console.log(value)
    let newList = employees.filter((emp) => {
      return emp.name.first.toLowerCase().includes(value.toLowerCase());
    });
    // console.log(newList)
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
    this.setState({ employeeSearch });
  };

 

  sortByName ( a, b ) {
    // const nameA = a.name.first.toLowerCase();
    // const nameB = b.name.first.toLowerCase();

    let comparison = 0;
    if (a > b) {
      comparison = 1;
    } else if (a < b) {
      comparison = -1;
    }
    return comparison
  }

  handleNameClick = () => {
    console.log("clicked")
    let sortedEmployees = this.state.employees.sort((a, b) => {
      // This comparison logic adapted from example found at:
      // https://www.w3schools.com/js/js_array_sort.asp

      const nameA = a.name.first.toLowerCase();
      const nameB = b.name.first.toLowerCase();
      if (nameA < nameB) return -1;
      if (nameA > nameB) return 1;
      return 0;
  })
    this.setState(
      {
          sortedEmployees
      }
  );
  };


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

        <table className="table">
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
                sort= {this.sortByName(employee.name.first)}
              />
            ))}
          </tbody>
        </table>
      </>
    );
  }
}

export default DataTable;

// {this.state.nameAscending? employee.sort((a,z) {return a-b}) : employee.sort((a,z) {return z-a}}

//onClick => this.setStat==> this.state.nameAscending = !this.state.nameAscending
