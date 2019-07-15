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
    private Long id;

    @Column(name = "title", nullable = false)
    private String title;

    @CreationTimestamp
    @Column(name = "write_date")
    private LocalDateTime writeDate;

    @Column(name = "nickname")
    private String nickname;

    @Column(name = "details")
    private String details;

    @Column(name = "recruit", nullable = false)
    private String recruit;

    @Column(name = "work_day", nullable = false)
    private String workDay;

    @Column(name = "work_time", nullable = false)
    private String workTime;

    @Column(name = "work_age", nullable = false)
    private String workAge;

    @Column(name = "work_category", nullable = false)
    private String workCategory;

    @Column(name = "city_area", nullable = false)
    private String cityArea;

    @Column(name = "city_details", nullable = false)
    private String cityDetails;

    @Column(name = "day_salary", nullable = false)
    private int daySalary;

    @Column(name = "total_salary", nullable = false)
    private int totalSalary;

    @Column(name = "special")
    private String special;

    @Column(name = "attention")
    private String attention;

    @ManyToOne
    @JoinColumn(name = "email")
    private Member member;

    @Column(name = "kakao", nullable = false)
    private String kakao;

    @Column(name = "progress_state", nullable = false)
    private String progressState;
}