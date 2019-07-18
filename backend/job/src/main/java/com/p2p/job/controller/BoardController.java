package com.job.web.controller;

import com.job.web.repositories.BoardRepository;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

import javax.persistence.EntityNotFoundException;

import java.util.ArrayList;

import com.job.web.BoardDTO.BoardDTO;
import com.job.web.entities.Board;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@CrossOrigin(origins = "http://localhost:3000", maxAge = 3600) // 분리해서
@RestController
@RequestMapping("/board")
public class BoardController {

    @Autowired BoardRepository br;
    @RequestMapping("/")
    public String index(){
        return "index";
    }
     //리스트 뿌리기

     @GetMapping("")
     public List<Board> findAll() {
         Iterable<Board> entities = br.findAll();
         List<Board> list = new ArrayList<>();
         for (Board b : entities) { 
             list.add(b);
         }
         System.out.println(entities);
         return list;
     }

}