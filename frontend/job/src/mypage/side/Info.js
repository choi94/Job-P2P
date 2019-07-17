import React, {Component} from 'react'
import {Figure, Button} from 'react-bootstrap'
import _bg from '../images/_bg.jpg'

class Info extends Component{
    render(){
        return (
            <div>
                <h1 class="head">
                    <a href="/"><Figure.Image width={100} height={200} src={_bg}/></a>
                    <span class="gd">회원정보</span>
                <table class="header" align="right">
                    <th><a href="/">홈 |</a></th>
                    <th><a href="/">개인서비스 |</a></th>
                    <th><a href="/">채용정보 |</a></th>
                    <th><a href="/">FAQ |</a></th>
                    <th><a href="/">캠페인</a></th>
                </table>
                </h1>
                <hr class="line"></hr>
                <br/>

                <div class="head2">
                <h2><span class="hd">홍길동님</span>의 <span class="hd">JOB PtoP</span> 회원정보</h2>
                <p class="ex" align="right">JOB PtoP를 더이상 이용하지 않는다면 <a href="/drop">회원탈퇴</a></p>
                </div>
                <div class="info">
                    <table class="bo">
                        <div align="left"><br/>
                            <tr>
                                <td class="pb">회원정보</td>
                                <td><Button variant="warning" class="bb" onClick={update}>수정</Button></td>
                            </tr><br/>
                            <p class="aa">안전한 정보보호를 위해 연락처 일부만 확인 가능하며,<br/>
                            수정화면에서 정확한 연락처 확인이 가능합니다.</p>
                        </div>
                    </table>
                    <table class="de">
                        <tr>
                        <td class="bb">최근 수정일</td>
                        <td class="cc">2019-07-11</td>
                        </tr>
                        <tr>
                        <td class="bb">연락처</td>
                        <td class="cc">010-0000-0000</td>
                        </tr>
                        <tr>
                        <td class="bb">E-메일</td>
                        <td class="cc">Hong@naver.com</td>
                        </tr>
                        <tr>
                        <td class="bb">주소</td>
                        <td class="cc">서울시 강남구</td>
                        </tr>
                    </table>
                </div>

                <div class="di">
                    <table class="bi">
                        <div align="left"><br/>
                            <tr>
                                <td class="pb">비밀번호</td>
                                <td><Button variant="success" class="bb" onClick={change}>변경</Button></td>
                            </tr><br/>
                            <p class="aa">비밀번호를 주기적으로 변경하여<br/>
                            소중한 개인정보를 안전하게 보호하세요(6개월마다 알림)</p>
                        </div><br/>
                    </table>
                    <table class="ai">
                        <tr>
                        <td class="bb">최근 변경일</td>
                        <td class="cc">2019년 07월 11일 (180일 후 변경 알림 예정)</td>
                        </tr>
                    </table>
                </div>
            </div>
        );
    }
}

function update(e){
    e.preventDefault()
    window.location = './InfoUpdate'
}

function change(e){
    e.preventDefault()
    window.location = './Password'
}

export default Info;