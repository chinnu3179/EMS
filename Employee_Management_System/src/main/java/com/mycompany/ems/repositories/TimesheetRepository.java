package com.mycompany.ems.repositories;

import com.mycompany.ems.models.Employee;
import com.mycompany.ems.models.Timesheet;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface TimesheetRepository extends CrudRepository<Timesheet,Integer> {

    @Query("SELECT s FROM Timesheet s WHERE s.employee.empID=?1")
    public List<Timesheet> getTimesheet(int empId);

    Iterable<Timesheet> findByEmployee(Employee employee);
    @Query("SELECT s.timesheetId FROM Timesheet s WHERE s.employee.empID=?1")
    public List<Integer> gettsidByempId(int empId);
}
