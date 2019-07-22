package com.p2p.job.controller;

import java.util.ArrayList;
import java.util.List;

import javax.transaction.Transactional;

import com.p2p.job.entity.Member;
import com.p2p.job.entity.QMember;
import com.p2p.job.repository.MemberRepository;
import com.querydsl.core.BooleanBuilder;
import com.querydsl.jpa.impl.JPAQueryFactory;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

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

    @GetMapping("/join/{keyword}/{value}")
    public List<Object> findByMember(@PathVariable("keyword")String keyword,
                                    @PathVariable("value")String value) {
        
            QMember qMember = QMember.member;
            BooleanBuilder builder = new BooleanBuilder();
            
            List<Object> result = new ArrayList<>();

            switch (keyword) {
                case "email" :
                    builder.and(qMember.email.eq(value));
                    break;
                
                case "nickname" :
                    builder.and(qMember.nickname.eq(value));
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

    @GetMapping("/search/{keyword}/{value}")
    public List<Object> search(@PathVariable("keyword")String keyword,
                                @PathVariable("value")String value) {
        
        QMember qMember = QMember.member;
        BooleanBuilder builder = new BooleanBuilder();
        
        switch (keyword) {
            case "email":
                builder.and(qMember.email.contains(value));
                break;

            case "nickname":
                builder.and(qMember.nickname.contains(value));
                break;

            case "name":
                builder.and(qMember.name.contains(value));
                break;

            case "gender":
                builder.and(qMember.email.eq(value));
                break;

            case "admin":
                builder.and(qMember.email.eq(value));
                break;

            case "point":
                builder.and(qMember.email.gt(value));
                break;

            default:
                break;
        }

        // List<Object> result = query.from(qMember)
        //                         .where(builder)
        //                         .fetch();

        List<Object> result = new ArrayList<>();
        query.from(qMember)
            .where(builder)
            .fetch()
            .forEach(arr -> {
                result.add(result);
            });

        return result;
    }

    @PostMapping("/login")
    public String login(@RequestBody Member member) {
        QMember qMember = QMember.member;
        int result = query.from(qMember)
            .where(qMember.email.eq(member.getEmail()), qMember.password.eq(member.getPassword()))
            .fetch()
            .size();

        return result == 0 ? "존재하지 않는 아이디거나, 비밀번호가 틀렸습니다." : "환영합니다.";
    }

    @PostMapping("/")
    public ResponseEntity saveMember(@RequestBody Member member) {
        System.out.println(member.toString());
        member.setJoinWay("JOB");
        memberRepo.save(member);

        return null;
    }

    @DeleteMapping("/")
    public void deleteById(@PathVariable("email")String email) {
        memberRepo.deleteById(email);
    }

    @PutMapping("/")
    public void updateMember(@RequestBody Member member) {
        memberRepo.save(member);
    }
}