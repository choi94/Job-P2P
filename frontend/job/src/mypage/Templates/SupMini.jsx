import React, { useState } from 'react'
import {Table, Modal, Button, ListGroup} from 'react-bootstrap'


const SupMini  = ()=>{

    return(
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
                    <Sup/>
                    </td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Table cell</td>
                    <td>Table cell</td>
                    <td>Table cell</td>
                    <td><Sup/></td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>Table cell</td>
                    <td>Table cell</td>
                    <td>Table cell</td>
                    <td><Sup/></td>
                </tr>
            </tbody>
            
        </Table>
    );
}

function Sup() {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>
        <Button variant="primary" onClick={handleShow}>지원자 현황</Button>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>지원자 현황</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <ListGroup>
                        <ListGroup.Item>
                            <span className="list">이름 : 홍길동</span>
                            <span className="list">나이 : 28세</span>
                            <span className="list">성별 : 남</span>
                            <span className="list">번호 : 010-0000-0000</span>
                        </ListGroup.Item>
                    </ListGroup>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>Close</Button>
                </Modal.Footer>
            </Modal>
      </>
    );
}



export default SupMini;