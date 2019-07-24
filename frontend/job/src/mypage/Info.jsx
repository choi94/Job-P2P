import React from 'react'
import {CardGroup,Card,Button} from 'react-bootstrap'
const DeclarInfo =()=>{

    return(
        <CardGroup>
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>***님의 정보</Card.Title>
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
                    <Card.Title>평점/Point</Card.Title>
                    <Card.Text>
                    <table>
                        <tr>
                            <td>지원 평점: 0점 / 5점</td>
                        </tr>
                    </table>
                    </Card.Text>
                    <Card.Text>
                    <table>
                        <tr>
                            <td>의뢰 평점: 0점 / 5점</td>
                        </tr>
                    </table>
                    </Card.Text>
                    <Card.Text>
                    <table>
                        <tr>
                            <td>포인트: 30000</td>
                        </tr>
                    </table>
                    </Card.Text>
                </Card.Body>
            </Card>
 
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>회원정보 <Button variant="warning">수정</Button></Card.Title>
                    <Card.Text>
                    </Card.Text>
                    <Card.Title>회원탈퇴 <Button variant="success">탈퇴</Button></Card.Title>
                    <Card.Text>
                    </Card.Text>
                </Card.Body>
            </Card>
    </CardGroup>
    )
}
export default DeclarInfo