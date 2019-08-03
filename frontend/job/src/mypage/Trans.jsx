import React, {Component} from 'react'
import axios from "axios";
import {Table, Button, Tabs, Tab} from 'react-bootstrap'
import './css/index.css'
import TransRes from './Templates/TransRes';
import TransSup from './Templates/TransSup';

class Trans extends Component{
    
    render(){
        return(
            <div className="TransBox">
                <h2 className="TransTitle">거래</h2>
                <Tabs defaultActiveKey="home" transition={false} id="noanim-tab-example" className="list-nav" >
                    <Tab eventKey="home" title="지원자">
                        <TransSup/>
                    </Tab>
                    <Tab eventKey="profile" title="등록자">
                        <TransRes/>
                    </Tab>
                </Tabs>
            </div>
        )
    }
}

export default Trans