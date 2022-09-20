package com.mycompany.ems.models;

import com.mycompany.ems.models.Employee;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Table(name = "login")
@NoArgsConstructor
@Data
public class Login {


    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "loginid")
    private int loginid;

    @Column(name = "empid")
    int empID;

    @Column(name = "username")
    String loginUsername;

    @Column(name = "password")
    String loginPassword;

    @Column(name = "loginstatus")
    String loginStatus;

    @OneToOne
    @PrimaryKeyJoinColumn
    private Employee employee;

    public Login(String loginUsername, String loginPassword, String loginStatus) {
        this.loginUsername = loginUsername;
        this.loginPassword = loginPassword;
        this.loginStatus = loginStatus;
    }
}
