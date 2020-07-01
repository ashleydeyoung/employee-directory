import React from "react";

const DataTable = (props) => {
  console.log(props.employees);
    props.employees.map((employee) => {
        console.log(employee.name.first)
        console.log(employee.login.uuid)

        
    })
  return (
    <table className="table">
      <thead className="thead-light">
        <tr>
          <th scope="col">Image</th>
          <th scope="col">Name</th>
          <th scope="col">Phone</th>
          <th scope="col">Email</th>
          <th scope="col">DOB</th>
        </tr>
      </thead>
      <tbody>
        {props.employees.map((employee) => (
          
            <tr key= {employee.login.uuid}>
              <td>{employee.gender}</td>
              <td>
                {employee.name.first} {employee.name.last}
              </td>
              <td>{employee.phone}</td>
              <td>{employee.email}</td>
              <td>{employee.dob.date}</td>
            </tr>
          
        ))}
      </tbody>
    </table>
  );
};

export default DataTable;
