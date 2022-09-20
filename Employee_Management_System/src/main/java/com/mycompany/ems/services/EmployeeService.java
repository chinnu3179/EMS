package com.mycompany.ems.services;

import com.mycompany.ems.models.Employee;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface EmployeeService  {
    public List<Employee> listEmployees();

    public Employee getEmployee(int id);

    public void addEmployee(Employee employee);

    public void deleteEmployee(int id);

    public void updateEmployee(Employee employee);

    public List<Employee> searchEmployee(String empName);

    public List<Employee> getRole(int empId);
    public boolean existById(int empId);


}
