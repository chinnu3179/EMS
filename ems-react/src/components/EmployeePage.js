import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

function EmployeePage(){
    const {empID} = useParams();
    
    return (
        <div className="section-dark container">

        <div>
            <h3 className="font-italic">Employee Home</h3>
        </div>
        <br />
        <div>
        <Link to={`/empdetails/${empID}`} className="buttons">
            Employee Details
        </Link>
        </div>
        <div>
        <br />
        </div>
        <div>
        <Link to={`/timesheetlist/${empID}`} className="buttons">
            Timesheet
        </Link>
        </div>
    
    </div>  
        
    )
    
}
export default EmployeePage;