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
        bno:8,
        index:0,
    BoardData:[   
    ],
    }
    componentDidMount(){
        axios.get(`http://localhost:9000/work/board/list/0/${this.state.bno}`)
        .then(res => {
                console.log(res.data)
                res.data.board.forEach((a)=>{
                    this.setState({
                        BoardData: this.state.BoardData.concat(a)
                    })
                })
                this.state.index=this.state.BoardData.length-1
                console.log(this.state.BoardData)
                console.log(this.state.index)
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
                        <MDBBtn color="secondary">검색</MDBBtn>
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
                    <button className="more_listing_btn" onClick={this.morebutton}>+더보기</button>
                    </div>
                    <div className="Boardfooter">
                    <Footer/>
                    </div>
        </div>
        )
    }
    morebutton=(e)=>{
        e.preventDefault()
        if(this.state.BoardData[this.state.index].id!=2)
        { 
            this.state.bno*=2
            this.componentDidMount()
        }
        else if(this.state.BoardData[this.state.index].id==2){
            return alert("더이상 게시물이 없습니다.")
        }
    
   }
}

export default Board