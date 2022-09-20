import React from "react";
import { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import employeeService from "../services/employee.service";
import Spinner from '../services/Spinner'


const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const history = new useHistory();

  const init = () => {
    
    employeeService
      .getAll()
      .then((response) => {
        console.log("Printing employees data", response.data);
        setEmployees(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log("Something went wrong", error);
      });
     
  };

  useEffect(() => {
    init();
  }, []);

  const handleDelete = (id) => {
    console.log("Printing id", id);
    employeeService
      .remove(id)
      .then((response) => {
        console.log("employee deleted successfully", response.data);
        setLoading(true);
        init();
      })
      .catch((error) => {
        console.log("Something went wrong", error);
      });
  };
  const handleAddEmployeesBulk=()=>{
    console.log(`bulk add employees`);
    history.push("/addbulkemp")
  };
  if (isLoading) {
    return <div className="container"><Spinner /></div>;
  }
  return (
    <div className="container">
      <h3>List of Employees</h3>
      <hr />
      <div>
        <Link to="/add" className="buttons">
          Add Employee
        </Link>
        <button className="buttons"  onClick={() => {
                      handleAddEmployeesBulk();
                    }}>
                          Add Employees in Bulk
        </button>
        <table className="table table-bordered table-striped">
          <thead className="thead-dark">
            <tr>
              <th> Name</th>
              <th> Department</th>
              <th> Email</th>
              <th> Contact</th>
              <th> Address</th>
              <th> Role</th>
              <th> Actions</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((employee) => (
              <tr key={employee.empID}>
                <td>{employee.empName}</td>
                <td>{employee.empDepartment}</td>
                <td>{employee.empEmail}</td>
                <td>{employee.empContact}</td>
                <td>{employee.empAddress}</td>
                <td>{employee.empRole}</td>
                <td>
                  <Link
                    className="buttons"
                    to={`/employee/edit/${employee.empID}`}
                  >
                    Update
                  </Link>

                  <button
                    className="buttons"
                    onClick={() => {
                      handleDelete(employee.empID);
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EmployeeList;
