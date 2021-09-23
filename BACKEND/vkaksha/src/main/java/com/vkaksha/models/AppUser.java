package com.vkaksha.models;


import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
@AllArgsConstructor
@Getter
@Setter
@ToString
public class AppUser
{
    @Id
    @GeneratedValue
    private int id;
    private String email;
    private String password;
    private String role;

    public AppUser() {
    }
}
