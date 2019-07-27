import React, { useState } from 'react'
import axios from 'axios';
import {Table, Modal, Button, ListGroup} from 'react-bootstrap'

const SupMini = () => {
    const [show, setShow] = useState(false);
    
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    const state = {
        array : [
            {
                name: '홍길동',
                age: '27',
                gender: '남',
                phone: '010-0000-0000'
            },
            {
                name: '길동',
                age: '26',
                gender: '남',
                phone: '010-1111-0000'
            }
        ]
    } 

    const handleCreate = (data) => {
        const { array } = state;
        state({
            array: array.concat({ id: this.id++, ...data })
        })
    }

    const { array } = state;

    const array2 = [
        '홍길동',
        '27',
        '남',
        '010-0000-0000'
    ]

    const [name, age, gender, phone] = array2;
        
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
                            <td>1</td>
                            <td>Table cell</td>
                            <td>Table cell</td>
                            <td>Table cell</td>
                            <td>
                                <div onCreate={handleCreate}>
                                    <Button variant="primary" onClick={handleShow}>지원자 현황</Button>
                                    <Modal show={show} onHide={handleClose}>
                                        <Modal.Header closeButton>
                                            <Modal.Title>지원자 현황</Modal.Title>
                                        </Modal.Header>
                                        <Modal.Body data={state.array}>
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
                                <div onCreate={handleCreate}>{JSON.stringify(array)}</div>
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
                </Table>
                
            </div>
        );
    }

export default SupMini;