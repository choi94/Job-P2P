import React,{Component} from 'react'
import Cards from './view/Cards.jsx'


class Board extends Component{
    
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div>
           <Cards/>
            </div>
        )
    }

    

}
export default Board