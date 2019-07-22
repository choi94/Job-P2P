import React from 'react'
import {Jumbotron,Container} from 'react-bootstrap';

const FooterInfo =()=>{
    
    return(
    <Jumbotron fluid className="footerInfoBox">
        <Container>
            <h1>지금부터 시작하세요.</h1>
            <p>
            개인과 개인의 일자리 중심의 사이트입니다. 가입 후 시작해보세요.
            </p>
        </Container>
    </Jumbotron>
    )
}
export default FooterInfo