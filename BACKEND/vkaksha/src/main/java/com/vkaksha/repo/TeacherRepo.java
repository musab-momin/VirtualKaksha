package com.vkaksha.repo;

import com.vkaksha.models.Teacher;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.Optional;

public interface TeacherRepo extends JpaRepository<Teacher, Integer>
{
    public boolean existsTeacherByEmail(String email);
    public Optional<Teacher> findByEmail(String email);
}
