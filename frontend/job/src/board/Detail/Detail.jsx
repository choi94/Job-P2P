import React,{Component} from 'react'
import {Badge,Button,Table,Card,Jumbotron,Form} from 'react-bootstrap';
import './Detail.css'

class Detail extends Component {
    render(){
        return(
            <div className="detail">
            <hr/>
            <Jumbotron className="title">
            <h2>
                저희집에서 일할 분 구합니다.<Badge variant="secondary">New</Badge>
            </h2><br/>
                <Badge variant="primary">#서울</Badge>
                <Badge variant="secondary">#직종</Badge>
                <Badge variant="success">#등록일</Badge>
                <button type="button" class="title1">관심 JOB</button>
            </Jumbotron>
            <Jumbotron className="title">
                    <p>마감 일자 : 2019년 7월 15일</p><br/>
                    <Button variant="primary" >지원하기</Button>
            </Jumbotron>
            <hr/>

            <div className="imfo">
            <Table responsive>
                    <thead>
                        <tr>
                            <th colSpan="3" className="imfo1">모집 조건</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>일시 : 2019/07/17 ~ 2019/07/19</td>
                        </tr>
                    </tbody>
                    <tbody>
                        <tr>
                            <td>장소 : 인원을 뽑은 후 알림</td>
                        </tr>
                    </tbody>
                    <tbody>
                        <tr>
                            <td>인원 : 2명</td>
                        </tr>
                    </tbody>
                    <tbody>
                        <tr>
                            <td>성별 : 무관</td>
                        </tr>
                    </tbody>
                    <tbody>
                        <tr>
                            <td>연령 : 20세 이상</td>
                        </tr>
                    </tbody>
                    <tbody>
                        <tr>
                            <td>급여 : 1일 8만원</td>
                        </tr>
                    </tbody>
            </Table>
            </div>
            <div className="imfo">
            <Table responsive>
                    <thead>
                        <tr>
                            <th colSpan="3" className="imfo1">의뢰인 정보</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>카카오톡 ID : Hong</td>
                        </tr>
                        <tr>
                            <td>의뢰인의 평점 : </td>
                        </tr>
                    </tbody>
            </Table>
            </div>

            <div className="text">
            <Table responsive>
                    <thead>
                        <tr>
                            <th colSpan="3" className="imfo1">상세내용</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>유형 : 이사를 한 후 집안 정리를 도와주실 분</td>
                        </tr>
                        <tr>
                            <td>기간 : 3일, 11시~17시(상황에 따라 바뀔 수 있음)</td>
                        </tr>
                        <tr>
                            <td>급여 : 1일 8만원</td>
                        </tr>
                        <tr>
                            <td>비고 : 점심 제공</td>
                        </tr>
                    </tbody>
            </Table>
            </div>
              
            <div className="imfo">
            <Table responsive>
                    <thead>
                        <tr>
                        <th colSpan="3">근무 위치</th>
                        </tr>
                    </thead>
                    <tbody>
       
                    </tbody>
            </Table>
            </div>

            <div className="imfo">
            <Table responsive>
                    <thead>
                        <tr>
                        <th colSpan="3" className="imfo1">꼭 확인하세요!</th>
                        </tr>
                    </thead>
                    <tbody>
                <Card>
                    <Card.Body>
                    <ul>

                        <li>지원할때 꼭 해야합니다.</li>
                    </ul>
                    </Card.Body>
                </Card>
                    </tbody>
            </Table>
            </div>
           
            </div>
        )
    }
}

export default Detail