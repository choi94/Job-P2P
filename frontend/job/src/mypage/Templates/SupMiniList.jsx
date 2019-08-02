import React, { useState } from 'react'
import {Button, Modal} from "react-bootstrap";
import { Link } from "react-router-dom";
import SupModalList from './SupModalList.jsx'

const SupMiniList = (props) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
            <tbody>
            <tr> {/*등록 현황*/}
                <td>{props.index + 1}</td>
                <td>{props.list.board.writeDate.substring(0, 10)}</td>
                <Link to={`/detail/${props.list.board.id}`}>
                    <td>{props.list.board.title}</td>
                </Link>
                <td>{props.list.board.recruit.substring(13)}</td>
                <td>
                    <div>
                        {props.list.member.length != 0 ? <Button variant="primary" onClick={handleShow}>지원자 현황</Button> : null}

                        <Modal show={show} onHide={handleClose}>
                            <Modal.Header closeButton>
                                <Modal.Title>지원자 현황</Modal.Title>
                            </Modal.Header>
                                {props.list.member.map( (value, index) => {
                                    return <SupModalList vol={props.list.volunteer[index]} modalList={value} index={index}/>
                                })}
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