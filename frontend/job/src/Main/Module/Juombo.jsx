import React from 'react'
import {Jumbotron,Button} from 'react-bootstrap';
import '../Main.css';

const Juombo =()=>{

    return(
      <Jumbotron > 
          <h1>일자리 p2p 환영합니다.</h1>
          <p>
           일자리 p2p
          </p>
          <p>
            <Button variant="primary">일자리 구하기</Button>
          </p>
    </Jumbotron>
    )
}

export default Juombo