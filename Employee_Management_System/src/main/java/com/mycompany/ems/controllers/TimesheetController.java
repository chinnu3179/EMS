package com.mycompany.ems.controllers;

import com.mycompany.ems.models.Employee;
import com.mycompany.ems.models.Timesheet;
import com.mycompany.ems.services.EmployeeService;
import com.mycompany.ems.services.TimesheetService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
@RestController
@RequestMapping("/api/v1")
@CrossOrigin("*")
public class TimesheetController {

    @Autowired
    private TimesheetService timesheetService;
    @Autowired
    private EmployeeService employeeService;

    @GetMapping("/timesheet")
    public List<Timesheet> listAllTimesheet() {
        return timesheetService.listTimesheet();
    }

    @GetMapping("/timesheetbytsid/{timesheetdid}")
    public List<Timesheet> getAllTimesheet(@PathVariable int timesheetdid) {
        return timesheetService.getTimesheet(timesheetdid);
    }
//    @GetMapping("/timesheet/{id}")
//    public List<Timesheet> listAllTimesheetbyId(@PathVariable int id) {
//        List<Integer> ids = timesheetService.gettsidByempId(id);
//        ArrayList<Timesheet> t = new ArrayList<>();
//        for(int i : ids){
//            t.add(timesheetService.getTimesheet(i).get(0));
//        }
//        return t;
//    }
    @GetMapping("/timesheet/{id}")
    public List<Timesheet> listEmployeeTimesheets(@PathVariable int id) {
        return timesheetService.listTimesheetByEmpID(id);
    }

    @PostMapping("/timesheet/{id}")
    public Timesheet create(@PathVariable int id,@RequestBody Timesheet timesheet) {
        Employee e = employeeService.getEmployee(id);
        timesheet.setEmployee(e);
        timesheetService.addTimesheet(timesheet);
        return timesheet;
    }

    @PutMapping("/timesheet")
    Timesheet updateTimesheet(@RequestBody Timesheet timesheet) {

        Employee e = timesheetService.getTimesheet(timesheet.getTimesheetId()).get(0).getEmployee();
        timesheet.setEmployee(e);
        timesheetService.updateTimesheet(timesheet);
        return timesheet;
    }

    @DeleteMapping("/timesheet/{timesheetdid}")
    public void deleteTimesheet(@PathVariable int timesheetdid)
    {
        timesheetService.deleteTimesheet(timesheetdid);
    }
}
