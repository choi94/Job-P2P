import React,{Component} from 'react'
import Juombo from './Module/Juombo.jsx'
import Footer from '../common/Footer.jsx'


class Main extends Component{

    constructor(props){
        super(props)
    }
    render(){
        return(
        <div>
        <Juombo/>
        <section>
            <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
        </section>
        <Footer/>
        </div>
        )
    }
}
export default Main