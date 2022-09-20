package com.mycompany.ems.services;


import com.mycompany.ems.models.Timesheet;
import com.mycompany.ems.models.Timesheet;

import java.util.List;

public interface TimesheetService {

    List<Timesheet> listTimesheet();

    List<Timesheet> getTimesheet(int timesheetId);

    void addTimesheet(Timesheet timesheet);

    void deleteTimesheet(int timesheetId);

    void updateTimesheet(Timesheet timesheet);

    List<Integer> gettsidByempId(int empId);
    public List<Timesheet> listTimesheetByEmpID(int empID);
}
