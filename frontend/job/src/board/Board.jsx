import React,{Component} from 'react'
import Cards from './view/Cards.jsx'
import Footer from '../common/Footer'
import {Button} from 'react-bootstrap';

class Board extends Component{
    
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div class="write">
                <p align="right"><Button variant="success" onClick={write}>글쓰기</Button></p><br/>
           <Cards/>
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