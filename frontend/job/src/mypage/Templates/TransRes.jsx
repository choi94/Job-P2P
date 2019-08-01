import React, { useState}from 'react'
import {ListGroup, Button} from 'react-bootstrap'
import '../css/index.css'

const TransRes  = (props) => {
    console.dir(props)
    return(
        <div>
            <h2 className="vol">등록자 정보</h2>
            <ListGroup>
                <ListGroup.Item className="TransBox1">
                    <div className="TransBoxTitle">일자리 제목</div>
                    <div>을지로 </div>
                </ListGroup.Item>
                <ListGroup.Item className="TransBox1">
                    <span className="TransBoxTitle">기간 </span>
                    <span>2019/07/17 ~ 2019/07/19</span>
                </ListGroup.Item>
                <ListGroup.Item className="TransBox1">
                    <span className="TransBoxTitle">등록자 이름 </span>
                    <span>홍길동</span>
                </ListGroup.Item>
                <ListGroup.Item className="TransBox1">
                    <span className="TransBoxTitle">등록자 연락처 </span>
                    <span >010-0000-0000</span>
                </ListGroup.Item>
                <ListGroup.Item className="TransBox1">
                    <span className="TransBoxTitle">총 급여 </span>
                    <span>24만원</span>
                </ListGroup.Item>
            </ListGroup>
            <Button variant="warning" className="TransBoxButton">지불</Button>
        </div>
    );
}

export default TransRes;