import React from 'react'
import '../Write.css'
import {Form, Table,Col,Row} from 'react-bootstrap';
const Recruit = () =>{

    return(
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
                            근무기간
                            </Form.Label>
                            <Col sm={10}>
                            <Form.Control type="email" placeholder="Email" />
                            </Col>
                        </Form.Group>
                        <Form.Group controlId="exampleForm.ControlSelect1">
                            <Form.Label  column sm={2}>근무시간</Form.Label>
                            <Col sm={10}>
                                <Form.Control as="select" className="w_choo1">
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
                                <Form.Control as="select" className="w_choo3">
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
                        <Form.Group controlId="formHorizontalEmail">
                            <Form.Label column sm={2}>
                            근무지
                            </Form.Label>
                            <Col sm={10}>
                            <Form.Control type="email" placeholder="근무지" />
                            </Col>
                        </Form.Group>
                
                        <Form.Group controlId="exampleForm.ControlSelect1">
                            <Form.Label  column sm={2}>모집연령</Form.Label>
                            <Col sm={10}>
                                <Form.Control as="select" className="w_choo1">
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
                                <Form.Control as="select" className="w_choo3">
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
                            장소
                            </Form.Label>
                            <Col sm={10}>
                            <Form.Control type="email" placeholder="장소" />
                            </Col>
                        </Form.Group>
                        <Form.Group controlId="formHorizontalEmail">
                            <Form.Label column sm={2}>
                            인원
                            </Form.Label>
                            <Col sm={10}>
                            <Form.Control type="email" placeholder="인원" />
                            </Col>
                        </Form.Group>
                        <Form.Group controlId="formHorizontalEmail">
                            <Form.Label column sm={2}>
                            카카오톡 ID 
                            </Form.Label>
                            <Col sm={10}>
                            <Form.Control type="email" placeholder="카카오톡 ID" />
                            </Col>
                        </Form.Group>
                        <Form.Group controlId="formHorizontalEmail">
                            <Form.Label column sm={2}>
                            급여 
                            </Form.Label>
                            <Col sm={10}>
                            <Form.Control type="email" placeholder="급여"/>
                            </Col>
                        </Form.Group>
                        </Form>
                        </td>
                    </tr>
                    </tbody>
                   
            </Table>
    )
}
export default Recruit