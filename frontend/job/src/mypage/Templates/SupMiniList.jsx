import React, {useState} from 'react'
import {Button, ListGroup, Modal} from "react-bootstrap";
import { Link } from "react-router-dom";

const SupMiniList = (props) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
            <tbody>
            <tr> {/*등록 현황*/}
                <td>{props.index + 1}</td>
                <td>{props.list.writeDate.substring(0, 10)}</td>
                <Link to={`/detail/${props.list.id}`}>
                    <td>{props.list.title}</td>
                </Link>
                <td>{props.list.recruit.substring(13)}</td>
                <td>
                    <div>
                        <Button variant="primary" onClick={handleShow}>지원자 현황</Button>
                        <Modal show={show} onHide={handleClose}>
                            <Modal.Header closeButton>
                                <Modal.Title>지원자 현황</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <ListGroup>
                                    <ListGroup.Item> {/*모달 안*/}
                                        <span className="list">이름 : {'이름'}</span>
                                        <span className="list">나이 : {'나이'}</span>
                                        <span className="list">성별 : {'성별'}</span>
                                        <span className="list">번호 : {'번호'}</span>
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
        </tbody>
    )
}

export default SupMiniList