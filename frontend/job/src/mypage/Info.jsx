import React from 'react'
import {CardGroup,Card,Button} from 'react-bootstrap'

const DeclarInfo =()=>{

    return(
        <CardGroup>
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title className="aa">***님의 정보</Card.Title>
                    <Card.Text>
                    <table>
                        <tr>
                            <td class="bb">E-메일</td>
                            <td class="cc">Hong@naver.com</td>
                        </tr>
                        <tr>
                            <td class="bb">이름</td>
                            <td class="cc">홍길동</td>
                        </tr>
                        <tr>
                            <td class="bb">성별</td>
                            <td class="cc">남</td>
                        </tr>
                    </table>
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title className="aa">평점/Point</Card.Title>
                    <Card.Text>
                    <table>
                        <tr>
                            <td class="bb">지원 평점 :</td>
                            <td class="cc">0점 / 5점</td>
                        </tr>
                    </table>
                    </Card.Text>
                    <Card.Text>
                    <table>
                        <tr>
                            <td class="bb">의뢰 평점 :</td>
                            <td class="cc">0점 / 5점</td>
                        </tr>
                    </table>
                    </Card.Text>
                    <Card.Text>
                    <table>
                        <tr>
                            <td class="bb">포인트 :</td>
                            <td class="cc">30000점</td>
                        </tr>
                    </table>
                    </Card.Text>
                </Card.Body>
            </Card>
 
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title className="aa">회원정보 <Button variant="warning" onClick={update}>수정</Button></Card.Title>
                    <Card.Text>
                    </Card.Text>
                    <Card.Title className="aa">회원탈퇴 <Button variant="success" onClick={drop}>탈퇴</Button></Card.Title>
                    <Card.Text>
                    </Card.Text>
                </Card.Body>
            </Card>
    </CardGroup>
    )
}

function update(e){
    e.preventDefault()
    window.location = './InfoUpdate'
}

function drop(e){
    e.preventDefault()
    window.location = './Drop'
}

export default DeclarInfo