import React, {useEffect, useState} from 'react'
import axios from 'axios';
import {Table, Modal, Button, ListGroup} from 'react-bootstrap'

const SupMini = (props) => {
    const [show, setShow] = useState(false);
    
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const localhost = 'http://localhost:9000'
    const [boardList, setBoardList] = useState()
    const [id, setId] = useState()
    const [title, setTitle] = useState()
    const [writeDate, setWriteDate] = useState()
    const [recruit, setRecruit] = useState()

    const array2 = [
        '홍길동',
        '27',
        '남',
        '010-0000-0000'
    ]

    const [name, age, gender, phone] = array2;

    const test10 = () => {
        props.boardList.map( (value, index) => {
            console.log(value)
        })

    }
        
        return(
            <div>
                <Table responsive>
                    <thead>
                        <tr className="res">
                            <th>#</th>
                            <th>등록일</th>
                            <th>일자리명 </th>
                            <th>마감일</th>
                            <th>지원자 현황 보기</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{id}</td>
                            <td>{writeDate}</td>
                            <td>{title}</td>
                            <td>{recruit}</td>
                            <td>
                                <div>
                                    <Button variant="primary" onClick={handleShow}>지원자 현황</Button>
                                    <Modal show={show} onHide={handleClose}>
                                        <Modal.Header closeButton>
                                            <Modal.Title>지원자 현황</Modal.Title>
                                        </Modal.Header>
                                        <Modal.Body>
                                            <ListGroup>
                                                <ListGroup.Item >
                                                    <span className="list">이름 : {name}</span>
                                                    <span className="list">나이 : {age}</span>
                                                    <span className="list">성별 : {gender}</span>
                                                    <span className="list">번호 : {phone}</span>
                                                </ListGroup.Item>
                                            </ListGroup>
                                        </Modal.Body>
                                        <Modal.Footer>
                                            <Button variant="secondary" onClick={handleClose}>Close</Button>
                                        </Modal.Footer>
                                    </Modal>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Table cell</td>
                            <td>Table cell</td>
                            <td>Table cell</td>
                            <td><div/></td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>Table cell</td>
                            <td>Table cell</td>
                            <td>Table cell</td>
                            <td><div/></td>
                        </tr>
                    </tbody>
                    <input type="button" value="테스트" onClick={test10}/>
                </Table>
                
            </div>
        );
    }

export default SupMini;