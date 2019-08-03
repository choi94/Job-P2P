import React from 'react'
import {ListGroup, Button} from 'react-bootstrap'
import { Link } from "react-router-dom";


const AttMiniList  = (props)=>{
    return(
        <ListGroup>
            <ListGroup.Item className="AttBox">
                <div className="AttBoxTitle">{props.index + 1}</div>
                <div className="AttBoxTitle1">{props.list.recruit}</div>
                <div className="AttBoxTitle2"><Link to={`/detail/${props.list.id}`}>{props.list.title}</Link></div>
                <div><Link to="/trans"><Button variant="danger">거래</Button></Link></div>
            </ListGroup.Item>
        </ListGroup>
    );
}

export default AttMiniList;