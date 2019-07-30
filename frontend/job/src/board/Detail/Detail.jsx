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


class Detail extends Component {
    render(){
        return(
            <div className="detail">
                <Jumbotron className="title">
                <h2>
                    저희집에서 일할 분 구합니다. 
                </h2>          
                </Jumbotron>
                <Jumbotron className="title">
                        <p>진행 상태 : 진행 중</p>
                        <p>마감 일자 : 2019년 8월 15일</p><br/>
                        <Button variant="primary" >지원하기</Button>
                </Jumbotron>
            <hr/>

            <div className="D_imfo">
            <Table responsive>
                    <thead>
                        <tr>
                            <th colSpan="3" className="D_imfoFont">모집 조건</th>
                        </tr>
                    </thead>
                    <tbody>
                    <ListGroup>
                        <ListGroup.Item>근무기간 : 2019/07/17 ~ 2019/07/19</ListGroup.Item>
                        <ListGroup.Item>근무기간 일 : 3일</ListGroup.Item>
                        <ListGroup.Item>근무시간 : 11:00 ~ 15:00</ListGroup.Item>
                        <ListGroup.Item>모집연령 : 20대 ~ 30대</ListGroup.Item>
                        <ListGroup.Item>근무지 : </ListGroup.Item>
                        <ListGroup.Item>하루 급여 : 8만원</ListGroup.Item>
                        <ListGroup.Item>총 급여 : 24만원</ListGroup.Item>
                    </ListGroup>
                    </tbody>
            </Table>
            </div>
            <div className="D_imfo">
            <Table responsive>
                    <thead>
                        <tr>
                            <th colSpan="3" className="D_imfoFont">의뢰인 정보</th>
                        </tr>
                    </thead>
                    <tbody>
                    <ListGroup>
                        <ListGroup.Item>카카오톡 ID : Hong</ListGroup.Item>
                        <ListGroup.Item>의뢰인의 평점 : </ListGroup.Item>
                    </ListGroup>
                    </tbody>
            </Table>
            </div>

            <div className="D_imfo">
            <Table responsive>
                    <thead>
                        <tr>
                            <th colSpan="3" className="D_imfoFont">상세내용</th>
                        </tr>
                    </thead>
                    <tbody>
                        <Card.Body>인근이</Card.Body>
                   </tbody>
            </Table>
            </div>
            <div className="D_imfo">
            <Table responsive>
                    <thead>
                        <tr>
                        <th colSpan="3">근무 위치</th>
                        </tr>
                    </thead>
            </Table>
            
            <GoogleMap/>
            </div>
            <div className="D_imfo">
                <Table responsive>
                    <thead>
                        <tr>
                            <th colSpan="3" className="D_imfoFont">꼭 확인하세요!</th>
                        </tr>
                    </thead>
                    <tbody>
                        <ListGroup>
                            <ListGroup.Item>
                            <Card>
                                <Card.Body>
                                    <Card.Title>지원하기전에 3가지를 꼭 확인하세요.</Card.Title>
                                    <Card.Text>
                                        <ul className="footerConfom">
                                            <li>1. 자신과 맞는 일자리 인지 확인하세요.</li>
                                            <li>2. 일자리 의뢰인 정보를 꼭 확인하세요.</li>
                                            <li>3. 지원하기 전 근무 위치를 꼭 확인하세요.</li>
                                        </ul>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                            </ListGroup.Item>
                        </ListGroup>
                    </tbody>
                </Table>
            </div>
            </div>
        )
    }
}

export default Detail