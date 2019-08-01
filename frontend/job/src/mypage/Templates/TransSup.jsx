import React, { useState}from 'react'
import {Table, Button} from 'react-bootstrap'

const TransSup  = (props) => {
    console.dir(props)
    return(
        <div>
            <Table>
                <thead>
                    <tr>
                        <td className="vol">지원자 정보</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>일자리 제목</th>
                        <th>을지로 이사 도우미</th>
                    </tr>
                    <tr>
                        <th>기간</th>
                        <th>2019/07/17 ~ 2019/07/19</th>
                    </tr>
                    <tr>
                        <th>지원자 이름</th>
                        <th>홍길동</th>
                    </tr>
                    <tr>
                        <th>지원자 연락처</th>
                        <th>010-0000-0000</th>
                    </tr>
                    <tr>
                        <th>총 급여</th>
                        <th>24만원</th>
                    </tr>
                </tbody>
            </Table><br/>
            <Button variant="success">확인</Button>
        </div>
    );
}

export default TransSup;