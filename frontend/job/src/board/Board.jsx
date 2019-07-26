import React,{Component} from 'react'
import Cards from './view/Cards.jsx'
import Footer from '../common/Footer'
import {Button} from 'react-bootstrap';
import axios from 'axios';




class Board extends Component{
    state={
    BoardData:[
        ]
    }
    componentDidMount(){
        axios.get(`http://localhost:9000/board/BoardList`)
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