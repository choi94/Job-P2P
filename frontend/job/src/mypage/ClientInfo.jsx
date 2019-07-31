import React, {useState, useEffect} from 'react'
import axios from 'axios'
import ResMini from "./Templates/ResMini.jsx"
import SupMini from "./Templates/SupMini.jsx"
import AttMini from "./Templates/AttMini.jsx"
import {Tabs,Tab} from 'react-bootstrap'

const ClientInfo = () => {
    const localhost = 'http://localhost:9000'

    const [result, setResult] = useState()

    useEffect( () => {
        axios.get(`${localhost}/work/board/registr/${sessionStorage.getItem('id')}`)
            .then( res => {
                console.dir(res)
                setResult(res.data)

                // setList(res.data)
                // console.dir(list)

                // for(let i = 0; i < Object.keys(res.data.array).length; i++){
                    
                // }
                // setId(res.data[1].id)
                // setTitle(res.data[1].title)
                // setWriteDate(res.data[1].writeDate)
                // setRecruit(res.data[1].recruit)
            })
            .catch( error => {
                alert('로그인을 해주세요')
            })
    },[])


    return (
        <Tabs defaultActiveKey="home" transition={false} id="noanim-tab-example" className="list-nav" >
            <Tab eventKey="home" title="지원 현황">
                <ResMini/>
            </Tab>
            <Tab eventKey="profile" title="등록 현황">
                <SupMini boardList={result}/>
            </Tab>
            <Tab eventKey="1" title="거래">
                <AttMini/>
            </Tab>
        </Tabs>
    );
}

export default ClientInfo