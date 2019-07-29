import React, {useState} from 'react'
import '../Write.css'
import {Button, Card, Col, Form, Table} from "react-bootstrap";

const WriteLocal = (props) => {
    const [id, setId] = useState(sessionStorage.getItem('id'))
    const [title, setTitle] = useState()
    const [workDay, setWorkDay] = useState()
    const [workDateDay, setWorkDateDay] = useState()
    const [workTimeOne, setWorkTimeOne] = useState()
    const [workTimeTwo, setWorkTimeTwo] = useState()
    const [workTime, setWorkTime] = useState()
    const [cityArea, setCityArea] = useState()
    const [startAgeOne, setStartAgeOne] = useState()
    const [startAgeTwo, setStartAgeTwo] = useState()
    const [startAge, setStartAge] = useState()
    const [daySalary, setDaySalary] = useState()
    const [totalSalary, setTotalSalary] = useState()
    const [kakao, setKakao] = useState()
    const [recruit, setRecruit] = useState()
    const [progressState, setProgressState] = useState('모집중')
    const [contents, setContents] = useState()


    return (
        <div className="write">
            <h2 className="">글쓰기</h2>
            <div className="w_write">
                <Table responsive>
                    <thead>
                    <p className="imfop">제목</p>
                    </thead>
                    <tbody>
                    <tr>
                        <td>
                            <Form.Control onChange={e => setTitle(e.target.value)} type="text" placeholder="제목" />
                        </td>
                    </tr>
                    </tbody>
                </Table>
            </div>
            <hr/>
            <div className="imfo">
                <Table responsive>
                    <thead>
                    <p className="imfop">모집 조건</p>
                    </thead>
                    <tbody>
                    <tr>
                        <td>
                            <Form>
                                <Form.Group controlId="formHorizontalEmail">
                                    <Form.Label column sm={2}>
                                        모집기간
                                    </Form.Label>
                                    <Col sm={10}>
                                        <Form.Control onChange={e => setRecruit(e.target.value)} type="text" placeholder="모집기간" />
                                    </Col>
                                </Form.Group>
                                <Form.Group controlId="formHorizontalEmail">
                                    <Form.Label column sm={2}>
                                        근무기간
                                    </Form.Label>
                                    <Col sm={10}>
                                        <Form.Control onChange={e => setWorkDay(e.target.value)} type="text" placeholder="근무기간" />
                                    </Col>
                                </Form.Group>
                                <Form.Group controlId="formHorizontalEmail">
                                    <Form.Label column sm={2}>
                                        근무 기간 일
                                    </Form.Label>
                                    <Col sm={10}>
                                        <Form.Control onChange={e => setWorkDateDay(e.target.value)} type="text" placeholder="근무 기간 일" />
                                    </Col>
                                </Form.Group>
                                <Form.Group controlId="exampleForm.ControlSelect1">
                                    <Form.Label column sm={2}>근무시간</Form.Label>
                                    <Col sm={10}>
                                        <Form.Control onChange={e => setWorkTimeOne(e.target.value)} as="select" className="w_choo1">
                                            <option>01:00</option>
                                            <option>02:00</option>
                                            <option>03:00</option>
                                            <option>04:00</option>
                                            <option>05:00</option>
                                            <option>06:00</option>
                                            <option>07:00</option>
                                            <option>08:00</option>
                                            <option>09:00</option>
                                            <option>10:00</option>
                                            <option>11:00</option>
                                            <option>12:00</option>
                                            <option>13:00</option>
                                            <option>14:00</option>
                                            <option>15:00</option>
                                            <option>16:00</option>
                                            <option>17:00</option>
                                            <option>18:00</option>
                                            <option>19:00</option>
                                            <option>20:00</option>
                                            <option>21:00</option>
                                            <option>22:00</option>
                                            <option>23:00</option>
                                            <option>24:00</option>
                                        </Form.Control>
                                        <p className="w_choo2">~</p>
                                        <Form.Control onChange={e => setWorkTimeTwo(e.target.value)} as="select" className="w_choo3">
                                            <option>01:00</option>
                                            <option>02:00</option>
                                            <option>03:00</option>
                                            <option>04:00</option>
                                            <option>05:00</option>
                                            <option>06:00</option>
                                            <option>07:00</option>
                                            <option>08:00</option>
                                            <option>09:00</option>
                                            <option>10:00</option>
                                            <option>11:00</option>
                                            <option>12:00</option>
                                            <option>13:00</option>
                                            <option>14:00</option>
                                            <option>15:00</option>
                                            <option>16:00</option>
                                            <option>17:00</option>
                                            <option>18:00</option>
                                            <option>19:00</option>
                                            <option>20:00</option>
                                            <option>21:00</option>
                                            <option>22:00</option>
                                            <option>23:00</option>
                                            <option>24:00</option>
                                        </Form.Control>
                                    </Col>
                                </Form.Group>


                                <Form.Group controlId="exampleForm.ControlSelect1">
                                    <Form.Label column sm={2}>모집연령</Form.Label>
                                    <Col sm={10}>
                                        <Form.Control onChange={e => setStartAgeOne(e.target.value)} as="select" className="w_choo1">
                                            <option>10</option>
                                            <option>20</option>
                                            <option>30</option>
                                            <option>40</option>
                                            <option>50</option>
                                            <option>60</option>
                                            <option>70</option>
                                            <option>80</option>
                                            <option>90</option>
                                            <option>100</option>
                                        </Form.Control>
                                        <p className="w_choo2">~</p>
                                        <Form.Control onChange={e => setStartAgeTwo(e.target.value)} as="select" className="w_choo3">
                                            <option>10</option>
                                            <option>20</option>
                                            <option>30</option>
                                            <option>40</option>
                                            <option>50</option>
                                            <option>60</option>
                                            <option>70</option>
                                            <option>80</option>
                                            <option>90</option>
                                            <option>100</option>
                                        </Form.Control>
                                    </Col>
                                </Form.Group>
                                <Form.Group controlId="formHorizontalEmail">
                                    <Form.Label column sm={2}>
                                        근무지
                                    </Form.Label>
                                    <Col sm={10}>
                                        <Form.Control onChange={e => setCityArea(e.target.value)} type="text" placeholder="근무지" />
                                    </Col>
                                </Form.Group>
                                <Form.Group controlId="formHorizontalEmail">
                                    <Form.Label column sm={2}>
                                        카카오톡 ID
                                    </Form.Label>
                                    <Col sm={10}>
                                        <Form.Control onChange={e => setKakao(e.target.value)} type="text" placeholder="카카오톡 ID" />
                                    </Col>
                                </Form.Group>
                                <Form.Group controlId="formHorizontalEmail">
                                    <Form.Label column sm={2}>
                                        하루 급여
                                    </Form.Label>
                                    <Col sm={10}>
                                        <Form.Control onChange={e => setDaySalary(e.target.value)}  type="text" placeholder="급여"/>
                                    </Col>
                                </Form.Group>
                            </Form>
                        </td>
                    </tr>
                    </tbody>

                </Table>
            </div>
            <hr/>
            <div className="w_Location">
                <Table responsive>
                    <thead>
                    <p className="imfop">상세내용</p>
                    </thead>
                    <tbody>
                    <tr>
                        <td>
                            <Form.Group controlId="exampleForm.ControlTextarea1">
                                <Form.Control onChange={e => setContents(e.target.value)} as="textarea" rows="10" />
                            </Form.Group>
                        </td>
                    </tr>
                    </tbody>
                </Table>
            </div>
            <hr/>

            <hr/>
            <div className="imfo">
                <Table responsive>
                    <thead>
                    <tr>
                        <th colSpan="3"  className="imfo1">저장하기 전 꼭 확인하세요!</th>
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
                <Button variant="dark" >작성</Button>
                <Button variant="danger">취소</Button>
            </div>
        </div>
    )


}

export default WriteLocal