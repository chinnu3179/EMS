import React from "react";
import { useState, useEffect } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import employeeService from "../services/employee.service";
import { toast } from "react-toastify";

const AddTimesheet = () => {
  const [empName, setName] = useState("");
  const [timeTask, setTimeTask] = useState("");
  const [timeDate, setTimeDate] = useState("");
  const [timeTotalHours, setTimeTotalHours] = useState("");
  const [timeDescription, setTimeDescription] = useState("");
  const [saving, setSaving] = useState(false);
  const [dis,setDis] = useState(true);

  useEffect(() => {
    if(empName!="" && timeTask!="" && timeDate!="" && timeTotalHours!="" && timeDescription!="" && empID!="")
    setDis(false);
    else
    setDis(true);
  });

  const history = useHistory();
  const { empID } = useParams();

  const saveTimesheet = (e) => {
    e.preventDefault();
    setSaving(true)
    const timesheet = { empName,timeTask,timeDate,timeTotalHours,timeDescription,empID };
      employeeService
        .createtimesheet(empID,timesheet)
        .then((response) => {
          console.log("Timesheet added successfully", response.data);
          toast.success("New Timesheet created");
          history.push(`/timesheetlist/${empID}`);
        })
        .catch((error) => {
          console.log("Something went wrong", error);
        });
  };

  return (
    <div className="container">
      <h3>Add Timesheet</h3>
      <hr />
      <form>
        <div>
          <input
            type="text"
            className="form-control"
            id="name"
            value={empName}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter name"
          />
        </div>
        <div>
          <input
            type="text"
            className="form-control"
            id="timeTask"
            value={timeTask}
            onChange={(e) => setTimeTask(e.target.value)}
            placeholder="Enter TimeTask"
          />
        </div>
        <div>
          <input
            type="text"
            className="form-control"
            id="timeDate"
            value={timeDate}
            onChange={(e) => setTimeDate(e.target.value)}
            placeholder="Enter Date"
          />
        </div>
        <div>
          <input
            type="text"
            className="form-control"
            id="timeTotalHours"
            value={timeTotalHours}
            onChange={(e) => setTimeTotalHours(e.target.value)}
            placeholder="Enter Total Hours"
          />
        </div>
        <div>
          <input
            type="text"
            className="form-control"
            id="address"
            value={timeDescription}
            onChange={(e) => setTimeDescription(e.target.value)}
            placeholder="Enter Description"
          />
        </div>
        <div>
          <button disabled={dis} onClick={(e) => saveTimesheet(e)} className="buttons">
          {saving ? "Saving..." : "Save"}
          </button>
        </div>
      </form>
      <hr />
      <Link to={`/timesheetlist/${empID}`}>Back to List</Link>
    </div>
  );
// return (
//     <div>wffsdasvdvsd</div>
// )
};

export default AddTimesheet;
