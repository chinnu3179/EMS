import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import EmployeeList from "./components/EmployeeList";
import AddEmployee from "./components/AddEmployee";
import NotFound from "./components/NotFound";
import LoginPage from "./login-page";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Timesheet from "./timesheet-page";
import TimesheetList from "./timesheet-page/timesheetlist"
import AddTimesheet from "./timesheet-page/addtimesheet"
import AddEmployeesBulk from "./components/AddEmployeesBulk";
import ForgotPassword from "./login-page/ForgotPassword";
import EmployeePage from "./components/EmployeePage";
import AdminPage from "./components/AdminPage";
import EmployeeDetails from "./components/EmpDetails";

function App() {
  return (
    <BrowserRouter>
      <div>
        <div>
          <Switch>
            <Route exact path="/" component={LoginPage}/>
            <Route path="/forgot" component={ForgotPassword} />
            <Route path="/emphome/:empID" component={EmployeePage} />
            <Route path="/adminhome/:empID" component={AdminPage} />
            <Route path="/empdetails/:empID" component={EmployeeDetails} />
            <Route path="/emp" component={EmployeeList} />
            <Route path="/addbulkemp" component={AddEmployeesBulk} />
            <Route path="/add" component={AddEmployee} />
            <Route path="/employee/edit/:empID" component={AddEmployee} />
            <Route path="/timesheet/:empID" component={Timesheet} />
            <Route path="/timesheetlist/:empID" component={TimesheetList} />
            <Route path="/addtimesheet/:empID" component={AddTimesheet} />
            <Route path="/*" component={NotFound} />
          </Switch>
          <ToastContainer autoClose={3000} hideProgressBar  />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
