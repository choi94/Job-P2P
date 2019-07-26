import React, {useState, useE, useEffect} from 'react'
import axios from 'axios'
import {CardGroup,Card,Button} from 'react-bootstrap'

const DeclarInfo = ({history}) => {
    const localhost = 'http://localhost:9000'
    const [email, setEmail] = useState()
    const [name, setName] = useState()
    const [nickname, setNickname] = useState()
    const [gender, setGender] = useState()
    const [volunteer, setVolunteer] = useState()
    const [request, setRequest] = useState()
    const [point, setPoint] = useState()

    useEffect( () => {
        console.log('res')
        axios.get(`${localhost}/member/my/${sessionStorage.getItem('id')}`)
            .then( res => {
                console.dir(res)
                setName(res.data.member.name)
                setNickname(res.data.member.nickname)
                setEmail(res.data.member.email)
                setGender(res.data.member.gender)
                setVolunteer(res.data.member.volunteerScore)
                setRequest(res.data.member.requestScore)
                setPoint(res.data.member.point)
            })
            .catch( error => {
                // alert('오류가 발생했습니다.')
            })
    },[])



    return(
        <CardGroup>
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title className="aa">{nickname}님의 정보</Card.Title>
                    <Card.Text>
                    <table>
                        <tr>
                            <td class="bb">E-메일</td>
                            <td class="cc">{email}</td>
                        </tr>
                        <tr>
                            <td class="bb">이름</td>
                            <td class="cc">{name}</td>
                        </tr>
                        <tr>
                            <td class="bb">성별</td>
                            <td class="cc">{gender}</td>
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
                            <td class="cc">{volunteer}점 / 5점</td>
                        </tr>
                    </table>
                    </Card.Text>
                    <Card.Text>
                    <table>
                        <tr>
                            <td class="bb">의뢰 평점 :</td>
                            <td class="cc">{request}점 / 5점</td>
                        </tr>
                    </table>
                    </Card.Text>
                    <Card.Text>
                    <table>
                        <tr>
                            <td class="bb">포인트 :</td>
                            <td class="cc">{point}점</td>
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