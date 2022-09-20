package com.mycompany.ems.models;

import lombok.*;

import javax.persistence.*;
import javax.validation.constraints.NotEmpty;
import java.util.*;

@Entity
@Data
@NoArgsConstructor
@Table(name = "employee")
public class Employee {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int empID;

    @Column(name = "empname")
    private String empName;

    @Column(name = "empcontact")
    private long empContact;

    @Column(name = "empdepartment")
    private String empDepartment;

    @Column(name = "empemail")
    private String empEmail;

    @Column(name = "empaddress")
    private String empAddress;

    @Column(name = "emprole")
    private String empRole;



    public Employee(String empName, long empContact, String empDepartment, String empEmail, String empAddress, String empRole) {
        this.empName = empName;
        this.empContact = empContact;
        this.empDepartment = empDepartment;
        this.empEmail = empEmail;
        this.empAddress = empAddress;
        this.empRole = empRole;
    }

}