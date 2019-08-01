import React from 'react'
import {ListGroup, Modal} from "react-bootstrap";

const SupModalList = (props) => {
    return (
        <Modal.Body>
            <ListGroup>
                <ListGroup.Item>
                    <span className="list">이름 : {props.modalList.name}</span>
                    <span className="list">성별 : {props.modalList.gender}</span>
                    <span className="list">생년월일 : {props.modalList.ssn.substring(0, 2)}년생</span>
                    <span className="list">평점 : {props.modalList.volunteerScore}점</span>
            </ListGroup.Item>
        </ListGroup>
    </Modal.Body>
    )
}

export default SupModalList