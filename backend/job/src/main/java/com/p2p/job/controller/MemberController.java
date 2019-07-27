package com.p2p.job.controller;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.persistence.EntityManager;
import javax.transaction.Transactional;

import com.p2p.job.entity.Member;
import com.p2p.job.entity.QMember;
import com.p2p.job.repository.MemberRepository;
import com.querydsl.core.BooleanBuilder;
import com.querydsl.jpa.impl.JPAQueryFactory;

import com.querydsl.jpa.impl.JPAUpdateClause;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "http://localhost:3000", maxAge = 3600)
@Transactional
@RestController
@RequestMapping("/member")
public class MemberController {
    @Autowired
    JPAQueryFactory query;

    @Autowired
    EntityManager entityManager;

    @Autowired
    MemberRepository memberRepo;

    @GetMapping("/")
    public ResponseEntity findAll() {
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
    public ResponseEntity findByMember(@PathVariable("keyword")String keyword,
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
                    .where(builder.and(qMember.id.gt(0)))
                    .fetch()
                    .forEach(arr -> {
                        result.add(arr);
                    });

        if (result.size() != 0)
            return ResponseEntity.notFound().build();

        return ResponseEntity.ok().build();
    }

    @GetMapping("/search/{keyword}/{value}")
    public ResponseEntity search(@PathVariable("keyword")String keyword,
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
                builder.and(qMember.gender.eq(value));
                break;

            case "admin":
                builder.and(qMember.admin.eq(Integer.parseInt(value)));
                break;

            case "point":
                builder.and(qMember.point.gt(Double.parseDouble(value)));
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
    public ResponseEntity login(@RequestBody Member member) {

        System.out.println(member.toString());
        QMember qMember = QMember.member;
        Map<String,Object> result = new HashMap<>();
        BooleanBuilder builder = new BooleanBuilder();

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

    @GetMapping("/my/{id}")
    public ResponseEntity mypage(@PathVariable("id")Long id) {
        System.out.println("들어옴");
        QMember qMember = QMember.member;
        BooleanBuilder builder = new BooleanBuilder();
        builder.and(qMember.id.eq(id));

        Map<String,Object> result = new HashMap<>();

        memberRepo.findAll(builder).forEach(arr -> {
            result.put("member", arr);
            result.put("volunteer", arr.getVolunteer());
        });


        return ResponseEntity.ok(result);
    }

    @PostMapping("/")
    public ResponseEntity saveMember(@RequestBody Member member) {
        member.setJoinWay("JOB");
        memberRepo.save(member);
        return ResponseEntity.ok("회원가입 성공");
    }

    @DeleteMapping("/{id}")
    public ResponseEntity deleteById(@PathVariable("id")Long id) {
        memberRepo.deleteById(id);
        return ResponseEntity.ok("회원을 탈퇴했습니다.");
    }

    @PatchMapping("/")
    public ResponseEntity updateMember(@RequestBody Member member) {
        System.out.println(member.toString());
		QMember qMember = QMember.member;
		new JPAUpdateClause(entityManager, qMember).where(qMember.id.eq(member.getId()))
				.set(qMember.nickname, member.getNickname())
                .set(qMember.password, member.getPassword())
                .set(qMember.phone, member.getPhone())
				.execute();

        return ResponseEntity.ok("회원정보를 변경했습니다.");
    }
}