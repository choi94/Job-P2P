package com.p2p.job.controller;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

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
    BooleanBuilder builder;

    @Autowired
    MemberRepository memberRepo;
    
    @GetMapping("/")
    public ResponseEntity<List<?>> findAll() {
            QMember qMember = QMember.member;
            List<Object> result = new ArrayList<>();
            
            query.from(qMember)
            .orderBy(qMember.joinDate.asc())
            .fetch().forEach(arr -> {
                result.add(arr);
            });

        return ResponseEntity.ok(result);
    }

    @GetMapping("/join/{keyword}/{value}")
    public ResponseEntity<List<?>> findByMember(@PathVariable("keyword")String keyword,
                                    @PathVariable("value")String value) {
        QMember qMember = QMember.member;
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
                    .where(builder.and(qMember.id.gt(0)))
                    .fetch()
                    .forEach(arr -> {
                        result.add(arr);
                    });

        return ResponseEntity.ok(result);
    }

    @GetMapping("/search/{keyword}/{value}")
    public ResponseEntity<?> search(@PathVariable("keyword")String keyword,
                                @PathVariable("value")String value) {
        QMember qMember = QMember.member;
        
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

        List<Object> result = new ArrayList<>();
        query.from(qMember)
            .where(builder.and(qMember.id.gt(0)))
            .fetch()
            .forEach(arr -> {
                result.add(result);
            });

        if (result.isEmpty())
            return ResponseEntity.notFound().build();

        return ResponseEntity.ok(result);
    }

    @PostMapping("/login")
    public ResponseEntity<Map<?,?>> login(@RequestBody Member member) {
        QMember qMember = QMember.member;
        Map<String,Object> result = new HashMap<>();

        builder.and(qMember.email.eq(member.getEmail())
            .and(qMember.password.eq(member.getPassword())
            .and(qMember.id.gt(0))
            ));

        memberRepo.findAll(builder).forEach(arr -> {
            result.put("id", arr.getId()); 
        });

        if (result.isEmpty())
            return ResponseEntity.notFound().build();

        return ResponseEntity.ok(result);
    }

    @PostMapping("/")
    public ResponseEntity<String> saveMember(@RequestBody Member member) {
        member.setJoinWay("JOB");
        memberRepo.save(member);
        return ResponseEntity.ok("회원가입 성공");
    }

    @DeleteMapping("/")
    public ResponseEntity<String> deleteById(@PathVariable("email")String email) {
        memberRepo.deleteById(email);
        return ResponseEntity.ok("회원을 탈퇴했습니다.");
    }

    @PutMapping("/")
    public ResponseEntity<String> updateMember(@RequestBody Member member) {
        memberRepo.save(member);
        return ResponseEntity.ok("회원정보를 변경했습니다.");
    }
}