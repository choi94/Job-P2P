import React, {useEffect, useState} from 'react'
import {Button, ListGroup, Modal} from "react-bootstrap";
import { Link } from "react-router-dom";
import SupModalList from "./SupModalList"

const SupMiniList = (props) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <ListGroup>
            <ListGroup.Item className="SupBox">
                <div className="SupBoxTitle">{props.index + 1}</div>
                <div className="SupBoxTitle1">{props.list.board.writeDate.substring(0, 10)}</div>
                <div className="SupBoxTitle1">
                    <Link to={`/detail/${props.list.board.id}`}>
                        <td>{props.list.board.title}</td>
                    </Link>
                </div>
                <div className="SupBoxTitle2">{props.list.board.recruit.substring(13)}</div>
                <div className="SupBoxTitle2">
                {props.list.member.length != 0 ? <Button variant="primary" onClick={handleShow}>지원자 현황</Button> : null}
                    <Modal show={show} onHide={handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>지원자 현황</Modal.Title>
                        </Modal.Header>
                        {props.list.member.map( (value, index) => {
                            return <SupModalList modalList={value} index={index}/>
                        })}
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>Close</Button>
                        </Modal.Footer>
                    </Modal>
                </div>
            </ListGroup.Item>
        </ListGroup>
    )
}

export default SupMiniList