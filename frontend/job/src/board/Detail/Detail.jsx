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
            </h2>
                <Badge variant="primary">#서울</Badge>
                <Badge variant="secondary">#직종</Badge>
                <Badge variant="success">#등록일</Badge>
            </Jumbotron>
            <Jumbotron className="title">
                    <p>마감 일자 : 2019년 7월 15일</p>
                    <Button variant="primary" >지원하기</Button>
            </Jumbotron>
            <hr/>

            <div className="imfo">
            <Table responsive>
                    <thead>
                        <tr>
                        <th colSpan="3">일자리 정보</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td>급여 : 인근이</td>
                        </tr>
                    </tbody>
                    <tbody>
                        <tr>
                        <td>인근 :</td>

                        </tr>
                    </tbody>
                    <tbody>
                        <tr>
                        <td>인근 :</td>

                        </tr>
                    </tbody>
                    <tbody>
                        <tr>
                        <td>인근 :</td>

                        </tr>
                    </tbody>
                    <tbody>
                        <tr>
                        <td>인근 :</td>

                        </tr>
                    </tbody>
            </Table>
            </div>
            <div className="imfo">
            <Table responsive>
                    <thead>
                        <tr>
                        <th colSpan="3">의뢰인 정보</th>
                        </tr>
                    </thead>
                    <tbody>
                    <Card>
                        <Card.Body>
                        <Button variant="primary">지원하기</Button>
                        <Button variant="primary">지원하기</Button>
                        </Card.Body>
                    </Card>
                    </tbody>
            </Table>
            </div>
            
            <div className="text">
            <Form>
            <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label><h3>상세내용</h3></Form.Label>
                <Form.Control as="textarea" rows="25" />
            </Form.Group>
            </Form>
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
                        <th colSpan="3">꼭 확인하세요!</th>
                        </tr>
                    </thead>
                    <tbody>
                <Card>
                    <Card.Body>
                    <ul>
                    <li>꼭! 확인하고 지원하세요.</li>
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