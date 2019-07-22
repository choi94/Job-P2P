import React, {Component} from 'react'
import {Button} from 'react-bootstrap'

class InfoUpdate extends Component{
    render(){
        return (
            <div align="center">
                <div class="head">
                    <span class="gd">Job P2P 회원정보</span>
                </div>
                <br/>
                <div>
                    <table>
                        <div class="jd">
                            <td class="ed"><h2 class="gd">회원정보 수정</h2></td>
                        </div><br/>
                        <div class="">
                            <li class="km">회원정보는 개인정보처리방침에 따라 안전하게 보호되며, 회원님의</li>
                            <p class="um">동의 없이 공개 또는 제 3자에게 제공되지 않습니다.</p>
                        </div>
                        <hr class="lin"/>
                        <div class="b">
                            <tr>
                                <td class="j">닉네임<label class="k">*</label></td>
                                <td class="a"><input type="text" value="Hong"/></td>
                            </tr><br/>
                            <tr>
                                <td class="j">이메일<label class="k">*</label></td>
                                <td class="a"><input type="text" value="Hong@naver.com"/></td>
                            </tr><br/>
                            <tr>
                                <td class="j">비밀번호<label class="k">*</label></td>
                                <td class="d"><input type="password" value="1234"/></td>
                            </tr><br/>
                            <tr>
                                <td class="j">연락처<label class="k">*</label></td>
                                    <label class="h">휴대폰</label>
                                    <input type="text" value="010-1234-5678"/><br/>
                                    
                                    <label className="g">유선 전화</label>
                                    <input type="text" value="02-999-9999"/>
                            </tr><br/>
                            <tr>
                                <td class="j">이름<label class="k">*</label></td>
                                <td class="e"><input type="text" value="홍길동"/></td>
                            </tr><br/>
                            <tr>
                                <td class="j">생년월일<label class="k">*</label></td>
                                <td class="d">
                                    <span><input type="text" value="950525-1******"/></span>
                                </td>
                            </tr><br/>
                            <tr>
                                <td class="j">성별<label class="k">*</label></td>
                                <td>
                                    <span class="l"><input type="radio" value="man"/>남</span>
                                    <label class="c">/</label>
                                    <span><input type="radio" value="woman"/>여</span>
                                </td>
                            </tr><br/>
                            <tr>
                                <td class="j">주소<label class="k">*</label></td>
                                <td class="e"><input type="text" value="서울시"/></td>
                            </tr><br/><br/>
                            <hr class="lin2"></hr>
                            <p class="j">알림 수신 설정</p>
                            <tr>
                                <td class="j">알림 메일 설정</td>
                                <td class="i"><input type="radio" value="check"/>수신</td>
                                <td><input type="radio" value="no" checked={true}/>수신 안함</td>
                            </tr>
                            <tr>
                                <td class="j">광고 알림 수신</td>
                                <td class="i"><input type="radio" value="email" checked={true}/>이메일 알림</td>
                                <td><input type="radio" value="phone"/>문자 알림</td>
                            </tr>
                        </div><br/><br/>
                    </table>
                    <div align="center">
                        <Button variant="warning" onClick={success}>수정 완료</Button>
                        <Button onClick={success}>취소</Button>
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