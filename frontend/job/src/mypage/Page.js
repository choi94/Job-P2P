import React, {Component} from 'react'
import '../assets/css/index.css'
import {Figure, Button} from 'react-bootstrap'
import { BrowserRouter as Router, Route, Link,} from "react-router-dom";
import {Nav} from 'react-bootstrap'
import _bg from './_bg.jpg'
import _info from './_info.png'
import _re from './_re.png'
import RecoPage from "./RecoPage"
import ScraPage from "./ScraPage"
import AlignPage from "./AlignPage"
import App from "../App"

class Page extends Component{
    render(){
        return(
            <Router>
            <div className="pa"><br/><br/>
                <table class="tc">
                    <div class="ta" align="center">
                        <br/>
                        <Figure.Image width={200} height={180} src={_bg}/>
                        <br/><br/><br/>
                        <Button variant="success" onClick={picture}>사진 등록</Button>
                    </div>
                    <table className="resume">                 
                        <td className="pi">
                        <br/>
                            <p class="am"><label class="k">*</label> 개인 기본 정보</p>
                            <span class="resu">홍길동</span>
                            <span class="res">남자</span> <label className="c">/</label>
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
                                <a href="/mypage" class="cc">지원 현황</a><br/>
                                <a href="/mypage" class="cc">근로계약서 관리</a><br/>
                                <a href="/mypage" class="cc">알바 후기 관리</a><br/><br/>
                            <h3 class="j">관심 채용 정보</h3>
                                <a href="/recopage" class="cc">추천 알바</a><br/>
                                <a href="/scrapage" class="cc">스크랩 알바</a><br/>
                                <a href="/alignpage" class="cc">맞춤 알바</a><br/><br/>
                            <h3 class="j">회원 정보 관리</h3>
                                <a href="/info" class="cc">회원 정보 확인·수정</a><br/>
                                <a href="/info" class="cc">비밀번호 변경</a><br/>
                                <a href="/info" class="cc">문자·Email 수신 설정</a><br/>
                                <a href="/resume" class="cc">내 사진 관리</a><br/><br/>
                        </td>
                    </div>
                </table>
                <div class="tg">
                        <tr align="center">
                            <Nav className="mr-auto">
                                <td width="200" class="er"><Link to="/recopage"><h2 class="gd">추천 알바</h2></Link></td>
                                <td width="200" class="er"><Link to="/scrapage"><h2 class="gd">스크랩 알바</h2></Link></td>
                                <td width="200" class="er"><Link to="/alignpage"><h2 class="gd">맞춤 알바</h2></Link></td>
                            </Nav>
                            <Route path="/recopage" component={RecoPage}/>
                            <Route path="/scrapage" component={ScraPage}/>
                            <Route path="/alignpage" component={AlignPage}/>
                            <Route path="/app" component={App}/>
                        </tr><br/>
                    </div>
                <table>
                    <div className="tj" align="center">
                        <th>
                            <Figure.Image width={300} height={200} src={_info}/>
                        </th>
                        <th>
                            <span class="checkList">2019년 최저시급 8,350원 </span>
                            <a href="/app" class="mon-orange">급여 계산하기</a><br/>
                            <span class="checkList">지원전에 미리 확인! </span>
                            <a href="/app" class="mon-orange" target="_blank">체불사업주 명단</a><br/>
                            <span class="checkList">알바 시작의 첫걸음! </span>
                            <a href="/app" class="mon-orange" target="_blank">근로계약서 작성</a><br/>
                            <span class="checkList">알바하다 궁금할 땐? </span>
                            <a href="/app" target="_blank">알바노무상담</a>
                        </th>
                    </div>
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