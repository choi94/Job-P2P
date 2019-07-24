import React, {Component} from 'react'
import {Button, Card,Accordion,Form,Col,Row} from 'react-bootstrap'
import './css/index.css'


class Drop extends Component{
    render(){
        return (
            <div className="DropBox">
                <Card>
                    <Card.Header className="DropBox1">회원님, Job PtoP 서비스를 이용하시는데 불편함이 있으셨나요?</Card.Header>
                    <Card.Body>
                        <Card.Title className="DropBox1">탈퇴 안내 및 유의사항</Card.Title>
                        <Card.Text>
                        <ul>
                            <li> 탈퇴하신 아이디는 복구가 불가능하며, 추후 동일한 아이디로 재가입이 안됩니다.</li>
                            <li> 구직 활동내역, 유료서비스, 포인트가 모두 삭제되며, 삭제된 데이터는 복구되지 않습니다.</li>
                            <li> 회원탈퇴 시 등록하신 게시물은 삭제되지 않으므로 삭제를 원하시면 회원탈퇴 전에 삭제해 주세요.</li>
                        </ul>
                        </Card.Text>
                    </Card.Body>
                </Card>

                <Accordion>
                    <Card>
                        <Card.Header>
                        <Accordion.Toggle as={Button} variant="link" eventKey="0">
                            <input type="checkbox" value="man"/>
                        </Accordion.Toggle>
                        위 안내사항을 모두 확인하였으며 이에 동의하시면 클릭해주세요.
                        </Card.Header>
                        <Accordion.Collapse eventKey="0">
                        <Card.Body>
                            <div>
                            <Form>
                            <Form.Group as={Row} controlId="formPlaintextEmail">
                                <Form.Label column sm="2">
                                Email
                                </Form.Label>
                                <Col sm="10">
                                <Form.Control plaintext readOnly defaultValue="email@example.com" />
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} controlId="formPlaintextPassword">
                                <Form.Label column sm="2">
                                Password
                                </Form.Label>
                                <Col sm="10">
                                <Form.Control type="password" placeholder="Password" />
                                </Col>
                                <Col sm="10">
                                    <label className="DropBox2">※ 탈퇴 후에는 동일 아이디로 다시 가입할 수 없으며, <br/>아이디와 데이터는 복구할 수 없으니 신중하게 선택해 주세요.</label>
                                </Col>
                            </Form.Group>
                            </Form>
                            </div>
                        <div className="DropBtnBox">
                            <Button variant="warning" onClick={drop}>탈퇴</Button>
                            <Button variant="" onClick={cancle}>취소</Button>
                        </div>
                        </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                </Accordion>
            </div>        
        );
    }
}

function drop(e){
    e.preventDefault()
    window.location = './'
}

function cancle(e){
    e.preventDefault()
    window.location = './Mypage'
}

export default Drop;