package com.p2p.job.controller;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

import javax.persistence.EntityNotFoundException;

import com.p2p.job.repositories.BoardRepository;

import java.util.ArrayList;



import org.modelmapper.ModelMapper;
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


@CrossOrigin(origins = "http://localhost:8080", maxAge = 3600) // 분리해서
@RestController
@RequestMapping("/board")
public class BoardController {
    @Autowired BoardRepository br;

    @RequestMapping("/")
    public String index(){

        return "index";
    }
    @GetMapping("/count")
    public long	count(){
        System.out.println("===count() 진입=====");
        System.out.println(br.count());
        return br.count();
    }

}