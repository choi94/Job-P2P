import React,{Component} from 'react'
import Cards from './view/Cards.jsx'
import Footer from '../common/Footer'
import { Link } from "react-router-dom";
import {Button} from 'react-bootstrap';
import { MDBInput, MDBCol, MDBBtn } from "mdbreact";
import { NavLink } from 'react-router-dom'
import axios from 'axios';


class Board extends Component{
    state={
    BoardData:[   
    ],
    }
    componentDidMount(){
        axios.get(`http://localhost:9000/work/board/list/0`)
        .then(res => {
                console.log(res.data)
                res.data.board.forEach((a)=>{
                    this.setState({
                        BoardData: this.state.BoardData.concat(a)
                    })
                })
        }).catch( error => {
                alert('실패')
        })
    }
    render(){
        return(
            <div>
                <div> 
                {/*검색*/}
                    <MDBCol className="d-flex">
                        <div>
                            <select className="browser-default custom-select">
                                <option value="all">전체</option>
                                <option value="title">제목</option>
                                <option value="nickname">닉네임</option>
                            </select>
                        </div>
                        <MDBInput hint="Search" type="text" containerClass="mt-0" />
                        <MDBBtn color="primary">검색</MDBBtn>
                        <p><Link to={{pathname :'/write'}}><Button variant="primary">글쓰기</Button></Link></p>
                    </MDBCol>
                </div>
                <div className="Board_listings">
                    <ul className="properties_list">
                        {this.state.BoardData.map((BoardDatas,index) =>{
                        return <Cards board={BoardDatas} num={index} key={index}/>
                            })} 
                    </ul>
                    </div>
                    <div className="B_PreviewMoreBox">
                    <NavLink to ="/Board" className="more_listing_btn">+더보기</NavLink>
                    </div>
                    <div className="Boardfooter">
                    <Footer/>
                    </div>
        </div>
        )
    }
}

export default Board