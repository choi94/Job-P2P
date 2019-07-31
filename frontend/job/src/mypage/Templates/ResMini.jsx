import React, { useState}from 'react'
import {Table} from 'react-bootstrap'
import ResMiniList from './ResMiniList'


const ResMini  = (props) => {
    console.dir(props)
    return(
        <div>
             <Table responsive>
                <thead>
                <tr className="res">
                    <th>#</th>
                    <th>지원일</th>
                    <th>일자리명 </th>
                    <th>총 급여</th>
                    <th>마감일</th>
                    <th>상태</th>
                </tr>
                </thead>
                 {props.vol_boardList.map( (value, index) => {
                 return <ResMiniList list={value} index={index}/>
                })}
            </Table>
        </div>
    );
}

export default ResMini;