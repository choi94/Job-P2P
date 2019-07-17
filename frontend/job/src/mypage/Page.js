import React, {Component} from 'react'
import '../mypage/css/index.css';
import {Figure, Button} from 'react-bootstrap'
import { BrowserRouter as Router, Route, Link,} from "react-router-dom";
import {Nav} from 'react-bootstrap'
import _bg from './images/_bg.jpg'
import _info from './images/_info.png'
import _re from './images/_re.png'
import ResMini from "./click/ResMini"
import SupMini from "./click/SupMini"

class Page extends Component{
    render(){
        return(
            <Router>
            <div class="pa"><br/><br/>
                <table class="tc">
                    <div class="ta" align="center">
                        <br/>
                        <Figure.Image width={200} height={180} src={_bg}/>
                        <br/><br/><br/>
                        <Button variant="success" onClick={picture}>사진 등록</Button>
                    </div>
                    <table class="resume">                 
                        <td class="pi">
                        <br/>
                            <p class="am"><label class="k">*</label> 개인 기본 정보</p>
                            <span class="resu">홍길동</span>
                            <span class="res">남자</span> <label class="c">/</label>
                            <span class="res">1985년생</span>
                            <hr class="re"/>
                            <p>휴대폰 - </p>
                            <p>이메일 - </p>
                            <hr class="re"/>
                            <Button onClick={info}>내 정보</Button>
                        </td>
                    </table>
                </table>

                <table>
                    <div class="tf" align="left">
                        <td>
                        <br/>
                            <h3 class="j">알바 활동 관리</h3>
                                <a href="/respage" class="cc">지원 현황</a><br/>
                                <a href="/suppage" class="cc">등록 현황</a><br/>
                            <h3 class="j">관심 채용 정보</h3>
                                <a href="/" class="cc">추천 알바</a><br/>
                                <a href="/" class="cc">스크랩 알바</a><br/>
                            <h3 class="j">회원 정보 관리</h3>
                                <a href="/info" class="cc">회원 정보 확인·수정</a><br/>
                                <a href="/info" class="cc">비밀번호 변경</a><br/>
                                <a href="/info" class="cc">문자·Email 수신 설정</a><br/>
                        </td>
                    </div>
                </table>
                <div class="tg">
                        <tr align="center">
                            <Nav>
                                <td class="er"><Link to="/respage"><h2 class="gd">지원 현황</h2></Link></td>
                                <td class="fr"><Link to="/suppage"><h2 class="gd">등록 현황</h2></Link></td>
                            </Nav>
                            <Route path="/respage" component={ResMini}/>
                            <Route path="/suppage" component={SupMini}/>
                        </tr><br/>
                    </div>
                <table class="tj">
                        <div class="jj">
                            <Figure.Image width={350} height={200} src={_info}/>
                        </div>
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
        </Router>
        );
    }
}

function info(e){
    e.preventDefault()
    window.location = './Info'
}

function picture(e){
    e.preventDefault()
    var url='./Resume';
    window.open(url,"Resume","width=600,height=700,left=400");
}

export default Page;