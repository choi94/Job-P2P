import React from 'react'
import {CardDeck,Card} from 'react-bootstrap';

const Introduce =()=>{

    return(
        <CardDeck>
            <Card>
                <Card.Body>
                <Card.Title>1단계</Card.Title>
                <Card.Text>
                    회원가입 후 해주세요.
                </Card.Text>
                </Card.Body>
            </Card>
            <Card>
                <Card.Body>
                <Card.Title>2단계</Card.Title>
                <Card.Text>
                    게시글을 보고 신청하거나
                    일자리를 등록해 주세요.
                </Card.Text>
                </Card.Body>
            </Card>
            <Card>
                <Card.Body>
                <Card.Title>3단계</Card.Title>
                <Card.Text>
                  일이 끝난 후 결재를 하여
                  포인트로 쌓아가세요.
                </Card.Text>
                </Card.Body>
            </Card>
        </CardDeck> 
    )
}
export default Introduce


