import React from "react";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import employeeService from "../services/employee.service";
import Spinner from '../services/Spinner'


const TimesheetList = () => {
    const {empID} = useParams();
  const [timesheets, setTimesheets] = useState([]);
  const [isLoading, setLoading] = useState(true);
  
//   return (
//     <div>serfdagasdfbvasdfbvafbfbf</div>
//   )

  const init = () => {
    
    employeeService
      .getAllTimesheet(empID)
      .then((response) => {
        console.log("Printing timesheets data", response.data);
        setTimesheets(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log("Something went wrong", error);
      });
     
  };

  useEffect(() => {
    init();
  }, []);

//   const handleDelete = (id) => {
//     console.log("Printing id", id);
//     employeeService
//       .remove(id)
//       .then((response) => {
//         console.log("employee deleted successfully", response.data);
//         init();
//       })
//       .catch((error) => {
//         console.log("Something went wrong", error);
//       });
//   };
  if (isLoading) {
    return <div ><Spinner /></div>;
  }
//   const empID = 3;
  return (
    <div>
      <h3>List of Timesheets</h3>
      <div>
        <Link to={`/addtimesheet/${empID}`} className="buttons">
          Add Timesheet
        </Link>
        {/*
        empID
        employee
        timeDescription
        timeTask
        timeDate
        timeTotalHours
        timesheets
        TimesheetList
        */}
        <div>
        <table>
          <thead >
            <tr>
              <th> Name</th>
              <th> Task</th>
              <th> Date</th>
              <th> Total Hours</th>
              <th> Descriptions</th>
              <th> empID</th>
            </tr>
          </thead>
          <tbody>
            {timesheets.map((t) => (
              <tr key={t.timesheetId}>
                <td>{t.empName}</td>
                <td>{t.timeTask}</td>
                <td>{t.timeDate}</td>
                <td>{t.timeTotalHours}</td>
                <td>{t.timeDescription}</td>
                <td>{t.employee.empID}</td>
                {/* <td>
                  <Link
                    className="btn btn-info"
                    to={`/employee/edit/${employee.empID}`}
                  >
                    Update
                  </Link>

                  <button
                    className="btn btn-danger ml-2"
                    onClick={() => {
                      handleDelete(employee.empID);
                    }}
                  >
                    Delete
                  </button>
                </td> */}
              </tr>
            ))}
          </tbody>
        </table>
        </div>
      </div>
    </div>
  );
};

export default TimesheetList;
