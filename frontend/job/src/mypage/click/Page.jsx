import React, {Component} from 'react'
import '../mypage/css/index.css';
import {Figure, Button,Tabs,Tab,Sonnet} from 'react-bootstrap'
import { BrowserRouter as Router, Route, Link,} from "react-router-dom";
import {Nav} from 'react-bootstrap'
import _info from './images/_info.png'


class Page extends Component{
    render(){
        return(
            
            <Router>
                <div align="center">
                    <div class="head">
                        <span class="gd">Job P2P 프로필</span>
                    </div>
                    <br/>
                    <div>
                     <table>                 
                            <td class="pa">
                            <br/>
                                <p class="am"><label class="k">*</label> 개인 기본 정보</p>
                                <span class="resu">홍길동</span>
                                <span class="res">남자</span> <label class="c">/</label>
                                <span class="res">1985년생</span>
                                <hr class="re"/>
                                <p class="am">휴대폰 - </p>
                                <p class="am">이메일 - </p>
                                <p class="am"><Button onClick={info}>내 정보</Button></p>
                            </td>
                        </table>
                    </div>
        </div>
            </Router>
        );
    }
}

function info(e){
    e.preventDefault()
    window.location = './Info'
}

export default Page;