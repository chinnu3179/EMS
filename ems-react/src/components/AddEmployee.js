import React from "react";
import { useState, useEffect } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import employeeService from "../services/employee.service";
import { toast } from "react-toastify";


const AddEmployee = () => {
  const [empName, setName] = useState("");
  const [empDepartment, setDepartment] = useState("");
  const [empEmail, setEmail] = useState("");
  const [empContact, setContact] = useState("");
  const [empAddress, setAddress] = useState("");
  const [empRole, setRole] = useState("");
  const [saving, setSaving] = useState(false);
  const [dis,setDis] = useState(true);

  useEffect(() => {
    if(empName!="" && empDepartment!="" && empEmail!="" && empContact!="" && empAddress!="" && empRole!="")
    setDis(false);
    else
    setDis(true);
  });
  const history = useHistory();
  const { empID } = useParams();

  const saveEmployee = (e) => {
    e.preventDefault();

    const employee = { empName,empDepartment,empEmail,empContact,empAddress,empRole,empID };

    if (empID) {
      //update
      console.log("going to update")
      employeeService
        .update(employee)
        .then((response) => {
          console.log("Employee data updated successfully", response.data);
          toast.success("Employee details updated");
          history.push("/emp");
        })
        .catch((error) => {
          toast.error("Employee Update Failed",{autoClose:false});
          console.log("Something went wrong", error);
        });
    } else {
      // create
      setSaving(true);
      employeeService
        .create(employee)
        .then((response) => {
          console.log("Empoyee added successfully", response.data);
          toast.success("New Employee created");
          history.push("/emp");
        })
        .catch((error) => {
          setSaving(false);
          toast.error("Employee Add Failed",{autoClose:false});
          console.log("Something went wrong", error);
        });
    }
  };

  useEffect(() => {
    if (empID) {
      employeeService
        .get(empID)
        .then((employee) => {
          setName(employee.data.empName);
          setDepartment(employee.data.empDepartment);
          setEmail(employee.data.empEmail);
          setContact(employee.data.empContact);
          setAddress(employee.data.empAddress);
          setRole(employee.data.empRole)
        })
        .catch((error) => {
          console.log("Something went wrong", error);
        });
    }
  }, []);

  return (
    <div>
      <h3>Add Employeee</h3>
      <hr />
      <form>
        <div>
          <input
            type="text"
            className="form-control"
            id="name"
            value={empName}
            required
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter name"
          />
        </div>
        <div>
          <input
            type="text"
            required
            className="form-control"
            id="department"
            value={empDepartment}
            onChange={(e) => setDepartment(e.target.value)}
            placeholder="Enter Department"
          />
        </div>
        <div>
          <input
            type="text"
            required
            className="form-control"
            id="email"
            value={empEmail}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter Email"
          />
        </div>
        <div>
          <input
            type="text"
            required
            className="form-control"
            id="contact"
            value={empContact}
            onChange={(e) => setContact(e.target.value)}
            placeholder="Enter Contact"
          />
        </div>
        <div>
          <input
            type="text"
            required
            className="form-control"
            id="address"
            value={empAddress}
            onChange={(e) => setAddress(e.target.value)}
            placeholder="Enter Address"
          />
        </div>
        <div>
          <input
            type="text"
            className="form-control"
            id="role"
            value={empRole}
            onChange={(e) => setRole(e.target.value)}
            placeholder="Enter Role"
            required
          />
        </div>
        <div>
          
          <button  type="submit" disabled={dis} onClick={(e) => saveEmployee(e)} className="buttons">
          {saving ? "Saving..." : "Save"}
          </button>
        </div>
      </form>
      <hr />
      <Link to="/emp">Back to List</Link>
    </div>
  );
};

export default AddEmployee;
