package com.p2p.job;

import javax.transaction.Transactional;

import com.p2p.job.entity.Member;
import com.p2p.job.entity.WorkBoard;
import com.p2p.job.repository.WorkRepository;
import com.querydsl.jpa.impl.JPAQueryFactory;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.annotation.Commit;
import org.springframework.test.context.junit4.SpringRunner;

@RunWith(SpringRunner.class)
@SpringBootTest
@Transactional
@Commit
public class JobApplicationTests {

	@Autowired
	JPAQueryFactory query;

	@Autowired
	WorkRepository workRepo;

	@Test
	public void contextLoads() {
		WorkBoard workBoard = new WorkBoard();
		Member member = new Member();

        member.setId(1L);

        workBoard.setTitle("제목 : ");
        workBoard.setDetails("내용 : ");
        workBoard.setWorkDay(1);
        workBoard.setWorkTime("09:00 ~ 18:00");
        workBoard.setCityArea("서울 관악구 봉천동");
        workBoard.setCityDetails("문정빌딩 203호");
        workBoard.setWorkAge("20대 ~ 40대");
        workBoard.setWorkCategory("집안일");
        workBoard.setDaySalary(150000);
        workBoard.setTotalSalary(150000 * 1);
        workBoard.setSpecial("힘 쌔신분");
        workBoard.setKakao("ehdgns94@KAKAO.com");
        workBoard.setRecruit("2019_07_10 ~ 2019_07_10");
        workBoard.setProgressState("모집중");
        workBoard.setMember(member);



        workRepo.save(workBoard);


	}

}
