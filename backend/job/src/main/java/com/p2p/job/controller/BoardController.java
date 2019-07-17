package com.p2p.job.controller;



import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@CrossOrigin(origins = "http://localhost:3000", maxAge = 3600) // 분리해서
@RestController
@RequestMapping("/board")
public class BoardController {

    @RequestMapping("/")
    public String index(){

        return "index";
    }

}