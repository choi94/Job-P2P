package com.p2p.job.repository;

import com.p2p.job.entity.Attention;

import org.springframework.data.querydsl.QuerydslPredicateExecutor;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AttentionRepository extends CrudRepository<Attention,Long>, QuerydslPredicateExecutor<Attention> {

}