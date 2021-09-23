package com.vkaksha.models;


import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.*;
import java.util.List;

@Entity
@AllArgsConstructor
@Getter
@Setter
@ToString
public class Teacher
{
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;
    private String name;
    private String email;
    private String password;
    private String role;
    @OneToOne(cascade = CascadeType.ALL, mappedBy = "teacher", orphanRemoval = true)
    private ClassRoom classRoom;
    @OneToMany(cascade = CascadeType.ALL, mappedBy = "teacher", orphanRemoval = true)
    private List<Student> studentList;
    @OneToMany(cascade = CascadeType.ALL, mappedBy = "teacher", orphanRemoval = true)
    private List<Paper> paperList;


    public Teacher() {
    }
}
