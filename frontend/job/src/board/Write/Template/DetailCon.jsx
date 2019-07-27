import React from 'react'
import {Form, Table} from 'react-bootstrap';
import '../Write.css'
const DetailCon = ()=>{

    return(
        <Table responsive>
                <thead>
                    <p className="imfop">상세내용</p>
                </thead>
                <tbody>
                    <tr>
                        <td>
                        <Form.Group controlId="exampleForm.ControlTextarea1">
                            <Form.Control as="textarea" rows="10" />
                        </Form.Group>
                        </td>
                    </tr>
                </tbody>
            </Table>
                    
            
    )
}
export default DetailCon