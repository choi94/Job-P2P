import React from 'react'
import { Link } from "react-router-dom";
import {Jumbotron, Container, Button} from 'react-bootstrap';
import '../Main.css'


const FooterInfo =()=>{
    
    return(
    <Jumbotron fluid className="footerInfoBox">
        <Container align="center">
            <h1 className="footerInfo">지금부터 당신의 재능을 보여주세요</h1>
            <p className="footerInfo1">나의 재능을 잘 펼칠 수 있는 일자리를 매칭 받으세요.</p><br/>
            <p><NavLink to="/board"><Button variant="primary">일자리 찾기</Button></NavLink></p>
        </Container>
    </Jumbotron>
    )
}
export default FooterInfo