import React,{Component} from 'react'
import Cards from './view/Cards.jsx'
import Footer from '../common/Footer'
import {Button} from 'react-bootstrap';
import { MDBInput, MDBCol, MDBBtn } from "mdbreact";
import axios from 'axios';


class Board extends Component{
    state={
    BoardData:[
        ],
    Member:{}   
    }
    componentDidMount(){
        axios.get(`http://localhost:9000/board/boardList`)
        .then(res => {
            res.data.forEach((a)=>{
                this.setState({
                    BoardData: this.state.BoardData.concat(a)
                })
            })
         })
    }
    render(){
        return(
            <div>
                <div> {/*검색*/}
                    <MDBCol className="d-flex">
                        <div>
                            <select className="browser-default custom-select">
                                <option value="all">전체</option>
                                <option value="title">제목</option>
                                <option value="2">닉네임</option>
                            </select>
                        </div>
                        <MDBInput hint="Search" type="text" containerClass="mt-0" />
                        <MDBBtn color="primary">검색</MDBBtn>
                    </MDBCol>
                </div>
                <p><Button variant="primary">글쓰기</Button></p>
            <div className="Board_listings">
            <ul className="properties_list">
                {this.state.BoardData.map((BoardDatas, index) =>{
                return <Cards title={BoardDatas} key={index}/>
                    })} 
             </ul>
            </div>
           <Footer/>
        </div>
        )
    }
}

function write(e){
    e.preventDefault()
    window.location = './Write'
}

export default Board