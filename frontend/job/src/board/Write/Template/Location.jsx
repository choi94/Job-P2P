import React from 'react'
import {Form, Button, Table, Card, Col} from 'react-bootstrap';

const Location = () =>{
    return(
  
        <Table responsive>
                <thead>
                    <tr>
                        <th colSpan="3"  className="imfo1">근무 위치</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th colSpan="3">
                            <div className="w_table">
                                <div className="w_table">
                                    <p>위치 : </p>
                                </div>
                            <div className="w_table1">
                                <Form.Control type="text" />
                            </div>
                            </div> 
                        </th>
                    </tr>
                </tbody>
        </Table>
    )
}
export default Location