package com.mycompany.ems.controllers;

import com.mycompany.ems.models.Employee;
import com.mycompany.ems.models.Login;
import com.mycompany.ems.services.EmployeeService;
import com.mycompany.ems.services.LoginService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import javax.validation.ValidationException;
import java.util.List;

@RestController
@RequestMapping("/api/v1")
@CrossOrigin("*")
public class LoginController {
    @Autowired
    private LoginService loginService;
    @Autowired
    private EmployeeService employeeService;

    @PostMapping("/login/{id}")
    public Login create(@PathVariable int id,@RequestBody Login login) {
        Employee e = employeeService.getEmployee(id);
        login.setEmployee(e);
        login.setEmpID(e.getEmpID());
//        if(loginService.getLoginForLogin(id)!=null)
//            throw new ValidationException("login already exists");
//        else
            loginService.addLogin(login);
        return login;
    }

    @GetMapping("/checklogin")
    public int checkLogin(@RequestParam(value = "first", required = false) String loginusername,
                              @RequestParam(value = "last", required = false) String loginpassword){
        return loginService.checkLogin(loginusername,loginpassword).get(0).getEmpID();
    }
    @DeleteMapping("/login/{id}")
    public void deletelogin(@PathVariable int id){
        loginService.deleteLogin(id);
    }
//    @GetMapping("/login")
//    public List<Login> listalllogins(){
//        return loginService.listlogin();
//    }
@PutMapping("/updatelogin")
public void updatePassword(@RequestParam(value = "username", required = false) String loginusername,
                           @RequestParam(value = "empID", required = false) int empID,@RequestParam(value = "password", required = false) String Password) throws Exception {
    List<Login> ls=loginService.updateLogin(empID,loginusername);
    if(ls.size()==1)
    {Login temp=ls.get(0);
        temp.setLoginPassword(Password);
        loginService.updateByLoginId(temp);
    }
    else
    {throw new Exception("invalid details");}

}
}
