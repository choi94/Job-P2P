import React,{Component} from 'react'
import Info from './Info.jsx'
import ClientInfo from './ClientInfo.jsx'
import Footer from '../common/Footer.jsx'

import '../mypage/css/index.css';
class MyPage extends Component{


    render(){
        return(
        <div className="myPageBox">
            <div className="myPageBox_1">
                <h1 >MyPage</h1>
                <Info/>       
            </div>    
            <div className="myPageBox2">
               <ClientInfo/>
            </div>
        </div>
        )
    }
}

export default MyPage