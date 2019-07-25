import React,{Component} from 'react'
import {Form, Button, Table, Card, Col} from 'react-bootstrap';
import './Write.css'

class Wirte extends Component{
    render(){
        return(
            <div className="write">
            <hr/>
            
            <h2 className="write1">글쓰기</h2><br/>
            <p className="title">제목 : <input typr="text" /></p><br/>
            <hr/>

            <div className="imfo">
            <Table responsive>
                    <thead>
                        <tr>
                            <th colSpan="3" className="imfo1">모집 조건</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <div>
                                    <div>
                                        
                                    </div>
                                    <div>

                                    </div>
                                </div>
          
                                <Col sm="10">
                                <p>일시 : </p>
                                <Form.Control type="text" />
                                
                                </Col>
                            </td>
                        </tr>
                    </tbody>
                    <tbody>
                        <tr>
                            <td>장소 : <input type="text"/></td>
                        </tr>
                    </tbody>
                    <tbody>
                        <tr>
                            <td>인원 : </td>
                        </tr>
                    </tbody>
                    <tbody>
                        <tr>
                            <td>성별 : </td>
                        </tr>
                    </tbody>
                    <tbody>
                        <tr>
                            <td>연령 : </td>
                        </tr>
                    </tbody>
                    <tbody>
                        <tr>
                            <td>급여 : </td>
                        </tr>
                    </tbody>
            </Table>
            </div>

            <div className="text">
            <Table responsive>
                    <thead>
                        <tr>
                            <th colSpan="3" className="imfo1">상세내용</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>유형 : </td>
                        </tr>
                        <tr>
                            <td>기간 : </td>
                        </tr>
                        <tr>
                            <td>급여 : </td>
                        </tr>
                        <tr>
                            <td>비고 : </td>
                        </tr>
                    </tbody>
            </Table>
            </div>

            <div className="imfo">
            <Table responsive>
                    <thead>
                        <tr>
                        <th colSpan="3">근무 위치</th>
                        </tr>
                        <tr>
                        <th colSpan="3"></th>
                        </tr>
                    </thead>
                    <tbody>
       
                    </tbody>
            </Table>
            </div>

            <div className="imfo">
            <Table responsive>
                    <thead>
                        <tr>
                        <th colSpan="3">저장하기 전 꼭 확인하세요!</th>
                        </tr>
                    </thead>
                    <tbody>
                <Card>
                    <Card.Body>
                    <ul>
                        <li></li>
                    </ul>
                    </Card.Body>
                </Card>
                    </tbody>
            </Table>
            </div>
                <div className="buttonBox">
                    <Button variant="dark">작성</Button>
                    <Button variant="danger">취소</Button>
                </div>
        </div>
        );
    }
}

export default Wirte



