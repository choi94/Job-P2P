import React,{Component} from 'react'
import {Form, Button, Table, Card, Col} from 'react-bootstrap';
import Title from './Template/title.jsx'
import Recruit from './Template/Recruit.jsx'
import DetailCon from './Template/DetailCon.jsx'
import Location from './Template/Location.jsx'
import FootView from './Template/FootView.jsx'
import './Write.css'

const Write = () => {
    const [title, setTitle] = useState()

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
            <div className="w_Location">
            <DetailCon/>
            </div>
            <hr/>
    
            <hr/>
            <div className="imfo">
            <FootView/>
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



