package com.mycompany.ems.repositories;

import com.mycompany.ems.models.Employee;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface EmployeeRepository extends CrudRepository<Employee,Integer> {

    public List<Employee> findByEmpName(String empName);
    @Query("SELECT s FROM Employee s WHERE s.empID=?1")
    public List<Employee> findByEmpRole(int empId);

}
