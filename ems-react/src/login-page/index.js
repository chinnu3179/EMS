import { useState } from "react";
import { useHistory } from "react-router-dom";
import employeeService from "../services/employee.service";
import {toast} from "react-toastify"

function LoginPage(){
    const history = useHistory();
    const [first, setName] = useState('');
    const [last,setPass] = useState('');
    const checkLogin = function(){
        // console.log(`click event login`)
        console.log({first})
        console.log({last})   
        // return null;
        
        employeeService
        .checklogin(first,last)
        .then((response) => {
            console.log(response.data);
            employeeService
            .getrole(response.data)
            .then((roleresponse)=>{
                if(roleresponse.data === 'Admin'){
                    toast.success("Admin Login Success");
                    history.push(`/adminhome/${response.data}`);
                }else if(roleresponse.data === 'Employee'){
                    toast.success("Employee Login Success");
                    history.push(`/emphome/${response.data}`);
                }
                else{
                    toast.warning("Invalid username or password",{autoClose:false});
                }
            })
            .catch((error) => {
                toast.warning("Invalid username or password",{autoClose:false});
                console.log("Something went wrong", error);
              });
          })
          .catch((error) => {
            toast.warning("Invalid username or password",{autoClose:false});
            console.log("Something went wrong", error);
          });

    }

    function forgotPassword()
    {history.push("/forgot");}

    return (
        <div className="loginpage">
            <h3> Sign In</h3>
            <div>
                <input className="loginin" onChange={e => setName(e.target.value)} type="textbox" placeholder="Enter Username...."/>
            </div>
            <div>
                <input className="loginin" onChange={e => setPass(e.target.value)} type="password" placeholder="Enter Password...."/>
            </div>
            <button className="buttons" onClick={checkLogin}>
              LOGIN
            </button>
            <button className="buttons" onClick={forgotPassword}>
              ForgotPassword
            </button>
        </div>
    )
}
export default LoginPage;