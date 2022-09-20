package com.mycompany.ems.controllers;

import com.mycompany.ems.models.Employee;
import com.mycompany.ems.models.Login;
import org.assertj.core.api.Assertions;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import java.util.List;

@RunWith(SpringRunner.class)
@SpringBootTest
public class IntegrationTest {
    @Autowired
    EmployeeController employeeController;
    @Autowired
    LoginController loginController;

    @Test
    public void testCreateReadDelete(){
        List<Employee> employees=employeeController.findAll();
        int size=employees.size();
        Employee employee=new Employee("guna",9879653421L,"dept","email","address","Admin");
        Employee employeeResult=employeeController.create(employee);
        employees=employeeController.findAll();

        Assertions.assertThat(employees).last().hasFieldOrPropertyWithValue("empName","guna");
        Assertions.assertThat(employeeController.findAll().size()==size+1);
        employeeController.delete(employeeResult.getEmpID());
    }

    @Test
    public void testCheckLogin(){
        Employee employee=new Employee("guna",9879653421L,"dept","email","address","Admin");
        Employee employeeResult=employeeController.create(employee);
        Login login = new Login("ravi","ravi","no");
        login.setEmployee(employee);
        login.setEmpID(employee.getEmpID());
        Assertions.assertThat(loginController.checkLogin(login.getLoginUsername(),login.getLoginPassword()));
    }


}
