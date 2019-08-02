import React, { useState }from 'react'
import {ListGroup} from 'react-bootstrap'
import ResMiniList from './ResMiniList'


const ResMini  = (props) => {
    return( 
        <ListGroup>
            <ListGroup.Item className="ResBox">
                <div className="ResBoxTitle">#</div>
                <div className="ResBoxTitle1">지원일</div>
                <div className="ResBoxTitle1">일자리 명</div>
                <div className="ResBoxTitle2">총 급여</div>
                <div className="ResBoxTitle2">마감일</div>
                <div className="ResBoxTitle2">상태</div>
            </ListGroup.Item>
            {props.vol_boardList.map( (value, index) => {
                return <ResMiniList list={value} index={index}/>
            })}
        </ListGroup>
    );
}

export default ResMini;