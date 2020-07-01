import React from "react";

const DataTable = (props) => {
//   console.log(props.employees);
// props.employees.map((employee) => 
//     console.log(employee.dob.date)
// )
    
function getDate(date) {
    const dateSplit= date.split("", 10);
    return dateSplit;
  }
    
  return (
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
        {props.employees.map((employee) => (
          
            <tr key= {employee.login.uuid}>
              <td>
                <img 
                src={employee.picture.medium}
                alt={employee.name.first}
                />
                </td>
              <td>
                {employee.name.first} {employee.name.last}
              </td>
              <td>{employee.phone}</td>
              <td>{employee.email}</td>
              <td>{getDate(employee.dob.date)}</td>
            </tr>
          
        ))}
      </tbody>
    </table>
  );
};

export default DataTable;
