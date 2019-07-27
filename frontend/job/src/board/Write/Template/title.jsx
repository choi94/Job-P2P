import React from 'react'
import {Form,Table} from 'react-bootstrap';
import '../Write.css'

const title =()=>{

    return(
        <Table responsive>
                <thead>
                    <p className="imfop">제목</p>
                </thead>
                <tbody>
                    <tr>
                        <td>
                        <Form.Control type="text" placeholder="제목" />
                        </td>
                    </tr>
                </tbody>
        </Table>
            )
}
export default title