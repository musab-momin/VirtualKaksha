package com.vkaksha.controllers;


import com.vkaksha.exceptions.SomethingWentWrong;
import com.vkaksha.models.AppUser;
import com.vkaksha.models.Student;
import com.vkaksha.models.Teacher;
import com.vkaksha.services.RegisterService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class RegisterController
{
    @Autowired
    private RegisterService registerService;

    public void registerAppUser(Teacher element)
    {
        AppUser appUsr = new AppUser(element.getId(), element.getEmail(), element.getPassword(), element.getRole());

        try{
            this.registerService.saveAppUser(appUsr);
        }catch (Exception ae){
            throw ae;
        }
    }
    public void registerAppUser(Student element)
    {
        AppUser appUsr = new AppUser(element.getId(), element.getEmail(), element.getPassword(), element.getRole());
        try{
            this.registerService.saveAppUser(appUsr);
        }catch (Exception ae) {
            throw ae;
        }
    }


    @CrossOrigin(origins = "http://localhost:8080")
    @PostMapping("/registerteacher")
    public ResponseEntity<?> registerTeacher(@RequestBody Teacher teacher)
    {
        try{
            Teacher savedTeacher = this.registerService.saveTeacher(teacher);
            try{
                registerAppUser(teacher);
            }catch (Exception ae){
                return new ResponseEntity<>(ae.getMessage(), HttpStatus.BAD_REQUEST);
            }
            return new ResponseEntity<>(savedTeacher, HttpStatus.CREATED);
        }catch (Exception ae)
        {
            return new ResponseEntity<>(ae.getMessage(), HttpStatus.BAD_REQUEST);
        }
    }

    @PostMapping("/registerstudent")
    public ResponseEntity<?> registerStudent(@RequestBody Student student)
    {
        try{
            Student savedStudent = this.registerService.saveStudent(student);
            try{
                registerAppUser(student);
            }catch (Exception ae){
                return new ResponseEntity<>(ae.getMessage(), HttpStatus.BAD_REQUEST);
            }
            return new ResponseEntity<>(savedStudent, HttpStatus.CREATED);
        }catch (Exception ae){
            return new ResponseEntity<>(ae.getMessage(), HttpStatus.BAD_REQUEST);
        }
    }


}
