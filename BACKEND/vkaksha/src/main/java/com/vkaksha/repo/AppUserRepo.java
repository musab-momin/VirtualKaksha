package com.vkaksha.repo;

import com.vkaksha.models.AppUser;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AppUserRepo extends JpaRepository<AppUser, Integer> {
}
