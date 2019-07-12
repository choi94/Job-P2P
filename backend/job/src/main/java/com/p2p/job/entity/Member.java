package com.p2p.job.entity;

import java.io.Serializable;
import java.time.LocalDateTime;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

import org.hibernate.annotations.CreationTimestamp;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
@Entity
@Table(name = "member")
public class Member implements Serializable{

    private static final long serialVersionUID = 1L;

    @Id
    @Column(name = "email")
    private String email;

    @Column(name = "nickname", nullable = false)
    private String nickname;

    @Column(name = "password", nullable = false)
    private String password;

    @Column(name = "phone", nullable = false)
    private String phone;

    @Column(name = "name" ,nullable = false)
    private String name;

    @Column(name = "ssn", nullable = false)
    private String ssn;

    @Column(name = "gender", nullable = false, columnDefinition = "boolean")
    private int gender;

    @Column(name = "join_date", nullable = false)
    @CreationTimestamp
    private LocalDateTime joinDate;

    @Column(name = "join_way", nullable = false)
    private String joinWay;

    @Column(name = "withdrawal")
    private LocalDateTime withdrawal;

    @Column(name = "admin", nullable = false, columnDefinition = "boolean default 0")
    private int admin;

    @Column(name = "volunteer_score", nullable = false, columnDefinition = "Decimal(1,1) default '0' ")
    private double volunteerScore;

    @Column(name = "request_score", nullable = false, columnDefinition = "Decimal(1,1) default '0' ")
    private double requestScore;
}