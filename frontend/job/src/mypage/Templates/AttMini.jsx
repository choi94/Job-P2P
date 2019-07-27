import React from 'react'
import {Table, Button} from 'react-bootstrap'


const AttMini  = ()=>{
    return(
        <Table responsive>
            <thead>
                <tr className="res">
                    <th>#</th>
                    <th>일자리 명</th>
                    <th>거래페이지로 가기</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>Table cell</td>
                    <td><Button variant="success" onClick={trans}>거래</Button></td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Table cell</td>
                    <td><Button variant="success" >거래</Button></td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>Table cell</td>
                    <td><Button variant="success" >거래</Button></td>
                </tr>
            </tbody>
        </Table>
    );
}

function trans(e){
    e.preventDefault()
    window.location = './Trans'
}

export default AttMini;