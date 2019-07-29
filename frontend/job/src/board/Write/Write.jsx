import React,{Component} from 'react'
import {Form, Button, Table, Card, Col} from 'react-bootstrap';
import Title from './Template/title.jsx'
import Recruit from './Template/Recruit.jsx'
import DetailCon from './Template/DetailCon.jsx'
import FootView from './Template/FootView.jsx'
import './Write.css'

class Wirte extends Component{
    render(){
        return(
        <div className="write">
            <h2 className="">글쓰기</h2>
            <div className="w_write">
            <Title/>
            </div>
            <hr/>
            <div className="imfo">
            <Recruit/>
            </div>
            <hr/>
            <div className="imfo">
            <DetailCon/>
            </div>
            <hr/>
            <div className="imfo">
            <FootView/>
            </div>
            <div className="buttonBox">
                <Button variant="dark">작성</Button>
                <Button variant="danger">취소</Button>
            </div>
        </div>
        );
    }
}



export default Wirte



