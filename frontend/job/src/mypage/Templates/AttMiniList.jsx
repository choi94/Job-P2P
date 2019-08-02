import React from 'react'
import {Table, Button} from 'react-bootstrap'
import { Link } from "react-router-dom";


const AttMiniList  = (props)=>{
    return(
        <tbody>
            <tr>{/*거래*/}
                <td>{props.index + 1}</td>
                <td>{props.list.recruit}</td>
                <Link to={`/detail/${props.list.id}`}><td>{props.list.title}</td></Link>
                <td><Link to="/trans"><Button variant="danger">거래</Button></Link></td>
            </tr>
        </tbody>
    );
}

export default AttMiniList;