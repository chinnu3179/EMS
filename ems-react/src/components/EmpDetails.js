import { useState,useEffect } from "react";
import { useParams } from "react-router-dom";
import employeeService from "../services/employee.service";
import Text from 'react';
function EmployeeDetails(){
    const {empID} = useParams();
    // const empID = ;
    const [employee, setEmployee] = useState([]);
    useEffect(() => {
        if (empID) {
            console.log(empID)
            employeeService
            .get(empID)
            .then((employee) => {
                console.log(employee.data)
              setEmployee(employee.data);
            })
            .catch((error) => {
              console.log("Something went wrong", error);
            });
        }
      }, []);
    return (
    <div className="container">
        <h3>Employee Details</h3>
        <table className="table table-bordered table-striped">
          <thead className="thead-dark">
            <tr>
              <th> Name</th>
              <th> Department</th>
              <th> Email</th>
              <th> Contact</th>
              <th> Address</th>
              <th> Role</th>
            </tr>
          </thead>
          <tbody>
            {
              <tr key={employee.empID}>
                <td>{employee.empName}</td>
                <td>{employee.empDepartment}</td>
                <td>{employee.empEmail}</td>
                <td>{employee.empContact}</td>
                <td>{employee.empAddress}</td>
                <td>{employee.empRole}</td>
              </tr>
            }
          </tbody>
        </table>
        </div>
    )
}
export default EmployeeDetails;