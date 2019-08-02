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

        List<WorkBoard> board_list = new ArrayList<>();
        List<Progress> pro_list = new ArrayList<>();

        query.selectFrom(qVolunteer)
                .where(qVolunteer.member.id.eq(1L))
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

        return ResponseEntity.ok(board_list);
    }



}
