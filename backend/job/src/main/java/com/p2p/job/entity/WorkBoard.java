package com.p2p.job.entity;

import java.time.LocalDateTime;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import org.hibernate.annotations.CreationTimestamp;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString(exclude = "member")
@Entity
@Table(name = "work_board")
public class WorkBoard {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "work_id")
    private Long id; //

    @Column(name = "title", nullable = false)
    private String title; //

    @CreationTimestamp
    @Column(name = "write_date")
    private LocalDateTime writeDate; //

    @Column(name = "recruit", nullable = false)
    private String recruit; //

    @Column(name = "work_day", nullable = false)
    private int workDay; //

    @Column(name = "work_time", nullable = false)
    private String workTime; //

    @Column(name = "work_age", nullable = false)
    private String workAge; //

    @Column(name = "city_area", nullable = false)
    private String cityArea; //

    @Column(name = "day_salary", nullable = false)
    private int daySalary; //

    @Column(name = "total_salary", nullable = false)
    private int totalSalary; //

    @Column(name = "kakao", nullable = false)
    private String kakao; //
    
    @Column(name = "progress_state", nullable = false)
    private String progressState; //

    @ManyToOne
    @JoinColumn(name = "member_id")
    private Member member;
}