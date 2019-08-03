import React, {useEffect, useState, Component} from 'react'
import {ListGroup} from 'react-bootstrap'
import SupMiniList from './SupMiniList'
import axios from "axios";

class SupMini extends Component {
    constructor(props) {
        super(props)
        this.state = {
            list : []
        }
    }

    componentWillMount() {
        let localhost = 'http://localhost:9000'

        axios.get(`${localhost}/work/board/volunteer/${sessionStorage.getItem('id')}`)
            .then( res => {
                res.data.forEach( arr => {
                    this.setState({list : this.state.list.concat(arr)})
                })
            })
        .catch( error => {
            alert('실패')
        })
    }

    render() {
        return(
            <ListGroup>
                <ListGroup.Item className="SupBox">
                    <div className="SupBoxTitle1">일자리 명</div>
                    <div className="SupBoxTitle2">마감일</div>
                    <div className="SupBoxTitle2">지원자 현황 보기</div>
                </ListGroup.Item>
                {this.state.list.map( (value, index) => {
                    return <SupMiniList list={value} index={index}/>
                })}
            </ListGroup>
        );
    }
}

export default SupMini;
