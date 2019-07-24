import React from 'react'
import ResMini from "./Templates/ResMini.jsx"
import SupMini from "./Templates/SupMini.jsx"
import {Tabs,Tab} from 'react-bootstrap'

const ClientInfo =()=>{
    return (
        <Tabs defaultActiveKey="home" transition={false} id="noanim-tab-example" className="list-nav" >
                <Tab eventKey="home" title="지원 현황">
                    <ResMini/>
                </Tab>
                <Tab eventKey="profile" title="등록 현황">
                    <SupMini/>
                </Tab>
        </Tabs>
    );
}
export default ClientInfo