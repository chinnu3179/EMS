import { useState } from "react";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import employeeService from "../services/employee.service";

function ForgotPassword(){
    const history = useHistory();
    const [username, setName] = useState('');
    const [empID,setempId] = useState('');
    const [password,setPassword]=useState('');
    
    const updateLogin=function(){
        employeeService.updatepassword(username,empID,password)
        .then((Response)=>{
          toast.success("Your password reset is succesful");
          history.push('/');
        })
        .catch((error) => {
            toast.warning("Your username and employeeId does not match",{autoClose:false});
            console.log("Something went wrong", error);
          });
    }
    return (
        <div className="loginpage">
                <h3>Update Password</h3>
                <div>
                    <input className="loginin" onChange={e => setName(e.target.value)} type="textbox" placeholder="Enter Username...."/>
                </div>
                <div>
                    <input className="loginin" onChange={e => setempId(e.target.value)} type="textbox" placeholder="Enter EmpID...."/>
                </div>
                <div>
                    <input className="loginin" onChange={e => setPassword(e.target.value)} type="password" placeholder="Enter Password...."/>
                </div>
            <button className="buttons" onClick={updateLogin}>
              Update Password
            </button>
       
        </div>
    );
}
export default ForgotPassword;