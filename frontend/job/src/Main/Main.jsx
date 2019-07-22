import React,{Component} from 'react'
import Juombo from './Templates/Juombo.jsx'
import Introduce from './Templates/Introduce.jsx'
import BestView from './Templates/BestView.jsx'
import PreView from './Templates/PreView.jsx'
import FooterIntro from './Templates/FooterIntro.jsx'
import Footer from '../common/Footer.jsx'
import './Main.css'
import im from './image/시안4.png'


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
<<<<<<< HEAD
                <Juombo/>
=======
            <div className="m1_1">
                <Juombo/>
            </div>
>>>>>>> 538c11c0cae80e2bcf322cdad7517cadd25ff7ac
        </div>
        <div className="m2">
            <Introduce/>
        </div>
        <div className="m3">
            <PreView/>
<<<<<<< HEAD
        </div>
        <div className="PreviewMoreBox">
			<div class="more_listing_btn">+ 더보기</div>
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
=======
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
>>>>>>> 538c11c0cae80e2bcf322cdad7517cadd25ff7ac
    </div>
        )
    }
}
<<<<<<< HEAD


=======
>>>>>>> 538c11c0cae80e2bcf322cdad7517cadd25ff7ac
const Im ={
    backgroundImage: `url(${im})`,
    backgroundSize:`auto`,
    backgroundRepeat :`repeat` 
  }
export default Main