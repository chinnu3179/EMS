import Papa from "papaparse";
import React, { useState } from "react";
import {useHistory} from 'react-router-dom';
import employeeService from "../services/employee.service";
import { toast } from "react-toastify";


const allowedExtensions = ["csv"];

function AddEmployeesBulk(){
    // This state will store the parsed data
    const history = useHistory();
    const [data, setData] = useState([]);
     
    // It state will contain the error when
    // correct file extension is not used
    const [error, setError] = useState("");
     
    // It will store the file uploaded by the user
    const [file, setFile] = useState("");
 
    // This function will be called when
    // the file input changes
    const handleFileChange = (e) => {
        setError("");
         
        // Check if user has entered the file
        if (e.target.files.length) {
            const inputFile = e.target.files[0];
             
            // Check the file extensions, if it not
            // included in the allowed extensions
            // we show the error
            const fileExtension = inputFile?.type.split("/")[1];
            if (!allowedExtensions.includes(fileExtension)) {
                setError("Please input a csv file");
                return;
            }
 
            // If input type is correct set the state
            setFile(inputFile);
        }
    };
    const handleParse = () => {
         
        if (!file) return setError("Enter a valid file");
 
        // Initialize a reader which allows user
        // to read any file or blob.
        const reader = new FileReader();
         
        // Event listener on reader when the file
        // loads, we parse it and set the data.
        reader.onload = async ({ target }) => {
            const csv = Papa.parse(target.result, { header: true });
            const parsedData = csv?.data;
            const length = parsedData.length;
            // const column7 = Object.;
            // const columns = Object.values(parsedData[0]);
            // console.log(column);
            // setData("Employees added");
            // console.log(parsedData.length);
            // console.log(parsedData);
            // console.log(column[0]);
            var column,empName,empDepartment,empEmail,empContact,empAddress,empRole;
            for (var i=0;i<length-1;i++){
                column = Object.values(parsedData[i]);
                empName= column[0];
                empDepartment= column[1];
                empEmail=column[2];
                empContact=column[3];
                empAddress=column[4];
                empRole=column[5];
                const employee = { empName,empDepartment,empEmail,empContact,empAddress,empRole};
                console.log(employee)
                employeeService
                    .create(employee)
                    .then((response) => {
                    console.log("Empoyee added successfully", response.data);
                    })
                    .catch((error) => {
                        toast.error("Bulk Upload Failed",{autoClose:false});
                    console.log("Something went wrong", error);
                    });
            }
            toast.success(`${length-1} Employees added successfully`);
            history.push("/emp");

        };
        reader.readAsText(file);
    };
 
    return (
        <div className="loginpage">
            <label htmlFor="csvInput" style={{ display: "block" }}>
                <h3>Enter CSV File</h3>
            </label>
            <input
            className="loginin"
                onChange={handleFileChange}
                id="csvInput"
                name="file"
                type="File"
            />
            <div>
                <button className="buttons" onClick={handleParse}>Parse</button>
            </div>
            <div style={{ marginTop: "3rem" }}>
                {error ? error : data.map((col,
                  idx) => <div key={idx}>{col}</div>)}
            </div>
        </div>
    );
};
export default AddEmployeesBulk;