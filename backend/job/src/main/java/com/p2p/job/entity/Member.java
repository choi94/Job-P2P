package com.p2p.job.entity;

import java.time.LocalDateTime;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Index;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.persistence.UniqueConstraint;

import org.hibernate.annotations.CreationTimestamp;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
@Entity
@Table(name = "member", indexes = {@Index(columnList = "join_date", name = "idx_join_data"), @Index(columnList = "email", name = "idx_email")},
        uniqueConstraints = {@UniqueConstraint(columnNames = {"nickname"})})
public class Member {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "member_id")
    private Long id;

    @Column(name = "email", nullable = false)
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

    @Column(name = "gender", nullable = false, columnDefinition = "char(2)")
    private String gender;

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

    @OneToMany(mappedBy = "member", cascade = CascadeType.ALL)
    private List<Volunteer> volunteer;

    @OneToMany(mappedBy = "member", cascade = CascadeType.ALL)
    private List<WorkBoard> workBoard;
}