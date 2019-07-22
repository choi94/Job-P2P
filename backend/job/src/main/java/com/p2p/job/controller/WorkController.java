package com.p2p.job.controller;

import javax.transaction.Transactional;

import com.p2p.job.entity.Member;
import com.p2p.job.entity.WorkBoard;
import com.p2p.job.repository.WorkRepository;
import com.querydsl.core.BooleanBuilder;
import com.querydsl.jpa.impl.JPAQueryFactory;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

// 일자리 관련 

@Transactional
@CrossOrigin(origins = "http://localhost:3000", maxAge = 3600)
@RestController
@RequestMapping("/work")
public class WorkController {

    @Autowired
    BooleanBuilder builder;

    @Autowired
    JPAQueryFactory query;

    @Autowired
    WorkRepository workRepo;

    @PostMapping("/details/{id}")
    public void saveWorkBoard(@PathVariable("id") Long member_id,
                            @RequestBody WorkBoard workBoard) {
        Member member = new Member();
        member.setId(member_id);
        workBoard.setMember(member);
        workRepo.save(workBoard);
    }

    @DeleteMapping("/")
    public void deleteWorkBoard(@PathVariable("num")Long num) {
        workRepo.deleteById(num);
    }

    @PutMapping("/")
    public void updateWorkBoard(@RequestBody WorkBoard workBoard) {
        
    }


    

    
}