import React from 'react'
import {Jumbotron, Button, Card} from 'react-bootstrap';
import './css/commom.css'

const Footer=()=>{
    return(
        <Card className="text-center">
            <Card.Body className="footerBody">
            <div class="row">
                <div class="col-sm-4">
                    <h5>정인근</h5>
                    <a href="https://github.com/IngeunJ">https://github.com/IngeunJ</a>
                </div>
                <div class="col-sm-4">
                    <h5>최동훈</h5>
                    <a href="https://github.com/choi94">https://github.com/choi94</a>
                </div>
                <div class="col-sm-4">
                    <h5>심신강</h5>
                    <a href="https://github.com/simsinkang">https://github.com/simsinkang</a>
                </div>
        </div>
        </Card.Body>
        <Card.Footer className="footer-text">
           <div class="container">
                <h2> JOB P2P</h2>
            </div>
            <div>
                <p>copyright@ All rights reserved.</p>
            </div>
        </Card.Footer>
        </Card>
    )
}
export default Footer