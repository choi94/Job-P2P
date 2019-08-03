import React, {Component} from 'react'
import {Table} from 'react-bootstrap'
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
                    console.log("date",res)
                    res.data.volunteer.forEach( arr => {
                        this.setState({list : this.state.vol_list.concat(arr)})
                    })
                    res.data.request.forEach( arr => {
                        this.setState({list : this.state.req_list.concat(arr)})
                    })
                })
                .catch( error => {
                    alert('로그인을 해주세요')
                })

    }

    render(){
        return(
            <Table responsive>
                <thead>
                    <tr className="res">
                        <th>#</th>
                        <th>기간</th>
                        <th>일자리 명</th>
                        <th>거래페이지로 가기</th>
                    </tr>
                </thead>
                {this.state.vol_list.map( (value, index) => {
                    return <AttMiniList list={value} index={index}/>
                })}
                {this.state.req_list.map( (value, index) => {
                    return <AttMiniList list={value} index={index}/>
                })}
            </Table>
        );
    }
}

function trans(e){
    e.preventDefault()
    window.location = './Trans'
}

export default AttMini;