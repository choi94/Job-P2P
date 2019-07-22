import React,{Component} from 'react'
import Cards from './view/Cards.jsx'
import Footer from '../common/Footer'

class Board extends Component{
    
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div>
           <Cards/>
           <Footer/>
            </div>
        )
    }

    

}
export default Board