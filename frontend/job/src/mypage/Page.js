import React, {Component} from 'react'
import '../mypage/css/index.css';
import {Figure, Button} from 'react-bootstrap'
import { BrowserRouter as Router, Route, Link,} from "react-router-dom";
import {Nav} from 'react-bootstrap'
import _info from './images/_info.png'
import ResMini from "./click/ResMini"
import SupMini from "./click/SupMini"

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
                                <p class="am">이메일 - </p><br/>
                                <p class="am"><Button onClick={info}>내 정보</Button></p>
                            </td>
                        </table>
                    </div>

                    <div class="tg">
                        <table>
                        <tr>
                            <Nav>
                                <td class="er"><Link to="/res"><h2 class="gd">지원 현황</h2></Link></td>
                                <td class="fr"><Link to="/sup"><h2 class="gd">등록 현황</h2></Link></td>
                            </Nav>
                            <Route path="/res" component={ResMini}/>
                            <Route path="/sup" component={SupMini}/>
                        </tr><br/>
                        </table>
                    </div>

                    <div>
                        <table>
                            <th class="jj">
                                <Figure.Image width={350} height={200} src={_info}/>
                            </th>
                            <th class="kk">
                                <tr>
                                    <span class="ll">2019년 최저시급 8,350원</span>
                                    <a href="/">급여 계산하기</a>
                                </tr>
                                <tr>
                                    <span class="fi">지원전에 미리 확인!</span>
                                    <a href="/">체불사업주 명단</a>
                                </tr>
                                <tr>
                                    <span class="gi">알바 시작의 첫걸음!</span>
                                    <a href="/">근로계약서 작성</a><br/>
                                </tr>
                                <tr>
                                    <span class="hi">알바하다 궁금할 땐?</span>
                                    <a href="/">알바노무상담</a>
                                </tr>
                            </th>
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