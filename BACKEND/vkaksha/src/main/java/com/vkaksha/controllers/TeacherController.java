package com.vkaksha.controllers;


import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class TeacherController
{
    @GetMapping("/Teacher/Home")
    public String home()
    {
        return "This is home page...";
    }


}
