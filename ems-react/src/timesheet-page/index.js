import {Link} from "react-router-dom"
function Timesheet(){
    return (
        <div className="dark">
        <Link to="/timesheetlist" className="buttons">
          Timesheets
        </Link>
        </div>
    );
}
export default Timesheet;