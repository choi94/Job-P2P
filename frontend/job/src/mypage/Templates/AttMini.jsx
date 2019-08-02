import React, {Component} from 'react'
import {ListGroup, Button} from 'react-bootstrap'
import axios from "axios";
import AttMiniList from './AttMiniList'


class AttMini  extends Component{
    constructor(props) {
        super(props)
        this.state = {
            list : []
        }
    }

    componentWillMount() {
        let localhost = 'http://localhost:9000'

        axios.get(`${localhost}/work/board/registr/${sessionStorage.getItem('id')}`)
        .then( res => {
            res.data.forEach( arr => {
                this.setState({list : this.state.list.concat(arr)})
            })
        })
        .catch( error => {
            alert('로그인을 해주세요')
        })
    }

    render(){
        return(
            <ListGroup>
                <ListGroup.Item className="AttBox">
                    <div className="AttBoxTitle">#</div>
                    <div className="AttBoxTitle1">기간</div>
                    <div className="AttBoxTitle2">일자리 명</div>
                    <div>거래페이지로 가기</div>
                </ListGroup.Item>
                {this.state.list.map( (value, index) => {
                    return <AttMiniList list={value} index={index}/>
                })}
            </ListGroup>
        );
    }
}


export default AttMini;