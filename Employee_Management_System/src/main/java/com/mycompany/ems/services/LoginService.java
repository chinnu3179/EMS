package com.mycompany.ems.services;

import com.mycompany.ems.models.Login;

import java.util.List;

public interface LoginService {
    void addLogin(Login login);
    public List<Login> checkLogin(String loginusername, String loginpassword);
    public void deleteLogin(int loginId) ;
    public int getLogin(int empId) ;
    public List<Login> listlogin();
    public Login getLoginForLogin(int empId);
    List<Login> updateLogin(int empID, String loginUsername);
    public void updateByLoginId(Login lid);
}
