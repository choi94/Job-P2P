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
        QProgress qProgress = QProgress.progress;

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



}
