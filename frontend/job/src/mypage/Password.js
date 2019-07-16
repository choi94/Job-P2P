import React, {Component} from 'react'
import {Button, Figure, Nav} from 'react-bootstrap'
import { BrowserRouter as Route, Link,} from "react-router-dom";
import _bg from './_bg.jpg'
import InfoUpdate from './InfoUpdate';

class Password extends Component{
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
                            <td width="200" class="ed"><Link to="/infoupdate"><h2 class="gd">회원정보 수정</h2></Link></td>
                            <td width="200" class="ee"><h2 class="gd">비밀번호 변경</h2></td>
                        </Nav>
                        <Route path="/infoupdate" component={InfoUpdate}/>
                    </tr><br/>
                    <tr>
                        <div class="ci"><br/>
                            <li>개인정보를 안전하게 보호하기 위해 비밀번호를 주기적(6개월)으로 변경해 주세요.</li><br/>
                            <li>비밀번호는 6~16자의 영문 대소문자, 숫자, 특수문자를 조합하여 사용하실 수 있습니다.</li><br/>
                        </div>
                    </tr>
                    <hr class="li"></hr>
                    <br/><br/>
                    <div class="b">
                        <tr>
                            <td class="j">현재 비밀번호</td>
                            <td><input type="text" className="a" name ="email"/></td>
                        </tr><br/>
                        <tr className="d">
                            <td class="j">새 비밀번호</td>
                            <td><input type="text" className="e" name ="name"/></td>
                        </tr><br/>
                        <tr>
                            <td class="j">새 비밀번호 확인</td>
                            <td><input type="text" className="l" name ="address"/></td>
                        </tr><br/><br/>
                    </div><br/>
                    <hr class="li"></hr>
                    <div align="center">
                        <Button onClick={success}>취소</Button>
                        <Button variant="success" onClick={success}>변경 완료</Button>
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