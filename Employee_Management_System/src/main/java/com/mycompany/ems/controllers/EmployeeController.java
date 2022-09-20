package com.mycompany.ems.controllers;
import com.mycompany.ems.models.Employee;
import com.mycompany.ems.services.*;
import com.mycompany.ems.services.TimesheetService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import javax.validation.ValidationException;
import java.util.List;

@RestController
@RequestMapping("/api/v1")
@CrossOrigin("*")
public class EmployeeController {
    @Autowired
    private EmployeeService employeeService;
    @Autowired
    private TimesheetService timesheetService;
    @Autowired
    private LoginService loginService;
    @GetMapping("/employee")
    List<Employee> findAll() {
        return employeeService.listEmployees();
    }

    @PostMapping("/employee")
    Employee create(@RequestBody Employee emp) {
        if(emp.getEmpName().isEmpty())
        throw new ValidationException("Input Fields are empty");
    else
        employeeService.addEmployee(emp);
    return emp;
    }

    @GetMapping("/employee/{id}")
    Employee getEmployeee(@PathVariable int id) {
        return employeeService.getEmployee(id);
    }

    @PutMapping("/employee")
    Employee updateEmp(@RequestBody Employee emp)
    {  if(employeeService.existById(emp.getEmpID()))
        employeeService.updateEmployee(emp);
    else
        throw new ValidationException("Employee does not exist with that employee id");
    return emp;
    }

    @DeleteMapping("/employee/{id}")
    void delete(@PathVariable Integer id){
        if(employeeService.existById(id)){
            try {
                List<Integer> ts=timesheetService.gettsidByempId(id);
                for (int i=0;i<ts.size();i++) {
                    timesheetService.deleteTimesheet(ts.get(i));
                }
                int lid = loginService.getLogin(id);
                loginService.deleteLogin(lid);
            }catch (Exception e){
                System.out.println(e.getMessage());
            }
            employeeService.deleteEmployee(id);
        }
        else
            throw new ValidationException("Employee does not exist with that employee id");
    }

    @GetMapping("/getrole")
    String getEmpRole(@RequestParam(value = "empID", required = false) int empID)
    {return employeeService.getRole(empID).get(0).getEmpRole();}

    @GetMapping("/employeebyname")
    List<Employee> getEmpName(String empName)
    {   return employeeService.searchEmployee(empName);}

}