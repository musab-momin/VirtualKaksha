package com.vkaksha.models;


import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.*;

@Entity
@AllArgsConstructor
@Getter
@Setter
@ToString
public class ClassRoom
{
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;
    private String classCode;
    @OneToOne
    private Teacher teacher;

    public ClassRoom() {
    }
}
