import React from 'react'
import {Table} from 'react-bootstrap'
import _mng from '../images/_mng.png'

const ResMini  = ()=>{
    return(
    <Table responsive>
        <thead>
        <tr>
            <th>#</th>
            <th>지원일</th>
            <th>등록내역</th>
            <th>일자리명 / 모집제목</th>
            <th>급여</th>
            <th>마감일</th>
        </tr>
        </thead>
        <tbody>
        <tr>
            <td>1</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>

        </tr>
        <tr>
            <td>2</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>

        </tr>
        <tr>
            <td>3</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>

        </tr>
        </tbody>
</Table>
    );
}

export default ResMini;