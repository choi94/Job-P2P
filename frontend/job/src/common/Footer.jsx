import React from 'react'
import {Jumbotron,Button,Card} from 'react-bootstrap';
import './commom.css'

const Footer=()=>{
    return(
        <div className="footer">
    <Jumbotron> 
          <h1>편리하게 일자리를 구할 수 있습니다.</h1>
          <p></p>
          <p>
            <Button variant="primary">Try Member</Button>
          </p>
    </Jumbotron>
        <Card className="text-center">
            <Card.Header></Card.Header>
            <Card.Body>
                <Card.Title>Footer</Card.Title>
                <Card.Text>
                With supporting text below as a natural lead-in to additional content.
                </Card.Text>
            </Card.Body>
            <Card.Footer className="text-muted">@capiright create : 정인근 최동훈 심신강</Card.Footer>
        </Card>
        </div>
    )
}
export default Footer