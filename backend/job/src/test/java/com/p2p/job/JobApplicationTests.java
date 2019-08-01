package com.p2p.job;

import javax.persistence.EntityManager;
import javax.transaction.Transactional;

import com.p2p.job.entity.*;
import com.p2p.job.repository.MemberRepository;
import com.p2p.job.repository.VolunteerRepository;
import com.p2p.job.repository.WorkRepository;
import com.querydsl.core.BooleanBuilder;
import com.querydsl.jpa.impl.JPAQueryFactory;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.http.ResponseEntity;
import org.springframework.test.annotation.Commit;
import org.springframework.test.context.junit4.SpringRunner;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;


@RunWith(SpringRunner.class)
@SpringBootTest
@Transactional
@Commit
public class JobApplicationTests {

	@Autowired
	JPAQueryFactory query;

	@Autowired
	WorkRepository workRepo;

	@Autowired
	MemberRepository memberRepo;

	@Autowired
	EntityManager entityManager;

	@Autowired
	VolunteerRepository volRepo;

	@Test
	public void contextLoads() {

		// 내가 쓴글의 지원자 정보

//		board.memberid = boardId -> vol.List -> memberId -> memberList
		QVolunteer qVolunteer = QVolunteer.volunteer;
		QWorkBoard qWorkBoard = QWorkBoard.workBoard;
		QMember qMember = QMember.member;

		List<WorkBoard> board_list = new ArrayList<>();
		List<Member> vol_member_list = new ArrayList<>();

		HashMap<String, Object> values = new HashMap<>();
		List<HashMap<String, Object>> result = new ArrayList<>();

		query.selectFrom(qWorkBoard)
				.where(qWorkBoard.member.id.eq(1L))
				.orderBy(qWorkBoard.id.desc())
				.fetch()
				.forEach(board -> { // 이 리스트를 해쉬맵에 담고 해쉬맵에 값 추가
					board_list.add(board);
					values.put("board", board_list);

					query.selectFrom(qVolunteer) // 여러개
							.where(qVolunteer.workBoard.id.eq(board.getId()))
							.fetch()
							.forEach(vol -> {
								query.selectFrom(qMember)
										.where(qMember.id.eq(vol.getMember().getId()))
										.fetch()
										.forEach(mem -> {
											vol_member_list.add(mem);
										});
							});

					values.put("member", vol_member_list);
					result.add(values);

					board_list.clear();
					vol_member_list.clear();
				});


//		for (int i = 0; i < board_list.size(); i++) {
//			values.put("board", board_list.get(i));
//
//			query.selectFrom(qMember)
//					.where(qMember.id.eq(vol_list.get(i).getId()))
//					.fetch()
//					.forEach(mem -> {
//						vol_member_list.add(mem);
//
//					});
//
//		}









//        QWorkBoard qWorkBoard = QWorkBoard.workBoard;
//        BooleanBuilder builder = new BooleanBuilder();
//
//        Pageable page = PageRequest.of(0, 6, Sort.Direction.DESC, "id");
//
//        Map<String, Object> result = new HashMap<>();
//
//        workRepo.findByIdGreaterThan(0L, page).forEach(arr -> {
//            result.put("board", arr);
//            result.put("member", arr.getMember());
//        });

//        query.from(qWorkBoard)
//                .where(qWorkBoard.id.gt(0))
//                .fetch()
//                .forEach(arr -> list.add(arr));
//
//        System.out.println(list.toString());


//		List<Object> result = new ArrayList<>();

//		query.from(qMember)
//				.where(qMember.id.eq(1L))
//				.fetch()
//				.forEach(arr -> {
//					System.out.println(arr.);
//				});




	}

}
