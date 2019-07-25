package com.p2p.job.controller;

import javax.transaction.Transactional;

import com.p2p.job.entity.Member;
import com.p2p.job.entity.WorkBoard;
import com.p2p.job.repository.WorkRepository;
import com.querydsl.core.BooleanBuilder;
import com.querydsl.jpa.impl.JPAQueryFactory;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


@Transactional
@CrossOrigin(origins = "http://localhost:3000", maxAge = 3600)
@RestController
@RequestMapping("/work")
public class WorkController {

    @Autowired
    JPAQueryFactory query;

    @Autowired
    WorkRepository workRepo;

    @GetMapping("/search/{keyword}/{value}")
    public ResponseEntity search(@PathVariable("keyword")String keyword,
                                 @PathVariable("value")String value) {




        return null;
    }

    @PostMapping("/details/{id}")
    public ResponseEntity saveWorkBoard(@PathVariable("id") Long member_id,
                                        @RequestBody WorkBoard workBoard) {
        Member member = new Member();
        member.setId(member_id);
        workBoard.setMember(member);
        workRepo.save(workBoard);
        return ResponseEntity.ok().build();
    }

    @DeleteMapping("/")
    public ResponseEntity deleteWorkBoard(@PathVariable("num")Long num) {
        workRepo.deleteById(num);
        return ResponseEntity.ok().build();
    }

    @PutMapping("/")
    public ResponseEntity updateWorkBoard(@RequestBody WorkBoard workBoard) {

        return ResponseEntity.ok().build();
    }



    

    
}