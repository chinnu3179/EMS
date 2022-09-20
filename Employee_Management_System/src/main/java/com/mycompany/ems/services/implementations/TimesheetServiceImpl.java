package com.mycompany.ems.services.impl;

import com.mycompany.ems.models.Employee;
import com.mycompany.ems.models.Timesheet;
import com.mycompany.ems.repositories.EmployeeRepository;
import com.mycompany.ems.repositories.TimesheetRepository;
import com.mycompany.ems.services.TimesheetService;
import com.mycompany.ems.services.TimesheetService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class TimesheetServiceImpl implements TimesheetService {

    @Autowired
    TimesheetRepository timesheetRepository;

    @Autowired
    EmployeeRepository employeeRepository;

    @Override
    public List<Timesheet> listTimesheet() {
        return (List<Timesheet>)timesheetRepository.findAll();
    }

    @Override
    public List<Timesheet> getTimesheet(int timesheetId) {
        List<Timesheet> timesheets=timesheetRepository.getTimesheet(timesheetId);
        return timesheets;
    }

    @Override
    public void addTimesheet(Timesheet timesheet) {
        timesheet.setEmployee(timesheet.getEmployee());
        timesheetRepository.save(timesheet);
    }

    @Override
    public void deleteTimesheet(int timesheetId) {
        timesheetRepository.deleteById(timesheetId);
    }

    @Override
    public void updateTimesheet(Timesheet timesheet) {
        timesheet.setEmployee(timesheet.getEmployee());
        timesheetRepository.save(timesheet);
    }

    @Override
    public List<Integer> gettsidByempId(int empId) {
        return timesheetRepository.gettsidByempId(empId);
    }
    @Override
    public List<Timesheet> listTimesheetByEmpID(int empID) {
        Employee e = employeeRepository.findById(empID).get();
        return (List<Timesheet>)timesheetRepository.findByEmployee(e);

    }

}
