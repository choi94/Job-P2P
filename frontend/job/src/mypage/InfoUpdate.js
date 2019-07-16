import React, {Component} from 'react'
import {Button, Figure, Nav} from 'react-bootstrap'
import { BrowserRouter as Route, Link,} from "react-router-dom";
import _bg from './_bg.jpg'
import Password from "./Password"

class InfoUpdate extends Component{
    render(){
        return (
            <div>
                <h1 class="head">
                    <a href="/app"><Figure.Image width={100} height={200} src={_bg}/></a>
                    <span class="gd">회원정보</span>
                <table class="header" align="right">
                    <th><a href="/app">홈 |</a></th>
                    <th><a href="/app">개인서비스 |</a></th>
                    <th><a href="/app">채용정보 |</a></th>
                    <th><a href="/app">FAQ |</a></th>
                    <th><a href="/app">캠페인</a></th>
                </table>
                </h1>
                <hr class="line"></hr>
                <br/>
                <div>
                    <tr align="center">
                        <Nav className="mr-auto">
                            <td width="200" class="ed"><h2 class="gd">회원정보 수정</h2></td>
                            <td width="200" class="ee"><Link to="/password"><h2 class="gd">비밀번호 변경</h2></Link></td>
                        </Nav>
                        <Route path="/password" component={Password}/>
                    </tr><br/>
                    <tr>
                        <li class="ui">회원정보는 개인정보처리방침에 따라 안전하게 보호되며, 회원님의</li>
                        <p class="um">동의 없이 공개 또는 제 3자에게 제공되지 않습니다.</p>
                    </tr>
                    <hr class="lin"></hr>
                    <div class="b">
                        <tr>
                            <td class="j">이메일<label class="k">*</label></td>
                            <td><input type="text" className="a" name ="email" value="Hong@naver.com"/></td>
                        </tr><br/>
                        <tr className="d">
                            <td class="j">닉네임<label class="k">*</label></td>
                            <td><input type="text" className="a" name ="name" value="홍길동"/></td>
                        </tr><br/>
                        <tr>
                            <td class="j">연락처<label class="k">*</label></td>
                            <span className="d">
                                <label className="h">휴대폰</label>
                                    <select id="phone" width={200}>
                                        <option value="">010</option>
                                        <option value="">011</option>
                                        <option value="">016</option>
                                        <option value="">017</option>
                                        <option value="">018</option>
                                        <option value="">019</option>
                                    </select>
                            </span>
                            <input type="text" className="i" name ="phone" maxLength={10} value="1234-5678"/><br/>
                            <span className="d">
                                <label className="g">유선 전화</label>
                                    <select id="cable" width={100} >
                                        <option value="">02</option>
                                        <option value="">031</option>
                                        <option value="">032</option>
                                        <option value="">033</option>
                                        <option value="">041</option>
                                        <option value="">042</option>
                                        <option value="">043</option>
                                        <option value="">044</option>
                                        <option value="">051</option>
                                        <option value="">052</option>
                                        <option value="">053</option>
                                        <option value="">054</option>
                                        <option value="">055</option>
                                        <option value="">061</option>
                                        <option value="">062</option>
                                        <option value="">063</option>
                                        <option value="">064</option>
                                        <option value="">070</option>
                                        <option value="">직접 입력</option>
                                    </select>
                            </span>
                            <input type="text" name ="phone" value="999-9999"/>
                        </tr><br/>
                        <tr>
                            <td class="j">이름<label class="k">*</label></td>
                            <td><input type="text" className="e" name ="name" value="홍길동"/></td>
                        </tr><br/>
                        <tr>
                            <td class="j">생년월일/성별<label class="k">*</label></td>
                            <td>
                                <span className="d">
                                    <select id="year" width={300}>
                                    <option value="">년도</option>
                                    <option value="">2019</option>
                                    <option value="">2018</option>
                                    <option value="">2017</option>
                                    <option value="">2016</option>
                                    <option value="">2015</option>
                                    <option value="">2014</option>
                                    <option value="">2013</option>
                                    <option value="">2012</option>
                                    <option value="">2011</option>
                                    <option value="">2010</option>
                                    <option value="">2009</option>
                                    <option value="">2008</option>
                                    <option value="">2007</option>
                                    <option value="">2006</option>
                                    <option value="">2005</option>
                                    <option value="">2004</option>
                                    <option value="">2003</option>
                                    <option value="">2002</option>
                                    <option value="">2001</option>
                                    <option value="">2000</option>
                                    <option value="">1999</option>
                                    <option value="">1998</option>
                                    <option value="">1997</option>
                                    <option value="">1996</option>
                                    <option value="">1995</option>
                                    <option value="">1994</option>
                                    <option value="">1993</option>
                                    <option value="">1992</option>
                                    <option value="">1991</option>
                                    <option value="">1990</option>
                                    <option value="">1989</option>
                                    <option value="">1988</option>
                                    <option value="">1987</option>
                                    <option value="">1986</option>
                                    <option value="">1985</option>
                                    </select>
                                </span>
                                <span className="d">
                                    <select id="month" width={200}>
                                    <option value="">월</option>
                                    <option value="">01</option>
                                    <option value="">02</option>
                                    <option value="">03</option>
                                    <option value="">04</option>
                                    <option value="">05</option>
                                    <option value="">06</option>
                                    <option value="">07</option>
                                    <option value="">08</option>
                                    <option value="">09</option>
                                    <option value="">10</option>
                                    <option value="">11</option>
                                    <option value="">12</option>
                                    </select>
                                </span>
                                <span className="d">
                                    <select id="day" width={200}>
                                    <option value="">일</option>
                                    <option value="">01</option>
                                    <option value="">02</option>
                                    <option value="">03</option>
                                    <option value="">04</option>
                                    <option value="">05</option>
                                    <option value="">06</option>
                                    <option value="">07</option>
                                    <option value="">08</option>
                                    <option value="">09</option>
                                    <option value="">10</option>
                                    <option value="">11</option>
                                    <option value="">12</option>
                                    <option value="">13</option>
                                    <option value="">14</option>
                                    <option value="">15</option>
                                    <option value="">16</option>
                                    <option value="">17</option>
                                    <option value="">18</option>
                                    <option value="">19</option>
                                    <option value="">20</option>
                                    <option value="">21</option>
                                    <option value="">22</option>
                                    <option value="">23</option>
                                    <option value="">24</option>
                                    <option value="">25</option>
                                    <option value="">26</option>
                                    <option value="">27</option>
                                    <option value="">28</option>
                                    <option value="">29</option>
                                    <option value="">30</option>
                                    <option value="">31</option>
                                    </select>
                                </span>
                                <label className="c">/</label>
                                <span className="d"><input type="radio" value="man"/>남</span>
                                <span><input type="radio" value="woman"/>여</span>
                            </td>
                        </tr><br/>
                        <tr>
                            <td class="j">주소<label class="k">*</label></td>
                            <td><input type="text" className="e" name ="address" value="서울시"/></td>
                        </tr><br/><br/>
                        <hr class="lin2"></hr>
                        <p class="j">알림 수신 설정</p>
                        <tr>
                        <td>알림 메일 설정</td>
                        <td><input type="radio" value="check"/>수신</td>
                        <td><input type="radio" value="no" checked={true}/>수신 안함</td>
                        </tr>
                        <tr>
                        <td>광고 알림 수신</td>
                        <td><input type="radio" value="email" checked={true}/>이메일 알림</td>
                        <td><input type="radio" value="phone"/>문자 알림</td>
                        </tr>
                    </div><br/><br/>
                    <div align="center">
                        <Button onClick={success}>취소</Button>
                        <Button variant="warning" onClick={success}>수정 완료</Button>
                    </div>
                </div>
            </div>
        );
    }
}

function success(e){
    e.preventDefault()
    window.location = './Info'
}

export default InfoUpdate;