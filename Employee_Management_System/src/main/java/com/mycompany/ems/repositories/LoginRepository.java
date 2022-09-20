package com.mycompany.ems.repositories;

import com.mycompany.ems.models.Login;
import com.mycompany.ems.models.Timesheet;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface LoginRepository extends CrudRepository<Login,Integer> {
    public List<Login> findByLoginUsernameAndLoginPassword(String loginusername,String loginpassword);
    public List<Login> findByEmpID(int empID);
    @Query("SELECT s FROM Login s WHERE s.empID=?1 AND s.loginUsername=?2")
    public List<Login> getLoginByempId(int empId,String loginUsername);

}
