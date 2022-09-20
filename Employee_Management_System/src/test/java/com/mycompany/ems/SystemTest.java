//package com.mycompany.ems;
//
//import com.mycompany.ems.models.Employee;
//import org.assertj.core.api.Assertions;
//import org.junit.Test;
//import org.springframework.http.ResponseEntity;
//import org.springframework.web.client.RestTemplate;
//
//public class SystemTest {
//    @Test
//    public void testCreateReadDelete() {
//        RestTemplate restTemplate = new RestTemplate();
//
//        String url = "http://localhost:8080/employee";
//
//        Employee employee=new Employee("guna",987866754L,"dept","email","address","Admin");
//        ResponseEntity<Employee> entity
//                = restTemplate.postForEntity(url, employee, Employee.class);
//
//        Employee[] employees = restTemplate.getForObject(url, Employee[].class);
//        Assertions.assertThat(employees).extracting(Employee::getEmpName).containsOnly(
//                "guna");
//
//        restTemplate.delete(url + "/" + entity.getBody().getEmpID());
//        Assertions.assertThat(restTemplate.getForObject(url,
//                Employee[].class)).isEmpty(); }
//}
