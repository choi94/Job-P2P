import React,{useState} from 'react'
import {Form, Button, Table, Card} from 'react-bootstrap';
import '../view/main.css'

const Write = () => {
    const [title, setTitle] = useState()


        return(
            <div className="write">
            <hr/>
            <h2 className="w_write">글쓰기</h2><br/>

            <div className="w_write">
                <div className="w_title">
                        <p>제목 :</p>
                </div>
                <div className="w_title1">
                    <Form.Control type="text" />
                </div>
            </div>
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
                            <td>
                                <div className="w_table">
                                    <div className="w_table">
                                        <p>일시 : </p>
                                    </div>
                                    <div className="w_table1">
                                        <Form.Control type="text" />
                                    </div>
                                    <div className="age">
                                        <label>~</label>
                                    </div>
                                    <div className="w_table1">
                                        <Form.Control type="text" />
                                    </div>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                    <tbody>
                        <tr>
                            <td>
                                <div className="w_table">
                                    <div className="w_table">
                                        <p>장소 : </p>
                                    </div>
                                    <div className="w_table1">
                                        <Form.Control type="text" />
                                    </div>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                    <tbody>
                        <tr>
                            <td>
                                <div className="w_table">
                                    <div className="w_table">
                                        <p>인원 : </p>
                                    </div>
                                    <div className="w_table1">
                                        <Form.Control type="text" />
                                    </div>
                                </div> 
                            </td>
                        </tr>
                    </tbody>
                    <tbody>
                        <tr>
                            <td>
                                <div className="w_table">
                                    <div className="w_table">
                                        <p>성별 : </p>
                                    </div>
                                    <div className="w_table1">
                                        <select className="gender">
                                            <option>무관</option>
                                            <option>남</option>
                                            <option>여</option>
                                        </select>
                                    </div>
                                </div>  
                            </td>
                        </tr>
                    </tbody>
                    <tbody>
                        <tr>
                            <td>
                                <div className="w_table">
                                    <div className="w_table">
                                        <p>연령 : </p>
                                    </div>
                                    <div className="age">
                                        <select>
                                            <option>10</option>
                                            <option>20</option>
                                            <option>30</option>
                                            <option>40</option>
                                        </select>
                                        <label>대</label>
                                    </div>
                                    <div className="age">
                                        <label>~</label>
                                    </div>
                                    <div className="age">
                                        <select>
                                        <option>10</option>
                                            <option>20</option>
                                            <option>30</option>
                                            <option>40</option>
                                        </select>
                                        <label>대</label>
                                    </div>
                                </div> 
                            </td>
                        </tr>
                    </tbody>
                    <tbody>
                        <tr>
                            <td>
                                <div className="w_table">
                                    <div className="w_table">
                                        <p>급여 : </p>
                                    </div>
                                    <div className="w_table1">
                                        <Form.Control type="text" />
                                    </div>
                                    <div className="w_table2">
                                        <label>만원</label>
                                    </div>
                                </div> 
                            </td>
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
                            <td>
                                <div className="w_table">
                                    <div className="w_table">
                                        <p>유형 : </p>
                                    </div>
                                    <div className="w_table1">
                                        <Form.Control type="text" />
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div className="w_table">
                                    <div className="w_table">
                                        <p>기간 : </p>
                                    </div>
                                    <div className="w_table1">
                                        <Form.Control type="text" />
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div className="w_table">
                                    <div className="w_table">
                                        <p>비고 : </p>
                                    </div>
                                    <div className="w_table1">
                                        <Form.Control type="text" />
                                    </div>
                                </div>
                            </td>
                        </tr>
                    </tbody>
            </Table>
            </div>

            <div className="imfo">
            <Table responsive>
                    <thead>
                        <tr>
                            <th colSpan="3"  className="imfo1">근무 위치</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th colSpan="3">
                                <div className="w_table">
                                    <div className="w_table">
                                        <p>위치 : </p>
                                    </div>
                                <div className="w_table1">
                                    <Form.Control type="text" />
                                </div>
                                </div> 
                            </th>
                        </tr>
                    </tbody>
            </Table>
            </div>

            <div className="imfo">
            <Table responsive>
                    <thead>
                        <tr>
                        <th colSpan="3"  className="imfo1">저장하기 전 꼭 확인하세요!</th>
                        </tr>
                    </thead>
                    <tbody>
                <Card>
                    <Card.Body>
                    <ul>
                        <li></li>
                    </ul>
                    </Card.Body>
                </Card>
                    </tbody>
            </Table>
            </div>
                <div className="buttonBox">
                    <Button variant="dark" onClick={write}>작성</Button>
                    <Button variant="danger">취소</Button>
                </div>
        </div>
        );
}

function write(e){
    e.preventDefault()
    window.location = './Board'

}

export default Write



