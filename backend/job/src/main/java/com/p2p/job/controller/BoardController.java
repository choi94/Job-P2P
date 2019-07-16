package com.p2p.job.controller;


import com.p2p.job.repositories.BoardRepository;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
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