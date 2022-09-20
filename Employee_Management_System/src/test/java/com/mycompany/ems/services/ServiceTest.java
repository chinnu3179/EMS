package com.mycompany.ems.services;

import com.mycompany.ems.models.Employee;
import com.mycompany.ems.models.Login;
import com.mycompany.ems.models.Timesheet;
import com.mycompany.ems.repositories.EmployeeRepository;
import com.mycompany.ems.repositories.TimesheetRepository;
import org.assertj.core.api.Assertions;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.test.context.junit4.SpringRunner;

import java.sql.Date;
import java.util.List;

@RunWith(SpringRunner.class)
@DataJpaTest
@AutoConfigureTestDatabase(replace = AutoConfigureTestDatabase.Replace.NONE)
public class ServiceTest {

    @Autowired
    EmployeeRepository employeeRepo;

    @Autowired
    TimesheetRepository timesheetRepo;

    @Test
    public void testCreateReadEmp() {
        Employee employee = new Employee("guna",9879653421L,"dept","email","address","Admin");
        employeeRepo.save(employee);
        Iterable<Employee> employees = employeeRepo.findAll();
        Assertions.assertThat(employees).extracting(Employee::getEmpName).contains("guna");
    }

    @Test
    public void testDeleteEmp() {
        Employee employee = new Employee("guna",9879653421L,"dept","email","address","Admin");
        employeeRepo.save(employee);
        timesheetRepo.deleteAll();
        employeeRepo.deleteAll();
        Assertions.assertThat(employeeRepo.findAll()).isEmpty();
    }

    @Test
    public void testUpdateEmp() {
        Employee employee = new Employee("guna",9879653421L,"dept","email","address","Admin");
        employeeRepo.save(employee);
        List<Employee> employees = (List<Employee>) employeeRepo.findAll();
        employees.get(0).setEmpName("gunadeep");
        employeeRepo.save(employees.get(0));
        Assertions.assertThat(employees).extracting(Employee::getEmpName).contains("gunadeep");
    }

    @Test
    public void testCreateReadTs() {
        Employee employee = new Employee("guna",9879653421L,"dept","email","address","Admin");
        employeeRepo.save(employee);
        Timesheet timesheet = new Timesheet("guna",30, Date.valueOf("2022-06-21"),"Training","Java full stack development training");
        timesheet.setEmployee(employee);
        timesheetRepo.save(timesheet);
        Iterable<Timesheet> timesheets = timesheetRepo.findAll();
        Assertions.assertThat(timesheets).extracting(Timesheet::getEmpName).contains("guna");
    }

    @Test
    public void testDeleteTs() {
        Employee employee = new Employee("guna",9879653421L,"dept","email","address","Admin");
        employeeRepo.save(employee);
        Timesheet timesheet = new Timesheet("guna",30, Date.valueOf("2022-06-21"),"Training","Java full stack development training");
        timesheet.setEmployee(employee);
        timesheetRepo.save(timesheet);
        timesheetRepo.deleteAll();
        Assertions.assertThat(timesheetRepo.findAll()).isEmpty();
    }
}