import React from 'react'
import axios from 'axios'
import {ListGroup, Button} from 'react-bootstrap'
import '../css/index.css'

const TransSup  = (props) => {
    const localhost = 'http://localhost:9000'

    const trans_end = () => {
        axios.post(`${localhost}/progress/trans/end/${props.board.board.id}`)
            .then( res => {
                alert('거래가 종료 되었습니다.')
                props.mypageMove()
            })
            .catch( error => {
                alert('알 수 없는 오류가 발생했습니다.')
            })
    }

    return(
        <div>
            <h2 className="vol">지원자 정보</h2>
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
                    <div className="TransBoxTitle">지원자 이름 </div>
                    <div>{props.volunteer.name}</div>
                </ListGroup.Item>
                <ListGroup.Item className="TransBox1">
                    <div className="TransBoxTitle">지원자 연락처 </div>
                    <div >{props.volunteer.phone}</div>
                </ListGroup.Item>
                <ListGroup.Item className="TransBox1">
                    <div className="TransBoxTitle">총 급여 </div>
                    <div>{props.board.board.totalSalary}만원</div>
                </ListGroup.Item>
            </ListGroup>
            {props.volunteer.id == sessionStorage.getItem('id') ?
                <Button onClick={trans_end} variant="success" className="TransBoxButton">입금확인 완료</Button> :
                null
            }
        </div>
    );
}

export default TransSup;