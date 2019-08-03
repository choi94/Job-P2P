import React, {Component} from 'react'
import {ListGroup} from 'react-bootstrap'
import axios from "axios";
import AttMiniList from './AttMiniList'


class AttMini  extends Component{
    constructor(props) {
        super(props)
        this.state = {
            vol_list : [],
            req_list : []
        }
    }

    componentWillMount() {
        let localhost = 'http://localhost:9000'

        axios.get(`${localhost}/progress/my/list/${sessionStorage.getItem('id')}`)
                .then( res => {
                    res.data.volunteer.forEach( vol => {
                        this.setState({vol_list : this.state.vol_list.concat(vol)})
                    })
                    res.data.request.forEach( req => {
                        this.setState({req_list : this.state.req_list.concat(req)})
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
                {this.state.vol_list.map( (value, index) => {
                    return <AttMiniList list={value} index={index}/>
                })}
                {this.state.req_list.map( (value, index) => {
                    return <AttMiniList list={value} index={index}/>
                })}
            </ListGroup>
        );
    }
}


export default AttMini;