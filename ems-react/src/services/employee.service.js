import httpClient from "../http-common";

function sleeper(ms) {
  return function(x) {
    return new Promise(resolve => setTimeout(() => resolve(x), ms));
  };
}
const getAll = () => {
  return httpClient.get("/employee").then(sleeper(3000));
};

const get = (id) => {
  return httpClient.get(`/employee/${id}`);
};
const getrole = (empID) => {
  return httpClient.get(`/getrole?empID=${empID}`);
};
const create = (data) => {
  return httpClient.post("/employee", data);
};

const update = (data) => {
  return httpClient.put(`/employee`, data);
};

const remove = (id) => {
  return httpClient.delete(`/employee/${id}`);
};
const checklogin =(first,last) =>{
  return httpClient.get(`/checklogin?first=${first}&last=${last}`);
}
const getAllTimesheet = (id) => {
  return httpClient.get(`/timesheet/${id}`).then(sleeper(3000));
};

const createtimesheet = (id,data) => {
  return httpClient.post(`/timesheet/${id}`, data);
};
const updatepassword =(username,id,password)=>{
  console.log("hello");
          console.log(id);
          console.log(username);
          console.log(password);
    return httpClient.put(`updatelogin?username=${username}&empID=${id}&password=${password}`)
  };

export default { getAll, create, get, update, remove , checklogin, getrole , getAllTimesheet, createtimesheet ,updatepassword};
