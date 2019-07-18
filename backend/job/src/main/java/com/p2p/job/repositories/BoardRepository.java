package com.job.web.repositories;

import java.util.List;

import com.job.web.entities.Board;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;


/**
 * CustomerRepository
 */
@Repository //저장소 Mapper
public interface BoardRepository extends CrudRepository<Board,Long>{
     

}