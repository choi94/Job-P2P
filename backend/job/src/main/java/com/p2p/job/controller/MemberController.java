package com.p2p.job.controller;

import java.util.ArrayList;
import java.util.List;
import java.util.function.Supplier;

import javax.transaction.Transactional;

import com.p2p.job.entity.Member;
import com.p2p.job.entity.QMember;
import com.p2p.job.repository.MemberRepository;
import com.querydsl.core.BooleanBuilder;
import com.querydsl.jpa.impl.JPAQueryFactory;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

// 유저 관련

@CrossOrigin(origins = "http://localhost:3000", maxAge = 3600)
@Transactional
@RestController
@RequestMapping("/member")
public class MemberController {

    @Autowired
    JPAQueryFactory query;

    @Autowired
    MemberRepository memberRepo;
    
    @GetMapping("/")
    public List<Object> findAll() {

            QMember qMember = QMember.member;
            List<Object> result = new ArrayList<>();
            
            query.from(qMember)
            .orderBy(qMember.joinDate.asc())
            .fetch().forEach(arr -> {
                result.add(arr);
            });

        return result;
    }

    @GetMapping("/search/{key}/{value}")
    public List<Object> findByMember(@PathVariable("key")String key,
                                    @PathVariable("value")String value) {
        
            BooleanBuilder builder = new BooleanBuilder();
            QMember qMember = QMember.member;
            
            List<Object> result = new ArrayList<>();

            switch (key) {
                case "email" :
                    builder.and(qMember.email.contains(value));
                    break;
                
                case "nickname" :
                    builder.and(qMember.nickname.contains(value));
                    break;

                case "name" :
                    builder.and(qMember.name.contains(value));
                    break;

                case "gender" :
                    builder.and(qMember.gender.contains(value));
                    break;

                case "admin" :
                    builder.and(qMember.admin.like(value));
                    break;
            }

            query.from(qMember)
                        .where(builder)
                        .fetch()
                        .forEach(arr -> {
                            result.add(arr);
                        });


        return result;
    }

    @PostMapping("/login")
    public String login(@RequestBody Member member) {
        QMember qMember = QMember.member;

                    

        return null;
    }

    @PostMapping("/")
    public String saveMember(@RequestBody Member member) {
        System.out.println(member.toString());
        member.setJoinWay("JOB");
        memberRepo.save(member);
        return "가입에 완료 되었습니다.";
    }

    @DeleteMapping("/")
    public String deleteById(@PathVariable("email")String email) {
        memberRepo.deleteById(email);
        return "삭제 완료";
    }

    @PutMapping("/")
    public String updateMember(@RequestBody Member member) {
        memberRepo.save(member);
        return "업데이트 완료";
    }
}