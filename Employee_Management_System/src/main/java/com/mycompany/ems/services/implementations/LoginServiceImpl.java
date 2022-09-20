package com.mycompany.ems.services.implementations;

import com.mycompany.ems.models.Login;
import com.mycompany.ems.repositories.LoginRepository;
import com.mycompany.ems.services.LoginService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class LoginServiceImpl implements LoginService {
    @Autowired
    LoginRepository loginRepository;
    @Override
    public void addLogin(Login login) {
        loginRepository.save(login);
    }

    @Override
    public void deleteLogin(int loginId) {
        loginRepository.deleteById(loginId);
    }

    @Override
    public int getLogin(int empId) {
        return loginRepository.findByEmpID(empId).get(0).getLoginid();
    }

    @Override
    public List<Login> checkLogin(String loginusername, String loginpassword) {
        return loginRepository.findByLoginUsernameAndLoginPassword(loginusername, loginpassword);
    }
    @Override
    public List<Login> listlogin() {return (List<Login>)loginRepository.findAll();}

    @Override
    public Login getLoginForLogin(int empId) {
        return loginRepository.findByEmpID(empId).get(0);
    }
    @Override
    public List<Login> updateLogin(int empID,String loginUsername){
        return loginRepository.getLoginByempId(empID, loginUsername);
    }

    @Override
    public void updateByLoginId(Login lid){
        loginRepository.save(lid);
    }


}
