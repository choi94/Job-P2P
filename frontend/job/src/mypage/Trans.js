import React from 'react'
import {Table, Button, Tabs, Tab} from 'react-bootstrap'
import './css/index.css'
const TransVol  = ()=>{
    return(
        <div className="TransBox">
            <br/>
            <h2>거래 페이지</h2><br/><br/>
            <Tabs defaultActiveKey="home" transition={false} id="noanim-tab-example" className="list-nav" >
                <Tab eventKey="home" title="지원자">
                    <Table>
                        <thead>
                            <tr>
                                <td className="vol">정보</td>
                            </tr>
                        </thead>
                        
                        <tbody>
                            <tr>
                                <th>일자리 제목</th>
                                <th>을지로 이사 도우미</th>
                            </tr>
                            <tr>
                                <th>기간</th>
                                <th>2019/07/17 ~ 2019/07/19</th>
                            </tr>
                            <tr>
                                <th>등록자 이름</th>
                                <th>홍길동</th>
                            </tr>
                            <tr>
                                <th>등록자 연락처</th>
                                <th>010-0000-0000</th>
                            </tr>
                            <tr>
                                <th>총 급여</th>
                                <th>24만원</th>
                            </tr>
                        </tbody>
                    </Table><br/>
                    <Button variant="success">확인</Button>
                </Tab>
                <Tab eventKey="profile" title="등록자">
                    <Table>
                        <thead>
                            <tr>
                                <td className="vol">정보</td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th>일자리 제목</th>
                                <th>을지로 이사 도우미</th>
                            </tr>
                            <tr>
                                <th>기간</th>
                                <th>2019/07/17 ~ 2019/07/19</th>
                            </tr>
                            <tr>
                                <th>지원자 이름</th>
                                <th>홍길동</th>
                            </tr>
                            <tr>
                                <th>지원자 연락처</th>
                                <th>010-0000-0000</th>
                            </tr>
                            <tr>
                                <th>총 급여</th>
                                <th>24만원</th>
                            </tr>
                        </tbody>
                    </Table><br/>
                    <Button variant="success">지불</Button>
                </Tab>
            </Tabs>
            <div>

            </div>
        </div>
    )
}

export default TransVol