package com.vkaksha.config;

import com.vkaksha.exceptions.EmailNotAvailable;
import com.vkaksha.models.AppUser;
import com.vkaksha.models.Teacher;
import com.vkaksha.repo.AppUserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;

public class UserDetailsServiceImpl implements UserDetailsService
{
    @Autowired
    private AppUserRepo appUserRepo;
    private final static String USER_NOT_FOUND_MSG = "User with email %s not found";

    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException
    {
        AppUser appUser = appUserRepo.findByEmail(email);
        if (appUser==null)
            throw new UsernameNotFoundException(String.format(USER_NOT_FOUND_MSG, email));
        return new CustomUserDetails(appUser);
    }
}
