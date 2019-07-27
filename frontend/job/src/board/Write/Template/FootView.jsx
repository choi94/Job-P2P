import React from 'react'
import {Table, Card} from 'react-bootstrap';

const FootView = () =>{

    return(
       
        <Table responsive>
                <thead>
                    <tr>
                    <th colSpan="3"  className="imfo1">저장하기 전 꼭 확인하세요!</th>
                    </tr>
                </thead>
                <tbody>
            <Card>
                <Card.Body>
                <ul>
                    <li></li>
                </ul>
                </Card.Body>
            </Card>
                </tbody>
        </Table>
    )
}
export default FootView