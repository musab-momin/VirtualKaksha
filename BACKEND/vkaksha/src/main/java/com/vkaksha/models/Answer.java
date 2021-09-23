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
public class Answer
{
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;
    private String questionName;
    private String answer;
    @ManyToOne
    private Student student;
    @ManyToOne
    private Paper paper;

    public Answer() {
    }


}
