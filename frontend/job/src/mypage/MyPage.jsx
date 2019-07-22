import React,{Component} from 'react'
import {Tabs,Tab} from 'react-bootstrap'
import DeclarInfo from './DeclarInfo.jsx'
import ClientInfo from './ClientInfo.jsx'
import ResMini from "./click/ResMini"
import SupMini from "./click/SupMini"
import '../mypage/css/index.css';
class MyPage extends Component{


    render(){
        return(
        <div>
        <div class="head">
            <h1 class="gd">Job P2P 회원정보</h1>
        </div>
        <div className="myPageBox1">
                <div className="myPageBox1_1">
                <DeclarInfo/>
                </div>
                <div className="myPageBox1_2">
                <ClientInfo/>
                </div>
        </div>        

            <div className="myPageBox2">
                <Tabs defaultActiveKey="home" transition={false} id="noanim-tab-example">
                            <Tab eventKey="home" title="지원 현황">
                                <ResMini/>
                            </Tab>
                            <Tab eventKey="profile" title="등록 현황">
                                <SupMini/>
                            </Tab>
                </Tabs>
            </div>

        </div>
        )
    }
}
function update(e){
    e.preventDefault()
    window.location = './InfoUpdate'
}

function change(e){
    e.preventDefault()
    window.location = './Drop'
}
export default MyPage