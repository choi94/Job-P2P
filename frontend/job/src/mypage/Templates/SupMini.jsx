import React, {useEffect, useState, Component} from 'react'
import {Table} from 'react-bootstrap'
import SupMiniList from './SupMiniList'
import axios from "axios";

class SupMini extends Component {
    constructor(props) {
        super(props)
        this.state = {
            list : []
        }
    }


    // const localhost = 'http://localhost:9000'
    // const [registrList, setRegistrList] = useState()

    // useEffect( () => {
    //     axios.get(`${localhost}/work/board/registr/${sessionStorage.getItem('id')}`)
    //         .then( res => {
    //             console.dir(res.data)
    //             setRegistrList(res.data)
    //         })
    //         .catch( error => {
    //             alert('로그인을 해주세요')
    //         })
    // },[])

    // componentWillUnmount() {
    // }

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

    render() {
        return(
                <div>
                    <Table responsive>
                        <thead>
                        <tr className="res">
                            <th>#</th>
                            <th>등록일</th>
                            <th>일자리명 </th>
                            <th>마감일</th>
                            <th>지원자 현황 보기</th>
                        </tr>
                        </thead>
                        {this.state.list.map( (value, index) => {
                            return <SupMiniList list={value} index={index}/>
                        })}

                    </Table>
                </div>
        );
    }

}
export default SupMini;
