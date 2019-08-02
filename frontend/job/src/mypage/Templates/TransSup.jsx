import React, { useState}from 'react'
import {ListGroup, Button} from 'react-bootstrap'
import '../css/index.css'

const TransSup  = (props) => {
    console.dir(props)
    return(
        <div>
            <h2 className="vol">지원자 정보</h2>
            <ListGroup>
                <ListGroup.Item className="TransBox1">
                    <div className="TransBoxTitle">일자리 제목</div>
                    <div>을지로 </div>
                </ListGroup.Item>
                <ListGroup.Item className="TransBox1">
                    <div className="TransBoxTitle">기간 </div>
                    <div>2019/07/17 ~ 2019/07/19</div>
                </ListGroup.Item>
                <ListGroup.Item className="TransBox1">
                    <div className="TransBoxTitle">지원자 이름 </div>
                    <div>홍길동</div>
                </ListGroup.Item>
                <ListGroup.Item className="TransBox1">
                    <div className="TransBoxTitle">지원자 연락처 </div>
                    <div >010-0000-0000</div>
                </ListGroup.Item>
                <ListGroup.Item className="TransBox1">
                    <div className="TransBoxTitle">총 급여 </div>
                    <div>24만원</div>
                </ListGroup.Item>
            </ListGroup>
            <Button variant="success" className="TransBoxButton">확인</Button>
        </div>
    );
}

export default TransSup;