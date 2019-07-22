import React,{Component} from 'react'
import Juombo from './Templates/Juombo.jsx'
import Introduce from './Templates/Introduce.jsx'
import BestView from './Templates/BestView.jsx'
import PreView from './Templates/PreView.jsx'
import FooterIntro from './Templates/FooterIntro.jsx'
import Footer from '../common/Footer.jsx'

import im from './image/시안4.png'
import './Main.css'



class Main extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
    <div className="Mainbody">
        <div className="m1" style={Im}>
            <div className="m1_1">
                <Juombo/>
            </div>
        </div>
        <div className="m2">
            <Introduce/>
        </div>
        <div className="m3">
            <PreView/>
        </div>
        <div className="m4">
            <BestView/>
        </div>
        <div className="m5">
            <FooterIntro/>
        </div>
        <div className="Footer"> 
            <Footer />
        </div>
    </div>
        )
    }
}
const Im ={
    backgroundImage: `url(${im})`,
    backgroundSize:`auto`,
    backgroundRepeat :`repeat` 
  }
export default Main