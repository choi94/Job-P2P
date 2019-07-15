package com.p2p.job.controller;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.function.Supplier;

import com.p2p.job.entity.QMember;
import com.p2p.job.repository.MemberRepository;
import com.querydsl.jpa.impl.JPAQueryFactory;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

// 유저 관련

@CrossOrigin(origins = "http://localhost:8000", maxAge = 3600)
@RestController
@RequestMapping("/account")
public class MemberController {

    @Autowired
    JPAQueryFactory query;

    @Autowired
    MemberRepository memberRepo;
    
    @GetMapping("/")
    public List<Object> findAll() {

        Supplier<List<Object>> findAll = () -> {
            QMember qMember = QMember.member;
            List<Object> result = new ArrayList<>();

            query.from(qMember)
            .orderBy(qMember.joinDate.asc())
            .fetch().forEach(arr -> {
                result.add(arr);
            });
            return result;
        };

        return findAll.get();
    }

    @GetMapping("/search/{key}/{value}")
    public HashMap<String, Object> findByMember(@PathVariable("key")String key,
                                                @PathVariable("value")String value) {

        switch (key) {
            case "email" :
                
                break;
            
            case "nickname" :

                break;

            case "name" :

                break;

            case "gender" :

                break;

            case "admin" :

                break;

            default:
                break;
        }

        return null;
    }
}