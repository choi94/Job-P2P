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
                                <Form.Label column sm="2">
                                    일시
                                </Form.Label>
                                <Col sm="10">
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
                            <th colSpan="3" className="imfo1">의뢰인 정보</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>카카오톡 ID : </td>
                        </tr>
                        <tr>
                            <td>의뢰인의 평점 : </td>
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
                    </thead>
                    <tbody>
       
                    </tbody>
            </Table>
            </div>

            <div className="imfo">
            <Table responsive>
                    <thead>
                        <tr>
                        <th colSpan="3" className="imfo1">꼭 확인하세요!</th>
                        </tr>
                    </thead>
                    <tbody>
                <Card>
                    <Card.Body>
                    <ul>
                        <li>지원할때 꼭 해야합니다.</li>
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



