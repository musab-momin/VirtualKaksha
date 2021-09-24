package com.vkaksha.services;


import com.vkaksha.exceptions.EmailNotAvailable;
import com.vkaksha.exceptions.SomethingWentWrong;
import com.vkaksha.models.AppUser;
import com.vkaksha.models.Student;
import com.vkaksha.models.Teacher;
import com.vkaksha.repo.AppUserRepo;
import com.vkaksha.repo.StudentRepo;
import com.vkaksha.repo.TeacherRepo;
import lombok.AllArgsConstructor;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import java.util.Optional;

@Service
@AllArgsConstructor
public class RegisterService
{
    private TeacherRepo teacherRepo;
    private StudentRepo studentRepo;
    private AppUserRepo appUserRepo;
    private BCryptPasswordEncoder bCryptPasswordEncoder;


    public Teacher saveTeacher(Teacher teacher)
    {
        Teacher regTeacher=null;
        if (teacherRepo.existsTeacherByEmail(teacher.getEmail())) {
            System.out.println("Email exists");
            throw new EmailNotAvailable("Email already taken...");
        }
        try{
            teacher.setPassword(bCryptPasswordEncoder.encode(teacher.getPassword()));
            regTeacher = this.teacherRepo.save(teacher);
        }catch (Exception ae){
            throw new SomethingWentWrong("Something went wrong...");
        }
        return regTeacher;
    }
    public Student saveStudent(Student student)
    {
        Student regStudent = null;
        if (studentRepo.existsStudentByEmail(student.getEmail()))
            throw new EmailNotAvailable("Email already taken...");
        try{
            student.setPassword(bCryptPasswordEncoder.encode(student.getPassword()));
            regStudent = this.studentRepo.save(student);
        }catch (Exception ae){
            throw new SomethingWentWrong("Something went wrong...");
        }
        return regStudent;

    }
    public void saveAppUser(AppUser appUser)
    {
        try{
             this.appUserRepo.save(appUser);
        }catch (Exception ae){
            throw new SomethingWentWrong("Something went wrong...");
        }
    }

}
