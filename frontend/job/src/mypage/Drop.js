import React, {Component} from 'react'
import {Button, Figure} from 'react-bootstrap'
import _bg from './images/_bg.jpg'
import _ from './images/_.PNG'

class Password extends Component{
    render(){
        return (
            <div>
                <h1 class="head">
                    <a href="/app"><Figure.Image width={100} height={200} src={_bg}/></a>
                    <span>회원탈퇴</span>
                <table class="header" align="right">
                    <th><a href="/app">홈 |</a></th>
                    <th><a href="/app">개인서비스 |</a></th>
                    <th><a href="/app">채용정보 |</a></th>
                    <th><a href="/app">FAQ |</a></th>
                    <th><a href="/app">캠페인</a></th>
                </table>
                </h1>
                <hr class="line"></hr>
                <br/><br/>
                <div>
                    <h2 class="head2">Job PtoP <span>회원탈퇴</span></h2>
                    <div class="info">
                        <table class="ao">
                            <div align="left"><br/>
                                <tr>
                                    <Figure.Image width={50} height={50} src={_}/>
                                    <td class="ae">회원님, Job PtoP 서비스를 이용하시는데 불편함이 있으셨나요?</td>
                                </tr>
                                    <p class="be">탈퇴 안내 및 유의사항</p>
                                    <ul class="ce">
                                        <li>탈퇴하신 아이디는 복구가 불가능하며, 추후 동일한 아이디로 재가입이 안됩니다.</li>
                                        <li>이력서 정보, 구직 활동내역, 유료서비스, 비트코인 머니가 모두 삭제되며, 삭제된 데이터는 복구되지 않습니다.</li>
                                        <li>회원탈퇴 시 등록하신 게시물은 삭제되지 않으므로 삭제를 원하시면 회원탈퇴 전에 삭제해 주세요.</li><br/>
                                    </ul>
                                <tr>
                                    <td class="fe">Job PtoP 활동내역</td>
                                </tr>
                                <table class="ge" border="1">
                                <tr align="center">
                                    <td class="he">게시물 작성</td>
                                    <td class="he">댓글 작성</td>
                                </tr>
                                <tr align="center">
                                    <td class="ce">총 0건</td>
                                    <td class="ce">총 0건</td>
                                </tr>
                                </table><br/>
                                <tr class="je">
                                    <input type="checkbox" class="je" value="man"/>위 안내사항을 모두 확인하였으며 이에 동의합니다.
                                </tr>
                            </div><br/>
                        </table>
                    </div><br/><br/>
                    <p class="cd">탈퇴 신청</p>
                    <table class="ad">
                        <th>
                                <td class="fd"><label class="k">*</label>아이디</td>
                                <td class="bd">Hong</td>
                            <tr>
                                <td class="fd"><label class="k">*</label>비밀번호 확인</td>
                                <td class="bd"><input type="text"/></td>
                            </tr>
                        </th>
                    </table>
                    <p class="dd">※탈퇴 후에는 동일 아이디로 다시 가입할 수 없으며, 아이디와 데이터는 복구할 수 없으니 신중하게 선택해 주세요.</p>
                    <div align="center">
                        <Button variant="" class="bb">취소</Button>
                        <Button variant="warning" class="bb">탈퇴 신청</Button>
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

export default Password;