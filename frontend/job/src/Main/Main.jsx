import React,{Component} from 'react'
import Juombo from './Templates/Juombo.jsx'
import Introduce from './Templates/Introduce.jsx'
import BestView from './Templates/BestView.jsx'
import PreView from './Templates/PreView.jsx'
import FooterIntro from './Templates/FooterIntro.jsx'
import Footer from '../common/Footer.jsx'
import './Main.css'
import axios from 'axios'
import im from './image/시안4.png'
import { NavLink } from 'react-router-dom'


class Main extends Component{   
    state={
        PreviewData:[ 
            ],
        Member:{
    
          }   
        }
    componentDidMount(){
        axios.get(`http://localhost:9000/work/board/list/0`)
        .then(res => {
                res.data.board.forEach((a)=>{
                    this.setState({
                        PreviewData: this.state.PreviewData.concat(a)
                    })
                })
        }).catch( error => {
                alert('실패')
        })
    }
    
    render(){
        return(
    <div className="Mainbody">
        <div className="m1" style={Im}>
                <Juombo/>
        </div>
        <div className="m2">
            <Introduce/>
        </div>

        <div className="m3">
            <div className="listingsMain">
                <div className="listingsMainTitle" >
                    <h1>최근에 올라온 Job</h1>
                </div>
                <ul className="properties_list">
                {this.state.PreviewData.map((PreviewDatas, index) =>{
                        return <PreView board={PreviewDatas} num={index} key={index}/>
                })} 
                </ul>
            </div>
        </div>
        <div className="PreviewMoreBox">
			<NavLink to ="/Board" className="more_listing_btn">+더보기</NavLink>
			</div>
{/*         <div className="m4">
            <div className="listingsMain">
                <div className="listingsMainTitle" >
                    <h1>best Job</h1>
                </div>
                <ul className="properties_list">
                {this.state.BestData.map((BestDatas, index) =>{
                        return <BestView title={BestDatas} key={index}/>
                        })} 
                </ul>
            </div>
        </div>    
 */}

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