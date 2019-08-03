import React, { useState }from 'react'
import axios from 'axios'
import {ListGroup, Button} from 'react-bootstrap'
import '../css/index.css'

const TransRes  = (props) => {
    const localhost = 'http://localhost:9000'

    const payment = () => {
        let data = {
            vol_id : props.volunteer.id,
            req_id : props.board.board.member.id,
            point : props.board.board.totalSalary * 10000,
        }

        axios.post(`${localhost}/progress/payment/${props.board.board.member.id}/${props.volunteer.id}/${props.board.board.totalSalary * 10000}`)
            .then( res => {
                props.mypageMove()
            })
            .catch( error => {
                alert('실패')
            })
    }


    console.dir(props)
    return(
        <div>
            <h2 className="vol">의뢰자 정보</h2>
            <ListGroup>
                <ListGroup.Item className="TransBox1">
                    <div className="TransBoxTitle">일자리 제목</div>
                    <div>{props.board.board.title}</div>
                </ListGroup.Item>
                <ListGroup.Item className="TransBox1">
                    <div className="TransBoxTitle">기간 </div>
                    <div className="TransBoxYear">{props.board.board.workDay}</div>
                </ListGroup.Item>
                <ListGroup.Item className="TransBox1">
                    <div className="TransBoxTitle">근무 시간 </div>
                    <div className="TransBoxYear">{props.board.board.workTime}</div>
                </ListGroup.Item>
                <ListGroup.Item className="TransBox1">
                    <div className="TransBoxTitle">의뢰자 이름 </div>
                    <div>{props.board.board.member.name}</div>
                </ListGroup.Item>
                <ListGroup.Item className="TransBox1">
                    <div className="TransBoxTitle">의뢰자 연락처 </div>
                    <div >{props.board.board.member.phone}</div>
                </ListGroup.Item>
                <ListGroup.Item className="TransBox1">
                    <div className="TransBoxTitle">총 급여 </div>
                    <div>{props.board.board.totalSalary}만원</div>
                </ListGroup.Item>
            </ListGroup>
            {props.board.board.member.id == sessionStorage.getItem('id') ?
                <Button onClick={payment} variant="success" className="TransBoxButton">급여 지불</Button> :
                null
            }

        </div>
    );
}

export default TransRes;