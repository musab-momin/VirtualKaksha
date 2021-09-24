package com.vkaksha.repo;

import com.vkaksha.models.AppUser;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface AppUserRepo extends JpaRepository<AppUser, Integer>
{
    public AppUser findByEmail(String email);
}
