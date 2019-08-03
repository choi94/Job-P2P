package com.p2p.job.controller;

import com.p2p.job.entity.*;
import com.p2p.job.repository.ProgressRepository;
import com.querydsl.jpa.impl.JPAQueryFactory;
import com.querydsl.jpa.impl.JPAUpdateClause;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.persistence.EntityManager;
import javax.transaction.Transactional;
import java.util.ArrayList;
import java.util.Comparator;
import java.util.HashMap;
import java.util.List;

@Transactional
@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/progress")
public class ProgressController {

    @Autowired
    JPAQueryFactory query;

    @Autowired
    EntityManager entityManager;

    @Autowired
    ProgressRepository proRepo;

    @PostMapping("/{volId}/{boardId}")
    public ResponseEntity proSave(@PathVariable("volId")Long volId,
                                  @PathVariable("boardId")Long boardId) {
        Volunteer volunteer = new Volunteer();
        WorkBoard workBoard = new WorkBoard();
        Progress progress = new Progress();

        QWorkBoard qWorkBoard = QWorkBoard.workBoard;

        volunteer.setId(volId);
        workBoard.setId(boardId);

        progress.setVolunteer(volunteer);
        progress.setWorkBoard(workBoard);

        proRepo.save(progress);

        new JPAUpdateClause(entityManager, qWorkBoard).where(qWorkBoard.id.eq(boardId))
                .set(qWorkBoard.progressState, "진행중")
                .execute();

        return ResponseEntity.ok("거래 진행");
    }

    @GetMapping("/my/list/{id}")
    public ResponseEntity progressSave(@PathVariable("id")Long id) {
        QVolunteer qVolunteer = QVolunteer.volunteer;
        QProgress qProgress = QProgress.progress;
        QWorkBoard qWorkBoard = QWorkBoard.workBoard;

        HashMap<String, Object> result = new HashMap<>();

        List<WorkBoard> board_list = new ArrayList<>();
        List<WorkBoard> board_req_list = new ArrayList<>();

        List<Progress> pro_list = new ArrayList<>();

        query.selectFrom(qVolunteer)
                .where(qVolunteer.member.id.eq(id))
                .fetch()
                .forEach(vol -> {
                    query.selectFrom(qProgress)
                            .where(qProgress.volunteer.id.eq(vol.getId()))
                            .fetch()
                            .forEach(arr -> pro_list.add(arr));
                });

        pro_list.stream()
                .sorted(Comparator.reverseOrder())
                .forEach(b -> {
                    board_list.add(b.getWorkBoard());
                });


        query.selectFrom(qWorkBoard)
                .where(qWorkBoard.member.id.eq(id))
                .orderBy(qWorkBoard.id.desc())
                .fetch()
                .stream()
                .filter(b -> b.getProgressState().contains("진행중"))
                .forEach(req -> board_req_list.add(req));

        result.put("volunteer", board_list);
        result.put("request", board_req_list);

        return ResponseEntity.ok(result);
    }



}
