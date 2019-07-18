package com.p2p.job.repositories;


import com.p2p.job.entities.Board;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;


/**
 * CustomerRepository
 */
@Repository //저장소 Mapper
public interface BoardRepository extends CrudRepository<Board,Long>{
     

}