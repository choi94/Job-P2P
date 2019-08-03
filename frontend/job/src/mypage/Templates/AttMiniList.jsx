import React from 'react'
import {ListGroup, Button} from 'react-bootstrap'
import { Link } from "react-router-dom";


const AttMiniList  = (props)=>{
    return(
        <ListGroup>
            <ListGroup.Item className="ResBoxList">
                <div className="ResBoxTitle2"><Link to={`/detail/${props.list.id}`}>{props.list.title}</Link></div>
                <div className="ResBoxTitle2">{props.list.recruit}</div>
                <div className="ResBoxTitle2"><Link to="/trans"><Button variant="danger">거래</Button></Link></div>
            </ListGroup.Item>
        </ListGroup>
    );
}

export default AttMiniList;