import React,{Component} from 'react'
import {ListGroup,Button,Table,Card,Jumbotron} from 'react-bootstrap';
import axios from 'axios'
import GoogleMap from './module/GoogleMap.jsx'
import Geocode from "react-geocode";

import './Detail.css'

class Detail extends Component{
    state={
        member:[],
        Location:[]
    }

    componentWillMount(){
        console.log("인근1")
        axios.get(`http://localhost:9000/work/board/detailList/${this.props.match.params.bno}`)
        .then(res => {
            this.setState(
                res.data.board[0],
            )
            Geocode.setApiKey("AIzaSyCX4elAhSF-1mAFON3hiV0JrhMmIxLugz4");
            Geocode.fromAddress(`${res.data.board[0].cityArea}`).then(
            response => {
                const { lat, lng } = response.results[0].geometry.location;
                const latL= lat
                const lngL= lng
                this.setState({
                    Location: this.state.Location.concat({latL,lngL})
                })
                },
            error => {
                console.error(error);
            }
            );
        }).catch( error => {
                alert('실패')
        })

     
    } 


    render(){
  
        return(
            <div className="detail">
                <Jumbotron className="title">
                <h2>
                    {this.state.title}
                </h2>          
                </Jumbotron>
                <Jumbotron className="title">
                        <p>진행 상태 : {this.state.progressState}</p>
                        <p>마감 일자 : {this.state.recruit}</p>
                        <Button variant="primary" >지원하기</Button>
                </Jumbotron>
            <hr/>
            <div className="D_imfo">
            <Card>
                <Card.Header className="D_imfoFont">모집 조건</Card.Header>
                
                <ListGroup>
                            <ListGroup.Item>근무기간 : {this.state.workDay}</ListGroup.Item>
                            <ListGroup.Item>근무기간 일 : {this.state.workDateDay}</ListGroup.Item>
                            <ListGroup.Item>근무시간 : {this.state.workTime}</ListGroup.Item>
                            <ListGroup.Item>모집연령 : {this.state.workAge}</ListGroup.Item>
                            <ListGroup.Item>모집연령  : {this.state.workAge}</ListGroup.Item>
                            <ListGroup.Item>근무지 : {this.state.cityArea}</ListGroup.Item>
                            <ListGroup.Item>하루 급여 : {this.state.daySalary}</ListGroup.Item>
                            <ListGroup.Item>총 급여 : {this.state.totalSalary}</ListGroup.Item>
                </ListGroup>
            </Card>
            </div>
            <div className="D_imfo">
            <Card>
                <Card.Header className="D_imfoFont">의뢰인 정보</Card.Header>
                
                <ListGroup>
                        <ListGroup.Item>카카오톡 ID : {this.state.kakao}</ListGroup.Item>
                        <ListGroup.Item>의뢰인의 평점 : {this.state.member.volunteerScore}</ListGroup.Item>
                    </ListGroup>
            </Card>
            </div>

            <div className="D_imfo">
            <Card>
                <Card.Header className="D_imfoFont">상세내용</Card.Header>
                
                <Card body>{this.state.contents}</Card>
            </Card>
            </div>

            <div className="D_imfo">
            <Card>
                <Card.Header className="D_imfoFont">근무 위치</Card.Header>
            <Card body>{<GoogleMap Lo={this.state.Location[0]}/>}</Card>
            </Card>
            </div>

            <div className="D_imfo">
            <Card>
                <Card.Header className="D_imfoFont">꼭 확인하세요!</Card.Header>
                <Card.Body>
                <Card.Title>지원하기전에 3가지를 꼭 확인하세요.</Card.Title>
                    <ul className="footerConfom">
                        <li>1. 자신과 맞는 일자리 인지 확인하세요.</li>
                        <li>2. 일자리 의뢰인 정보를 꼭 확인하세요.</li>
                        <li>3. 지원하기 전 근무 위치를 꼭 확인하세요.</li>
                    </ul>
                </Card.Body>
            </Card>
            </div>
        </div>
        )
    }
   
} 
    



export default Detail