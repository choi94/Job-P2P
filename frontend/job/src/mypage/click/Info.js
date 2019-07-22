import React, {Component} from 'react'
import {Figure, Button} from 'react-bootstrap'

class Info extends Component{
    render(){
        return (
            <div align="center">
                <div class="head">
                    <span class="gd">Job P2P 회원정보</span>
                </div>

                <div class="head2">
                    <h2 class="f"><span class="hd">(닉네임)님의</span> 회원정보</h2>
                </div>
                <br/><br/>
                <div>
                    <table class="bo">
                        <div>
                            <tr>
                                <td class="pb">회원정보</td>
                                <td><Button variant="warning" onClick={update}>수정</Button></td>
                            </tr><br/>
                            <p class="aa">안전한 정보보호를 위해 연락처 일부만 확인 가능하며,<br/>수정화면에서 정확한 연락처 확인이 가능합니다.</p>
                        </div>
                    </table>
                    <table class="de">
                        <tr>
                            <td class="bb">지원 평점</td>
                            <td class="cc">3점 / 5점</td>
                        </tr>
                        <tr>
                            <td class="bb">의뢰 평점</td>
                            <td class="cc">0점 / 5점</td>
                        </tr>
                        <tr>
                            <td class="bb">E-메일</td>
                            <td class="cc">Hong@naver.com</td>
                        </tr>
                        <tr>
                            <td class="bb">연락처</td>
                            <td class="cc">010-0000-0000</td>
                        </tr>
                        <tr>
                            <td class="bb">이름</td>
                            <td class="cc">홍길동</td>
                        </tr>
                        <tr>
                            <td class="bb">성별</td>
                            <td class="cc">남</td>
                        </tr>
                        <tr>
                            <td class="bb">주민번호</td>
                            <td class="cc">950525-1******</td>
                        </tr>
                        <tr>
                            <td class="bb">주소</td>
                            <td class="cc">서울시 강남구</td>
                        </tr>
                    </table>
                </div>

                <div>
                    <table class="bi">
                        <tr>
                            <td class="pb">회원탈퇴</td>
                            <td><Button variant="success" onClick={change}>탈퇴</Button></td>
                        </tr>
                        <tr>
                            <td colSpan="2">
                                <p class="aa">JOB P2P를 더이상 이용하지 않는다면 회원탈퇴</p>
                            </td>
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
    window.location = './Drop'
}

export default Info;