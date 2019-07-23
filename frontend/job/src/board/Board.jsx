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
            <div>
                <p align="right"><Button variant="primary">글쓰기</Button></p>
           <Cards/>
           <Footer/>
            </div>
        )
    }

    

}
export default Board