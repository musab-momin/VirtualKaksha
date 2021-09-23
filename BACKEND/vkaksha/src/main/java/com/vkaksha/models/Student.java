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
public class Student
{
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;
    private String name;
    private String email;
    private String password;
    private String role;
    private String classCode;
    @ManyToOne
    private Teacher teacher;
    @OneToMany(cascade = CascadeType.ALL, mappedBy = "student", orphanRemoval = true)
    private List<Answer> answersList;

    public Student() {
    }
}
