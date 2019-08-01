import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter, MDBInput } from 'mdbreact';
import {CardGroup,Card,Button} from 'react-bootstrap'
import { Link } from "react-router-dom";


const DeclarInfo = (props) => {
    const localhost = 'http://localhost:9000'
    const [email, setEmail] = useState()
    const [name, setName] = useState()
    const [nickname, setNickname] = useState()
    const [gender, setGender] = useState()
    const [volunteer, setVolunteer] = useState()
    const [request, setRequest] = useState()
    const [point, setPoint] = useState()
    const [phone, setPhone] = useState()

    const [modal , setModal] = useState(false)
    const [radio, setRadio] = useState(10000)

    useEffect( () => {
        axios.get(`${localhost}/member/my/${sessionStorage.getItem('id')}`)
            .then( res => {
                setName(res.data.member.name)
                setNickname(res.data.member.nickname)
                setEmail(res.data.member.email)
                setGender(res.data.member.gender)
                setVolunteer(res.data.member.volunteerScore)
                setRequest(res.data.member.requestScore)
                setPoint(res.data.member.point)
                setPhone(res.data.member.phone)
                props.vol_boardList(res.data.volunteer_board)
            })
            .catch( error => {
                // alert('오류가 발생했습니다.')
            })
    },[])



    const point_charging = () => {
        if (window.confirm("정말로 충전 하시겠습니까?")){
            setModal(!modal)
                axios.patch(`${localhost}/member/${sessionStorage.getItem('id')}/${point + radio}`)
                    .then( res => {
                        setPoint(point + radio)
                        alert("포인트 충전 완료")
                    })
                    .catch( error => {
                        alert("알수 없는 오류가 발생했습니다.")
                    })
        }
    }

    const modal_toggle = () => {
        setModal(!modal)
    }

    const onClick = (nr) => () => {
        setRadio(nr)
    }



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
                            <td class="cc">{point}원 <MDBBtn color="info" onClick={modal_toggle} size="sm">충전하기</MDBBtn></td>
                        </tr>
                    </table>
                    </Card.Text>
                </Card.Body>
            </Card>
 
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title className="aa">회원정보 <Link to={{pathname : '/infoUpdate',
                        state : {
                            email : email,
                            nickname : nickname,
                            phone : phone
                        }
                    }
                    }>
                    <Button  variant="warning" >수정</Button></Link></Card.Title>
                    <Card.Text>
                    </Card.Text>
                    <Card.Title className="aa">회원탈퇴 <Link to={{pathname : '/drop', state : {email : email}}}><Button variant="success">탈퇴</Button></Link></Card.Title>
                    <Card.Text>
                    </Card.Text>
                </Card.Body>
            </Card>

            {/*modal*/}
            <MDBModal isOpen={modal} toggle={modal_toggle} centered>
                <MDBModalHeader toggle={modal_toggle}>포인트 충전</MDBModalHeader>
                <MDBModalBody className="d-flex justify-content-center">
                    <MDBInput style={{width : 15, height : 15}} gap onClick={onClick(10000)} checked={radio === 10000 ? true : false} label="1만원" type="radio"
                              id="radio1" />
                    <MDBInput style={{width : 15, height : 15}} gap onClick={onClick(50000)} checked={radio === 50000 ? true : false} label="5만원" type="radio"
                              id="radio2" />
                    <MDBInput style={{width : 15, height : 15}} gap onClick={onClick(100000)} checked={radio === 100000 ? true : false} label="10만원" type="radio"
                              id="radio3" />
                    <MDBInput style={{width : 15, height : 15}} gap onClick={onClick(300000)} checked={radio === 300000 ? true : false} label="30만원" type="radio"
                              id="radio4" />
                </MDBModalBody>
                <MDBModalFooter>
                    <MDBBtn color="secondary" onClick={modal_toggle}>취소</MDBBtn>
                    <MDBBtn color="primary" onClick={point_charging}>충전하기</MDBBtn>
                </MDBModalFooter>
            </MDBModal>

    </CardGroup>
    )
}

export default DeclarInfo