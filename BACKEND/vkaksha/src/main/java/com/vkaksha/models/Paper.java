package com.vkaksha.models;


import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.*;
import java.time.LocalTime;
import java.util.List;

@Entity
@AllArgsConstructor
@Getter
@Setter
@ToString
public class Paper
{
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;
    private String name;
    private LocalTime time;
    @ManyToOne
    private Teacher teacher;
    @OneToMany(cascade = CascadeType.ALL, mappedBy = "paper", orphanRemoval = true)
    private List<Question> questionList;

    public Paper() {
    }
}
