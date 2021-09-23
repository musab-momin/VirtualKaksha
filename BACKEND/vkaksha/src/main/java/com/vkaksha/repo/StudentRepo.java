package com.vkaksha.repo;

import com.vkaksha.models.Student;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface StudentRepo extends JpaRepository<Student, Integer>
{

    public boolean existsStudentByEmail(String email);
    public Optional<Student> findByEmail(String email);
}
