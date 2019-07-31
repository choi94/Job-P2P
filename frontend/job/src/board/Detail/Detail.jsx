import React,{Component} from 'react'
import {ListGroup,Button,Table,Card,Jumbotron} from 'react-bootstrap';
import GoogleMap from './module/GoogleMap.jsx'
import Geocode from "react-geocode";
import './Detail.css'



Geocode.setApiKey("AIzaSyCX4elAhSF-1mAFON3hiV0JrhMmIxLugz4");
// Enable or disable logs. Its optional.
// Get address from latidude & longitude.
Geocode.fromAddress("서울특별시 강북구 인수동").then(
  response => {
    const { lat, lng } = response.results[0].geometry.location;
    console.log(lat, lng);
  },
  error => {
    console.error(error);
  }
);



const Detail=({match})=>{

    console.log(match)
    return(
            <div className="detail">
                <Jumbotron className="title">
                <h2>
                    저희집에서 일할 분 구합니다. 
                </h2>          
                </Jumbotron>
                <Jumbotron className="title">
                        <p>시작 일자 : 2019년 7월 15일</p>
                        <p>마감 일자 : 2019년 7월 15일</p>
                        <Button variant="primary" >지원하기</Button>
                </Jumbotron>
            <hr/>

            <div className="D_imfo">
            <Card>
                <Card.Header className="D_imfoFont">모집 조건</Card.Header>
                
                <ListGroup>
                            <ListGroup.Item>근무기간 : 2019/07/17 ~ 2019/07/19</ListGroup.Item>
                            <ListGroup.Item>근무시간 : 인원을 뽑은 후 알림</ListGroup.Item>
                            <ListGroup.Item>모집연령 : 2명</ListGroup.Item>
                            <ListGroup.Item>근무지 : </ListGroup.Item>
                            <ListGroup.Item>연령 : </ListGroup.Item>
                            <ListGroup.Item>하루 급여 : 8만원</ListGroup.Item>
                            <ListGroup.Item>총 급여 : 24만원</ListGroup.Item>
                </ListGroup>
            </Card>
            </div>
            <div className="D_imfo">
            <Card>
                <Card.Header className="D_imfoFont">의뢰인 정보</Card.Header>
                
                <ListGroup>
                        <ListGroup.Item>카카오톡 ID : Hong</ListGroup.Item>
                        <ListGroup.Item>의뢰인의 평점 : </ListGroup.Item>
                    </ListGroup>
            </Card>
            </div>

            <div className="D_imfo">
            <Card>
                <Card.Header className="D_imfoFont">상세내용</Card.Header>
                
                <Card body>인근이</Card>
            </Card>
            </div>

            <div className="D_imfo">
            <Card>
                <Card.Header className="D_imfoFont">근무 위치</Card.Header>
                
                <Card body></Card>
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
    

export default Detail