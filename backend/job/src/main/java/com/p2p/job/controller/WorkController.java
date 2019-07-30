package com.p2p.job.controller;

import javax.transaction.Transactional;

import com.p2p.job.entity.Member;
import com.p2p.job.entity.QWorkBoard;
import com.p2p.job.entity.WorkBoard;
import com.p2p.job.repository.WorkRepository;
import com.querydsl.core.BooleanBuilder;
import com.querydsl.jpa.impl.JPAQueryFactory;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;


@Transactional
@CrossOrigin(origins = "*", maxAge = 3600)
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

        BooleanBuilder builder = new BooleanBuilder();
        QWorkBoard qWorkBoard = QWorkBoard.workBoard;

        switch (keyword) {
            case "all":
//                builder.and(qWorkBoard..contains(value));
                break;

            case "title":
//                builder.and(qMember.nickname.contains(value));
                break;

            case "nickname":
//                builder.and(qMember.name.contains(value));
                break;

            default:
                break;
        }

        List<Object> result = new ArrayList<>();

//        query.from(qMember)
//                .where(builder.and(qMember.id.gt(0)))
//                .fetch()
//                .forEach(arr -> {
//                    result.add(result);
//                });

        if (result.isEmpty())
            return ResponseEntity.notFound().build();

        return ResponseEntity.ok(result);
    }

    @PostMapping("/write/{id}")
    public ResponseEntity saveWorkBoard(@PathVariable("id") Long member_id,
                                        @RequestBody WorkBoard workBoard) {
        Member member = new Member();
        member.setId(member_id);
        workBoard.setMember(member);
        workRepo.save(workBoard);
        return ResponseEntity.ok().build();
    }

    @GetMapping("/board/list/{id}")
    public ResponseEntity selectBoard(@PathVariable("id")int id) {
        QWorkBoard qWorkBoard = QWorkBoard.workBoard;
        BooleanBuilder builder = new BooleanBuilder();

        Pageable page = PageRequest.of(id, 6, Sort.Direction.DESC, "id");
        List<Object> board_list = new ArrayList<>();
        List<Object> member_list = new ArrayList<>();
        Map<String, List<Object>> result = new HashMap<>();

        workRepo.findByIdGreaterThan(0L, page).forEach(arr -> {
            board_list.add(arr);
            member_list.add(arr.getMember());
        });

        result.put("board", board_list);
        result.put("member", member_list);

        return ResponseEntity.ok(result);
    }

    @GetMapping("/board/registr/{id}")
    public ResponseEntity registrBoard(@PathVariable("id")Long id) {
        QWorkBoard qWorkBoard = QWorkBoard.workBoard;
        List<Object> list = new ArrayList<>();

        query.from(qWorkBoard)
                .where(qWorkBoard.member.id.eq(id))
                .fetch()
                .forEach(arr -> list.add(arr));

        return ResponseEntity.ok(list);
    }

//    @GetMapping("/board/progress/{pro_id}")
//    public ResponseEntity progressSave(@PathVariable("id")Long id) {
//        QWorkBoard qWorkBoard = QWorkBoard.workBoard;
//        List<Object> list = new ArrayList<>();
//
//        query.from(qWorkBoard)
//                .where(qWorkBoard.member.id.eq(id))
//                .fetch()
//                .forEach(arr -> list.add(arr));
//
//        return null;
//    }

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