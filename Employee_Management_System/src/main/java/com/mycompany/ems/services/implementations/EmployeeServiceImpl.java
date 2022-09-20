package com.mycompany.ems.services.implementations;

import com.mycompany.ems.models.Employee;
import com.mycompany.ems.repositories.EmployeeRepository;
import com.mycompany.ems.services.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class EmployeeServiceImpl implements EmployeeService {
    @Autowired
    private EmployeeRepository employeeRepository;

    @Override
    public List<Employee> listEmployees() {
        Iterable<Employee> employee = employeeRepository.findAll();
        return (List<Employee>)employee;
    }

    @Override
    public Employee getEmployee(int employeeId) {
        Optional<Employee> optEmp = employeeRepository.findById(employeeId);
        return optEmp.get();
    }

    @Override
    public void addEmployee(Employee employee) {
        employeeRepository.save(employee);
    }

    @Override
    public void deleteEmployee(int employeeId) {
        employeeRepository.deleteById(employeeId);
    }
    @Override
    public void updateEmployee(Employee employee) {
        employeeRepository.save(employee);
    }

    @Override
    public List<Employee> searchEmployee(String empName){
        return employeeRepository.findByEmpName(empName);
    }

    @Override
    public List<Employee> getRole(int empId){
        return employeeRepository.findByEmpRole(empId);
    }

    @Override
    public boolean existById(int empId){
        return employeeRepository.existsById(empId);
    }

}
